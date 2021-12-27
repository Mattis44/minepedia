const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const { ADDRGETNETWORKPARAMS } = require("dns");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const Prefix = "?";

client.on("ready", () => {
    console.log("Bot ouvert.");
    client.user.setStatus("Online");
    client.user.setActivity("Minepedia.fr");
});


client.on("guildMemberAdd", member => {
    client.channels.cache.get("922891626051960852").send("<@" + member.id + "> est arrivé, vas faire un tour");
    member.roles.add("922900383548993536");
});


client.on("guildMemberRemove", member => {
    client.channels.cache.get("922891626051960852").send("<@" + member.id + "> est partit");
});


client.on("messageCreate", message => {
    if (message.author.bot) return;

    //?help
    if (message.content === Prefix + "help"){
        const Embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Aide")
            .setAuthor("Minepedia")
            .setDescription("Liste des commandes du bot Minepedia.")
            .setThumbnail("https://i.imgur.com/voVINgv.png")
            .addField("**?help**", "Affiche l'aide.")
            .addField("**Non défini**", "__non défini__");

        message.channel.send({ embeds: [Embed]});
    }
    //?serv
    if (message.content === Prefix + "serv"){
        const Embed  = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Serveur")
            .setAuthor("Minepedia")
            .setDescription("Informations serveur")
            .setThumbnail("https://i.imgur.com/voVINgv.png")
            .addField("**IP** :", "play.minepedia.fr")
            .addField("**SITE** :", "http://minepedia.fr");

        message.channel.send({ embeds: [Embed]});
    }


});





















client.login(process.env.TOKEN);