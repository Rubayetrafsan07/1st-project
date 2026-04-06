import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Simple file-based storage (no database needed)
const MESSAGES_FILE = path.join(process.cwd(), "data", "messages.json");

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readMessages(): ContactMessage[] {
  try {
    if (!fs.existsSync(MESSAGES_FILE)) {
      return [];
    }
    const data = fs.readFileSync(MESSAGES_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveMessages(messages: ContactMessage[]) {
  ensureDataDirectory();
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const validation = contactSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { success: false, errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, message } = validation.data;

  try {
    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    };

    // Vercel Serverless functions are "Read-Only". They cannot save files to a folder like your computer can.
    // For now, we will print the message to the Vercel logs and return a success message so your website doesn't crash!
    console.log("New Contact Message Received:", newMessage);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form save error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to save message. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to view messages (for admin)
export async function GET() {
  try {
    const messages = readMessages();
    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to read messages." },
      { status: 500 }
    );
  }
}
