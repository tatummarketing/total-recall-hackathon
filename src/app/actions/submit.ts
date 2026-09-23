"use server";

import { getSql } from "@/lib/db";

export type SubmissionValues = {
  email: string;
  discordId: string;
  linkedinUrl: string;
  telegramId: string;
  tatumAccountId: string;
  suiAddress: string;
  accountId: string;
  memwalAgentId: string;
  description: string;
  demoVideoUrl: string;
  repoUrl: string;
  additionalDocs: string;
  walrusExperience: string;
  walrusFriction: string;
  socialPosts: string;
};

export type SubmitState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
  /** Echoed back so the form can restore after React clears inputs on action result */
  values?: SubmissionValues;
  /** Bumps on each failed submit so defaultValues remount into the form */
  attempt?: number;
};

function str(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readValues(formData: FormData): SubmissionValues {
  return {
    email: str(formData, "email"),
    discordId: str(formData, "discordId"),
    linkedinUrl: str(formData, "linkedinUrl"),
    telegramId: str(formData, "telegramId"),
    tatumAccountId: str(formData, "tatumAccountId"),
    suiAddress: str(formData, "suiAddress"),
    accountId: str(formData, "accountId"),
    memwalAgentId: str(formData, "memwalAgentId"),
    description: str(formData, "description"),
    demoVideoUrl: str(formData, "demoVideoUrl"),
    repoUrl: str(formData, "repoUrl"),
    additionalDocs: str(formData, "additionalDocs"),
    walrusExperience: str(formData, "walrusExperience"),
    walrusFriction: str(formData, "walrusFriction"),
    socialPosts: str(formData, "socialPosts"),
  };
}

function isLikelySuiAddress(value: string) {
  return /^0x[a-fA-F0-9]{40,64}$/.test(value);
}

function isUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export async function submitHackathonForm(
  prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const values = readValues(formData);
  const attempt = (prev.attempt ?? 0) + 1;

  const fieldErrors: Record<string, string> = {};

  if (!values.email) fieldErrors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "Enter a valid email";
  }
  if (!values.discordId) fieldErrors.discordId = "Required";
  if (!values.linkedinUrl) fieldErrors.linkedinUrl = "Required";
  if (!values.tatumAccountId) fieldErrors.tatumAccountId = "Required";
  if (!values.suiAddress) fieldErrors.suiAddress = "Required";
  else if (!isLikelySuiAddress(values.suiAddress)) {
    fieldErrors.suiAddress = "Expected a Sui address starting with 0x";
  }
  if (!values.accountId) fieldErrors.accountId = "Required";
  else if (!isLikelySuiAddress(values.accountId)) {
    fieldErrors.accountId = "Expected an account ID starting with 0x";
  }
  if (!values.memwalAgentId) fieldErrors.memwalAgentId = "Required";
  if (!values.description) fieldErrors.description = "Required";
  if (!values.demoVideoUrl) fieldErrors.demoVideoUrl = "Required";
  else if (!isUrl(values.demoVideoUrl)) fieldErrors.demoVideoUrl = "Enter a valid URL";
  if (!values.repoUrl) fieldErrors.repoUrl = "Required";
  else if (!isUrl(values.repoUrl)) fieldErrors.repoUrl = "Enter a valid URL";
  if (!values.walrusExperience) fieldErrors.walrusExperience = "Required";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Fix the highlighted fields and try again.",
      fieldErrors,
      values,
      attempt,
    };
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO submissions (
        email, discord_id, linkedin_url, telegram_id,
        tatum_account_id, sui_address, account_id, memwal_agent_id,
        description, demo_video_url, repo_url, additional_docs,
        walrus_experience, walrus_friction, social_posts,
        display_name, project_title
      ) VALUES (
        ${values.email},
        ${values.discordId},
        ${values.linkedinUrl},
        ${values.telegramId || null},
        ${values.tatumAccountId},
        ${values.suiAddress},
        ${values.accountId},
        ${values.memwalAgentId},
        ${values.description},
        ${values.demoVideoUrl},
        ${values.repoUrl},
        ${values.additionalDocs || null},
        ${values.walrusExperience},
        ${values.walrusFriction || null},
        ${values.socialPosts || null},
        ${values.email},
        ${values.description.slice(0, 120)}
      )
    `;
  } catch (error) {
    console.error("submitHackathonForm", error);
    return {
      ok: false,
      message: "Could not save your submission. Please try again in a moment.",
      values,
      attempt,
    };
  }

  return {
    ok: true,
    message: "Submission received. We will follow up on Discord if needed.",
  };
}
