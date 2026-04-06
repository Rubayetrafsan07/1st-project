import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-dynamic";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

function getMessages(): ContactMessage[] {
  try {
    const filePath = join(process.cwd(), "data", "messages.json");
    const data = readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export default function AdminPage() {
  const messages = getMessages();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 min-h-screen">
      <h1 className="mb-8 text-3xl font-bold text-text-primary">Contact Form Messages</h1>

      {messages.length === 0 ? (
        <p className="text-text-secondary">No messages yet.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="rounded-lg border border-border bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg text-text-primary font-semibold">{message.name}</h3>
                  <p className="text-sm text-text-secondary">{message.email}</p>
                </div>
                <div className="text-right text-sm text-text-secondary">
                  {new Date(message.timestamp).toLocaleString()}
                  {!message.read && (
                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-primary text-white"></span>
                  )}
                </div>
              </div>
              <p className="whitespace-pre-wrap text-text-primary mt-4">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
