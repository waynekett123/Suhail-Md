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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_49_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3VJUmdHWXFrdlB2NitROFplbVEyWGlXZ2tPR3czY09pdCt6emVqV0dFZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MzI2NjI3NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc3MEI5M0QxRTFFNTFDMkQzMENDMjVCRTkyN0E3OTczXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI4ODE1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSVnJYbU92RlF4UzBzcnhQZnFpS2xBXCIsXG4gIFwicGhvbmVJZFwiOiBcImViYzkyMzU2LThhZmYtNGJmMy1hNmRiLTU1MjFlNWIzZTdmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDUwLFxuICAgICAgMjM1LFxuICAgICAgOTksXG4gICAgICAxNzAsXG4gICAgICAxMDksXG4gICAgICAxOTksXG4gICAgICA1OCxcbiAgICAgIDQ2LFxuICAgICAgMjE5LFxuICAgICAgMTY0LFxuICAgICAgODUsXG4gICAgICAxNDUsXG4gICAgICA1MixcbiAgICAgIDE2OSxcbiAgICAgIDE0MSxcbiAgICAgIDEwMixcbiAgICAgIDIzMyxcbiAgICAgIDMwLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyMjUsXG4gICAgICAxNjUsXG4gICAgICAxOTIsXG4gICAgICAxNDgsXG4gICAgICAyMDUsXG4gICAgICAxNzksXG4gICAgICA1MCxcbiAgICAgIDE0LFxuICAgICAgMjA4LFxuICAgICAgMTI1LFxuICAgICAgMTc3LFxuICAgICAgNTIsXG4gICAgICAxMyxcbiAgICAgIDI1NCxcbiAgICAgIDI0MCxcbiAgICAgIDEwNixcbiAgICAgIDQ1LFxuICAgICAgMzgsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUxYQlNLMzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDczMjY2Mjc1NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwicnVzaGY5NTJcIixcbiAgICBcImxpZFwiOiBcIjE0ODcyNjY5Nzk3MTc2NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015bnpKQUdFSStIcHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUhNUm9idUNoUVA1NktQZExlZUJzTmo2N1JzMkhuS2NvczFVRlZZUFAwST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtQSthUnE5OWhGTGNSUUZLRnJlTzJjdkJ4alVEVXdLN1RIYXBUdnVVNTdhbVVONEZNUWEzdVJtOEQxVXJSeVNXa2dBVUhyRm15WUlmWWFVNk1LcHREdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6a0FVQXRSZE5XYUQvcC9mQmlLSVR3RnNOL1A1ZXBHeHNmSHF1VmlVZ2wzNitUN1B0UFFCQXJwUDBLdXdsWjlBeC9MTTgvei9xQ2ZWcllydDBJbVBEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MzI2NjI3NTQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjg4MTQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWNRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFY1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnaGdBemZQY2o0TzJqbk8vbFMwNE54aEFqeW1yU0ZyUGcyMHVWQ2YraDNBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDU0MTc0MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI4ODE1MDQ0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
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
