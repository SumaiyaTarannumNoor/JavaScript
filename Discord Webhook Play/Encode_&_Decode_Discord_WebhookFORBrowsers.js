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

// Function to handle the Webhook URL encoding and decoding
function handleWebhook() {
    const rawWebhookUrl = prompt("Enter the full webhook URL (e.g., https://discord.com/api/webhooks/...):");

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

    // Wait for the user to press a key (simulated using prompt in JavaScript)
    prompt("\nPress OK to decode the Base64-encoded parts back into the original webhook URL...");

    // Decode the parts back into the original format
    const decodedBase = decodeBase64(encodedBase);
    const decodedId = decodeBase64(encodedId);
    const decodedToken = decodeBase64(encodedToken);

    // Construct the final decoded webhook URL
    const finalDecodedUrl = `${decodedBase}/${decodedId}/${decodedToken}`;

    // Show the final decoded output
    console.log("\nDecoded Webhook URL:");
    console.log(`Final Webhook URL: ${finalDecodedUrl}`);
}

// Call the function to handle the webhook URL encoding and decoding
handleWebhook();
