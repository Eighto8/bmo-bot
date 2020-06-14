exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.filter(roles === ["🛡️ P'tit Modo Test 🛡️",], ["🌟 Modo T'chat  🌟"], ["👑 Fondateurs 👑"], ["👑 Fondateur Principal 👑"].includes(roles.name))[0] === undefined)
        return message.channel.send(`Désolé <@${message.author.id}>, vous n'avez pas la permission à l'utilistion nécessaire de cette commande.`);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member)
        return message.channel.send(`S\'il vous plait <@{message.author.id}>, merci de mentionner un membre valide sur ce serveur`);

    if(!member.kickable)
        return message.channel.send("Je ne ne peux pas kické cette utilisateur, avez vous les permissions nécessaire ?");

    let reason = args.slice(1).join(' ');
        if(!reason) reason = "Aucune raison ajouter";

    await member.kick(reason)
        .catch(error => message.channel.send(`Désolé, je ne peux pas kické cette utilisateur à cause de : ${error}`));
    message.channel.send(`${member.user.tag} à été kické par ${message.author.tag}`);
    message.user.send(`Vous avez été kické par ${message.author.tag} ===> ${reason}`);
  
}
