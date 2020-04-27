// ~ Distatus - Set a Discord Streaming Status ~
// Instructions in README.md

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
  
  client.user
    .setActivity("test !", {
      type: "STREAMING",
      url: "https://twitch.tv/."
    })
    .then(presence =>
      console.log(
        `Your Status has been set to "${
          presence.game ? presence.game : "none"
        }"`
      )
    )
    .catch(console.error);
});

client.login(process.env.TOKEN);
