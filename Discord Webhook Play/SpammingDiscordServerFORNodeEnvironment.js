// Your Discord webhook URL
//const webhookUrl = "https://discord.com/api/webhooks/1340617822145089546/elBRdyyzwfeZqgDVkTuKzKmY0QigoKMhO2gz_HAA5OBHexEhE04LeEyCE5ey34Q6Njpy"; <= Comment it out before run, it will get deleted if exposed.

// JSON payload (message content)
const data = {
    content: "Because I am a bit curious... XOXO",
    username: "Mayisha ❤️"
};

// Send the POST request to the webhook URL using fetch
fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => {
        if (response.status === 204) {
            console.log("✅ Message sent successfully! GPT is good.");
        } else {
            console.log(`❌ Failed to send message. Status Code: ${response.status}`);
        }
    })
    .catch(error => {
        console.error("Error sending message:", error.message);
    });
