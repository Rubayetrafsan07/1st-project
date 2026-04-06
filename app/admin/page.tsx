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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Contact Form Messages</h1>

      {messages.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg text-gray-900 font-semibold">{message.name}</h3>
                  <p className="text-sm text-gray-600">{message.email}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  {new Date(message.timestamp).toLocaleString()}
                  {!message.read && (
                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                  )}
                </div>
              </div>
              <p className="whitespace-pre-wrap text-gray-800">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
