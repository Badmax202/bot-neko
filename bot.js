const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
	bot.user.setGame("n!help | n!server");
  console.log("[!]Connexion en cours... \n[!]Veuillez Patientez! \n Chargement terminé !");
});

	bot.on('message', message => {
	  if (message.author.bot) return;
	  if (!message.content.startsWith(process.env.PREFIX)) return;
let command = message.content.split(" ")[0];
command = command.slice(process.env.PREFIX.length);

let args = message.content.split(" ").slice(1);

if (command === "add") {
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p+c);
  message.channel.sendMessage(total);
}

if (command === "sayd") {
	message.channel.sendMessage(args.join(" "));
	message.delete()
}

  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }

  if (command === "miaou") {
    message.channel.sendMessage(':speech_balloon: `Miaou !`');
  }

  if (command === "woof") {
    message.channel.sendMessage(":speech_balloon: `Je ne suis pas un chien !`");
  }

  if (command === "help") {
    message.author.sendMessage("```Commandes de Neko bot : \nn!help : Voir les commandes de Neko Bot\n n!updates : Voir les dernières updates\n n!server : Rejoins le server officiel de Neko Bot !\n n!info : Tout savoir sur Neko Bot\n n!test : Tester le bot \n n!site : Voir le site officiel de Neko Bot\n n!twitter : Voir le twitter officiel de Neko Bot\n\n n!miaou : Miaou ! \n n!woof : Je ne suis pas un chien ! \n n!say [texte] : Faire dire quelque chose à Neko Bot \n n!sayd [texte] : Supprime tout de suite la commandes \n n!add [nb] [nb] : Additionner des nombres\n n!weekinfos : Une info sur les chats par semaine \n n!weekcat : Le chat de la semaine \n n!ping : Donne le ping \n```");
    message.channel.sendMessage(":speech_balloon: `Regarde tes MP's !`")
  }

  if (command === "server") {
    message.channel.sendMessage(":speech_balloon: Voici le serveur officiel de Neko Bot : \nhttps://discord.gg/zzSERny");
  }

  if (command === "site") {
    message.channel.sendMessage(":speech_balloon: Voici mon site officiel : http://nekobot.hol.es/");
  }

  if (command === "twitter") {
    message.channel.sendMessage(":speech_balloon: Voici mon twitter officiel : https://twitter.com/NekoBotOFF");
  }

  if (command === "weekinfos") {
    message.channel.sendMessage(":speech_balloon: Le Saviez-vous ? Le nom scientifique de Chat est : Felis silvestris catus");
  }

	if (command === "ping") {
	message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	}

	if (command === "updates") {
	message.channel.sendMessage(":speech_balloon: Dernière version : Alpha 0.0.3 \n Nouvelles commandes : n!info \n Suppresion des commandes n!version et n!créateur");
	}

	if (command === "test") {
		message.channel.sendMessage(":speech_balloon: Miaouh, je suis en ligne !")
	}

	if (command === "weekcat") {
		message.channel.sendMessage(":speech_balloon: Voici le chat du jour : https://media1.popsugar-assets.com/files/thumbor/kzUkEhaYWmLfnU6Pi79Eij54B2Y/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/840/n/1922507/451ce76f4a688e7b_rs_500x281-140808102730-cutest-cat-gifs-please/i/Whatheckyoudoing.gif")
	}
		
bot.login(process.env.BOT_TOKEN);
