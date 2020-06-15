exports.run = async (client, message, args) => {
    message.delete();
    
    if(!message.member.roles.cache.some(r=>["🐹 Modo T'chat Test 🐹", "🛡️ P'tit Modo 🛡️", "🌟 Modo T'chat  🌟", "👑 Fondateurs 👑", "👑 Fondateur Principal 👑"].includes(r.name)))
        return message.channel.send(`Désolé <@` + message.author.id + `>, vous n'avez pas la permission à l'utilistion nécessaire de cette commande.`);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member)
        return message.channel.send(`S\'il vous plaît <@` + message.author.id + `>, merci de mentionner un membre valide sur ce serveur`);

    if(!member.kickable)
        return message.channel.send("Je ne ne peux pas kické cette utilisateur, ai-je la permissions nécessaire ? Suis-je assez haut ?");

    let reason = args.slice(1).join(' ');
        if(!reason) reason = "Tu as commis une infraction, un modérateurs t'a donc kické";
    
    const kicked = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
    client.users.cache.get(kicked);
    kicked.send(`Tu as été kické par ${message.author.tag} ===> ${reason}`);
    
    await member.kick(reason)
        .catch(error => message.channel.send(`Désolé, je ne peux pas kické cette utilisateur à cause de : ${error}`));
    message.channel.send(`${member.user.tag} a été kické par ${message.author.tag}`);

}
