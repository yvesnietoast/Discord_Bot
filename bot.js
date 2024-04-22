<script src='./config.js'></script>
const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!'; // Change this to your preferred command prefix
let reminderInterval; // Variable to store the interval for reminders

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', (message) => {
    if (message.author.bot) return; // Ignore messages from the bot

    // Check if the message starts with the specified prefix
    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Command to start water reminders
        if (command === 'startwater') {
            // Check if reminders are already running
            if (!reminderInterval) {
                // Replace 'YOUR_CHANNEL_ID' with the actual channel ID where you want to send reminders
                const channel = client.channels.cache.get('CHANNEL_ID');

                if (channel) {
                    channel.send('Water reminders started! Stay hydrated!');
                    // Set up a reminder every hour
                    reminderInterval = setInterval(() => {
                        channel.send('It\'s time to drink water! Stay hydrated!');
                    }, 1 * 30 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds
                } else {
                    console.error('Channel not found. Please check the channel ID.');
                }
            } else {
                message.channel.send('Water reminders are already running.');
            }
        }

        // Command to stop water reminders
        else if (command === 'stopwater') {
            // Check if reminders are currently running
            if (reminderInterval) {
                // Replace 'YOUR_CHANNEL_ID' with the actual channel ID where you want to send reminders
                const channel = client.channels.cache.get('1021912504579928074');

                if (channel) {
                    channel.send('Water reminders stopped. Remember to stay hydrated!');
                    clearInterval(reminderInterval);
                    reminderInterval = null;
                } else {
                    console.error('Channel not found. Please check the channel ID.');
                }
            } else {
                message.channel.send('Water reminders are not currently running.');
            }
        }

        // You can add more commands here if needed
        else if (command === 'hello') {
            message.channel.send('Hello!');
        }
    }
});

// Log in to Discord with your bot token
client.login('MTA2MDY1Njg4MjczNTM4NjYyNA.GEDhyU.R-oI60tKUIZgpYVEHh80wkk5OI8vJhzRkKH_BM');
