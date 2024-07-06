const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVkaTZyWDBLbnY0d3V6VVEyQmRTUTYzOVFLN0djeDNUOXU4SU8vSU9IKzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImIyd0JsWnZjUnI2R2dMNmdaUy1VdGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjJjYjlhY2EtYTE0ZC00YTUzLTljM2ItN2Q0Nzk4YTg1MzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDE0MixcbiAgICAgIDcyLFxuICAgICAgMjAyLFxuICAgICAgNSxcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICAxNTEsXG4gICAgICAyOSxcbiAgICAgIDIxNixcbiAgICAgIDY4LFxuICAgICAgMTE4LFxuICAgICAgMjksXG4gICAgICAyMzAsXG4gICAgICAxODEsXG4gICAgICA3NixcbiAgICAgIDEwMixcbiAgICAgIDE4NixcbiAgICAgIDE2MyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAyNTQsXG4gICAgICAxMDAsXG4gICAgICAyMjUsXG4gICAgICA5NSxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgMTc1LFxuICAgICAgOTUsXG4gICAgICA2MCxcbiAgICAgIDI1MyxcbiAgICAgIDEwLFxuICAgICAgNzIsXG4gICAgICAxMjUsXG4gICAgICA4MyxcbiAgICAgIDIwNSxcbiAgICAgIDE5NSxcbiAgICAgIDI3LFxuICAgICAgNjcsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0VRVjQyVzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NzU4MDE1ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE4NTY3NDI3OTc1NDk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdlMvTkVERU1mR3BiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZNNlZ5eVJ0bXI1cmtpeDZkQjFrSGhSajBBbDFIYW1QNzdXZ2pBOG1abnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia2RGSGZvaWtYODBsT1RWaDZKR0V5UGdNRE5Yc3BaRUFhVGd5Q0hPb3R5RVU0U2NNeDFEM2VEbnNvanRTa2duVkhDb0svWExBQ1FQZ0ozMGJYdlgxQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR1MxSnVFNENENnFqaGRPVWljVVU1RGx1RUIvSEZNY3FHNnNZVVk5ZnFYUGt4aWNlOWF3Q1dpTkFuZGxpdEJyR1dvMmJTWXMvQUJmTnoyN1Q5cnlSQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk3NTgwMTU4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjc5ODgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFFNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIUU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYUDRrbEw3alRCNVRFbkdhL1JnUjNRMmZZUzdjUGthU01nNGpwWE1XODdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3NzIxNzkxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
