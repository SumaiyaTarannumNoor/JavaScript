const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to encode a string to Base64
function encodeBase64(string) {
    return btoa(unescape(encodeURIComponent(string)));
}

// Function to decode Base64 to original string
function decodeBase64(encodedStr) {
    const missingPadding = encodedStr.length % 4;
    if (missingPadding) {
        encodedStr += "=".repeat(4 - missingPadding);  // Add necessary padding
    }
    return decodeURIComponent(escape(atob(encodedStr)));
}

// Ask the user to input the webhook URL
rl.question("Enter the full webhook URL (e.g., https://discord.com/api/webhooks/...): ", (rawWebhookUrl) => {
    // Split the URL into base URL, ID, and token (assuming the format 'https://discord.com/api/webhooks/{webhook_id}/{token}')
    const [baseUrl, webhookIdToken] = rawWebhookUrl.split("/api/webhooks/");
    const [webhookId, token] = webhookIdToken.split("/");

    // Encode the base URL, ID, and token to Base64
    const encodedBase = encodeBase64(baseUrl + "/api/webhooks");
    const encodedId = encodeBase64(webhookId);
    const encodedToken = encodeBase64(token);

    // Show the encoded Base64 parts
    console.log("\nEncoded Webhook URL Parts:");
    console.log(`Base URL (encoded): ${encodedBase}`);
    console.log(`Webhook ID (encoded): ${encodedId}`);
    console.log(`Token (encoded): ${encodedToken}`);

    // Wait for the user to press any key to decode the values
    rl.question("\nPress Enter to decode the Base64-encoded parts back into the original webhook URL...", () => {
        // Decode the parts back into the original format
        const decodedBase = decodeBase64(encodedBase);
        const decodedId = decodeBase64(encodedId);
        const decodedToken = decodeBase64(encodedToken);

        // Construct the final decoded webhook URL
        const finalDecodedUrl = `${decodedBase}/${decodedId}/${decodedToken}`;

        // Show the final decoded output
        console.log("\nDecoded Webhook URL:");
        console.log(`Final Webhook URL: ${finalDecodedUrl}`);

        // Close the readline interface
        rl.close();
    });
});
