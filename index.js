const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
    console.log('ready!!!')

    client.user.setActivity("Tutorial bot!", { type: "Watching", url: "https://www.youtube.com/" }) // YOU CAN PUT ANY TWITCH STREAMING LINK IN THIS AREA
})

client.login("MTMwNTk4MjkzMjY0NDc5NDQwMA.GQnAPU.GGBVwf88IFog0xS16UKeC7Xt1axtXoBMSCKbak") // Put your token here

// REMEMBER TO CLICK Ctrl + S to save it or else it won't work!!!
// MY TOKEN WILL BE RESET WHENEVER I POSTED OUT A VIDEO ABOUT TUTORIAL!

// REMEMBER TO CLICK CTRL + S TO SAVE THE WORK YOU'VE DONE!
