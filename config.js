//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝐆𝐀𝐌𝐄𝐑 by      ༺✪𝐃𝐀𝐑𝐊♛𝐆𝐀𝐌𝐄𝐑✪༻
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "vador2899@gmail.com";
global.location = "Dakar, Sénégal";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/H8aHmiq6NsvBqmNWQAL4Az";
global.website = process.env.GURL || "https://chat.whatsapp.com/H8aHmiq6NsvBqmNWQAL4Az";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/221778271315 , https://wa.me/221778271315";
global.sudo = process.env.SUDO || "221778271315";
global.owner = process.env.OWNER_NUMBER || "221778271315";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://files.catbox.moe/szcmcu.jpg"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVML2krN2xxTW1qbk5Cd1hWSUdOcnp2UFR4d292S2Z4MFhZZEU0OTBuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURTQTdZZnRNYjl2cnZpa3NFZ2QzWU1VOW10bzhvTVVZendpNi9nQXRFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSFZueFJCNWNWUGVXRWFJRjBEbEJMY3JyMVhWaVBhb0E1b1VicDRuMjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWTZsMVU0MXJxL0xkU0hNT1YyZ2ZFV1RuZnZHQUQ1My9vLzhPbjdNZ1NVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOcnY3QVVSaXdZdlRXai9maitHL3NYU05Xb0h5Ky9EWmdhSWJjb2RKV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inhoa1Y3SlRZOTZULzU2Vk9KTkRkTmVNa1VzdlBvYkxtY3lqUFdDWkprRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEN2RVE0dXE3WXJhbzNUYzc2L1FvMy9VbkRyNDlqRFh5dVk4T2FpWWlrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUQyY0JlcTE2enR5bUFEd0wzYVV2cUs2MUdSN2owU1VramlFTGhFUlV3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBiN1praGtjQ0piVlJlMGtILzNvMnBDVFBCN2lHNFZVazVjeUozVWMvanpKTms5UGt5NDBYSURvWVFwaXRaRmtrUmNJc1FiRmliM3RkU3VCRXFWZWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6Ik53WWQ1TXNhcUdqeC9ReC9WYnVlTktTaVk0MkdJaGpsMVNTZVZIWkFFUkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1MNUd4eVZaVFFHNU40Q0NCdU81VmciLCJwaG9uZUlkIjoiNTY3Y2Y0NDEtMzQxMy00YmE0LWE3ZGEtODY1ODhkZWQyOTI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBTZHFYaTBMcVBzSUVqN2lEVEVLL1JwdTByVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYVdLSVNGbzdmVEI3QnFwVXdLRjJva3BkbGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkdZTUhQRjMiLCJtZSI6eyJpZCI6IjIyMTc3ODI3MTMxNTo1NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCL8J2QgPCdkIbwnZCH8J2QhPCdkJHwnZCT8J2QgCDwnZCG8J2QgPCdkIzwnZCE8J2QkSDwnZCL8J2QjvCdkJPwnZCH8J2QgfCdkJHwnZCO8J2QgvCdkIoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pDK2xhb0RFSkNYemJzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBsVVFUVkFuSVloWkxGU2NiK1NaK2FTN2ViOVFRSm0wazRjQitMK0t1Ukk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZWbnp5ajNla0lxVnZZYmQrSU8xQ1ZNMkM3d2VaVC9hVGV3U3JqbS9HR2svTGZWdWtFaGZZbVRyMTlvUzl4cWtFY3BxdXRQWWE0bWFoQ3I0bXkxU0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUb2pSNC9iZ3Q3Qm1HWjJHVlhTVVhEcW5LQTBwWmUxY1Y3MlRmb0ZuYlhqV3QyS2IzY2s3R3JpeGkvZ3lBaEhFRHkyenBwSlVQUU43TS9hY1BkYjNoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc3ODI3MTMxNTo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWlZFRTFRSnlHSVdTeFVuRy9rbWZta3UzbS9VRUNadEpPSEFmaS9pcmtTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NjA5MjQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZmUCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝐆𝐀𝐌𝐄𝐑`",
  author: process.env.PACK_AUTHER || " 𝙎-𝐆𝐀𝐌𝐄𝐑",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝐆𝐀𝐌𝐄𝐑",
  botname: process.env.BOT_NAME || "༺✪𝐃𝐀𝐑𝐊♛𝐆𝐀𝐌𝐄𝐑✪༻",
  ownername: process.env.OWNER_NAME || "༺✪𝐃𝐀𝐑𝐊♛𝐆𝐀𝐌𝐄𝐑✪༻",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
