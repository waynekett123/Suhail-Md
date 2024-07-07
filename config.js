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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254797580158";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_59_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2RkJTSTJENUpCSG45NlVURmVWVjFteVJ2ek04UXhRTEJFL2FEL0VSNXNRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKd2ZsTmw3YlQ0cU02YWd4NEx2d29nXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyZWIxNGFkLTFkNTQtNGY4Yy04MWExLTJlZjAzZDNlMTc2NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNjgsXG4gICAgICA5NCxcbiAgICAgIDE1NyxcbiAgICAgIDI1MyxcbiAgICAgIDI0MCxcbiAgICAgIDkzLFxuICAgICAgNjcsXG4gICAgICAyMjAsXG4gICAgICA3MSxcbiAgICAgIDI1MyxcbiAgICAgIDE3MCxcbiAgICAgIDE3MixcbiAgICAgIDkwLFxuICAgICAgMjE3LFxuICAgICAgMjcsXG4gICAgICAxMzIsXG4gICAgICAxODAsXG4gICAgICAyMDAsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMzQsXG4gICAgICAxMzEsXG4gICAgICAyMzksXG4gICAgICAyNixcbiAgICAgIDEzNyxcbiAgICAgIDk0LFxuICAgICAgMjQsXG4gICAgICAxNTIsXG4gICAgICAxMzgsXG4gICAgICA5MyxcbiAgICAgIDI0MixcbiAgICAgIDIxMyxcbiAgICAgIDI0NSxcbiAgICAgIDE3NCxcbiAgICAgIDIwMixcbiAgICAgIDE3NCxcbiAgICAgIDIzMixcbiAgICAgIDE0NCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUhES0U4TllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NzU4MDE1ODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxODU2NzQyNzk3NTQ5OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6Uy9ORURFT0hUcGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNk02Vnl5UnRtcjVya2l4NmRCMWtIaFJqMEFsMUhhbVA3N1dnakE4bVpucz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMdnYyUFRaZ3JQRVg3c1JNaTV1LzQxUUpoc29UZnpLdGs3bTgwV3Q1eVZkMnNuWjZnN0YrUXZLV3UySGtwK3kxMzZkVXhJQUF0dGJ6OGpzb3JZSndDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3VWJSMzVMOCtGcWMzT3VRYm9CZTY4dG5pV3FZQmJXZnRXc1pxMkdEUW5EZ0dBZ0kySW5NV2hLSW95Z1dWeXRibnZzNFByeFNLN0luK2hPVEZuRDNqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTc1ODAxNTg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjgxNTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFFNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIUU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYUDRrbEw3alRCNVRFbkdhL1JnUjNRMmZZUzdjUGthU01nNGpwWE1XODdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3NzIxNzkxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "wayne",
  ownername:process.env.OWNER_NAME|| "wayne",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
