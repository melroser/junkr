import { getSubmissions } from "@/app/lib/submissions";

export default function DashboardPage() {
  const submissions = getSubmissions();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {submissions.map((s, i) => (
            <li key={i} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>Email:</strong> {s.email}</p>
              <p><strong>Message:</strong> {s.message}</p>
              <p className="text-xs text-gray-500">
                Submitted at: {s.submittedAt.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

