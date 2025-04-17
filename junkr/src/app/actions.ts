'use server';

import { addSubmission } from "@/app/lib/submissions";
import { redirect } from "next/navigation";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  addSubmission({
    name,
    email,
    message,
    submittedAt: new Date(),
  });

  redirect("/dashboard");
}

