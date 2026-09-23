var SHEET_NAME = "Submissions";

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Email",
      "Discord handle",
      "LinkedIn",
      "Telegram ID",
      "Tatum ID",
      "SUI address",
      "Account ID (SUI)",
      "MEMWAL_AGENT_ID",
      "Project description",
      "Demo video URL",
      "GitHub repo",
      "Additional documentation",
      "Walrus experience",
      "Walrus Memory friction",
      "Social post links"
    ]);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.email || "",
    data.discordId || "",
    data.linkedinUrl || "",
    data.telegramId || "",
    data.tatumAccountId || "",
    data.suiAddress || "",
    data.accountId || "",
    data.memwalAgentId || "",
    data.description || "",
    data.demoVideoUrl || "",
    data.repoUrl || "",
    data.additionalDocs || "",
    data.walrusExperience || "",
    data.walrusFriction || "",
    data.socialPosts || ""
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("ok");
}
