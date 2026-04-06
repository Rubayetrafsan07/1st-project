import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

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
  return NextResponse.json({ messages: [] });
}
