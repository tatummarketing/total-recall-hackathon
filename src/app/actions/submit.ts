"use server";

import { getSql } from "@/lib/db";

export type SubmitState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

function str(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
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
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const payload = {
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

  const fieldErrors: Record<string, string> = {};

  if (!payload.email) fieldErrors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    fieldErrors.email = "Enter a valid email";
  }
  if (!payload.discordId) fieldErrors.discordId = "Required";
  if (!payload.linkedinUrl) fieldErrors.linkedinUrl = "Required";
  if (!payload.tatumAccountId) fieldErrors.tatumAccountId = "Required";
  if (!payload.suiAddress) fieldErrors.suiAddress = "Required";
  else if (!isLikelySuiAddress(payload.suiAddress)) {
    fieldErrors.suiAddress = "Expected a Sui address starting with 0x";
  }
  if (!payload.accountId) fieldErrors.accountId = "Required";
  else if (!isLikelySuiAddress(payload.accountId)) {
    fieldErrors.accountId = "Expected an account ID starting with 0x";
  }
  if (!payload.memwalAgentId) fieldErrors.memwalAgentId = "Required";
  if (!payload.description) fieldErrors.description = "Required";
  if (!payload.demoVideoUrl) fieldErrors.demoVideoUrl = "Required";
  else if (!isUrl(payload.demoVideoUrl)) fieldErrors.demoVideoUrl = "Enter a valid URL";
  if (!payload.repoUrl) fieldErrors.repoUrl = "Required";
  else if (!isUrl(payload.repoUrl)) fieldErrors.repoUrl = "Enter a valid URL";
  if (!payload.walrusExperience) fieldErrors.walrusExperience = "Required";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Fix the highlighted fields and try again.",
      fieldErrors,
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
        ${payload.email},
        ${payload.discordId},
        ${payload.linkedinUrl},
        ${payload.telegramId || null},
        ${payload.tatumAccountId},
        ${payload.suiAddress},
        ${payload.accountId},
        ${payload.memwalAgentId},
        ${payload.description},
        ${payload.demoVideoUrl},
        ${payload.repoUrl},
        ${payload.additionalDocs || null},
        ${payload.walrusExperience},
        ${payload.walrusFriction || null},
        ${payload.socialPosts || null},
        ${payload.email},
        ${payload.description.slice(0, 120)}
      )
    `;
  } catch (error) {
    console.error("submitHackathonForm", error);
    return {
      ok: false,
      message: "Could not save your submission. Please try again in a moment.",
    };
  }

  return {
    ok: true,
    message: "Submission received. We will follow up on Discord if needed.",
  };
}
