import { submitContact } from "./actions";

export default function HomePage() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <form action={submitContact} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

