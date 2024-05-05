const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`oui je suis là pose ta question...🧘🏽‍♂️'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🧠🔍 "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('♡   ∩_∩\n    （„• ֊ •„)♡\n┏━∪∪━━━━ღ❦ღ┓\n🌐['+ response +'] ♡\n♡   𝘢𝘦𝘴𝘵𝘩𝘦𝘳-[📩]\n┗ღ❦ღ━━━━━━━┛\n[✦]|𝗚𝗣𝗧-𝟰 ', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
