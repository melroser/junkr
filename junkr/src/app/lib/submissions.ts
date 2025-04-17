import { Submission } from "@/types";

const submissions: Submission[] = [];

export const addSubmission = (submission: Submission) => {
  submissions.push(submission);
};

export const getSubmissions = (): Submission[] => {
  return submissions;
};

