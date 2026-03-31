/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','2348168855791'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGEHkGtERq4iKXEREbNmYh1IKKLlKFSI94b9vYE9Pz8PuRO9bXTJOnjx5Mn+AosQEGagDyg9Q1fgGKeqPtKsQUMCsiSJUgyEIIYVAAdpif4B2kY6SJHXNgXc1q1BIJ7wHOW6/23CQBlicdOMxo72AxxBUzSnD5z8AvrljMvNGJA9lg87c22YVT+oNCaiY5dHS9Que5y1iJm3aA/aIENe4iLUqQTmqYWagzoG4/hr9fBlc/PvejexRzfqFobsXjXdp44zKpuAMaKjbAbZHoyCzvkY/WhXr8drZmiUsrhRuFhyR7mrayTd3zWX316m4ky1TiKg/fadPcFygUA9RQTHtvqw7NjLdG+gJw5qaaBtQbkP52jnVcWVP4ElfRYP26gw0F/rbrxFHXrpGg4bMg8N4XqxdkvnW0in4C+Iwo9r5HR+8Symbcz/+nbhTf3gl/T+6t7ORfc8vzclEczs/MNd7PN3WepBrCMFSmulrBmplGYf+8Wv0+fb+dlSPC9Qeve22MVqxCbCXwnF2it2iEFHGSBPLsglDPulD2tR/Ynn3s0A4CJ696463eWGkVGLXJ8q0Ki4SJ1zY9t0bH8RD4tvd4MqKc/V4aMUxs6CvzX5kHacqL7YGrY4VllPBOd46auD25VlRijo9BAr7GIIaxZjQGlJcFs83iRkCGN526Fwj+pQXLHzYbclduFrRlUHGsXu7+CJ7Web7LnFs6qLXVZAZ1zJNpRcwBFVdnhEhKFxhQsu6sxAhMEYEKH9/H4IC3el74/p0HDsEEa4J3RdNlZUw/Ojqxyc8n8umoLuuOKv9AdVAYT6fEaW4iEmvY1PA+pzgG1ITSAlQIpgR9KtCVKMQKLRu0K+pVcuwF/6VtxfG62oJhiB/NgSHQAFjbiKxgiTxvCizisz/Rb61PS6sqm8FomAIsve4sSDzPDMRRZ4XJaaP7D8evyj2iCGiEGcEKEA1N3VjSWvNNBfEmiyX0308VeMp+Czpwxvv2lNubnCD13OjJVZ5O2js/FTOMnegZ0nCVIPyupca8bB25Gz/8i8gQAFnP5xN3M1ulSzWLndmAmnZCoNoefD8uzbjaghpNOfHuevlc0vflIYkqNt5cKuMppbNCMrwLU7xKE69lC2RFmto4sbTlz5biG74jH5P5s7wxAikxSl3qo27E0NfjNSR3phCUFN4mflLVOymdnxnzwSeNuxGroTj696Yv8HSWTemX1snHO6F272dCQnOz/70Ev907XNqsp/bCj/91Derv0YYPYe/gH0Lv9C8d+a9yZjH8DeQn/vkP2Zydgrbjo4yzkx0zzDZxN6OhWmwj/D6eAyN6Gpkjtmw2BsFPng8vg9BlUEalXXeb80qKQsEhqAum960ehGVf8ilTnV9vo0XfeUZJHT6OQgezhGhMK+AworiRJZ4mR2/Rzl1Wa0gSYACuDxjLzvw+AdU21buVgcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
