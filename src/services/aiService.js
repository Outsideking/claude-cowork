import axios from "axios";

export async function askAI(message) {
  const response = await axios.post(
    "https://api.anthropic.com/v1/messages",
    {
      model: "claude-3-opus-20240229",
      max_tokens: 500,
      messages: [{ role: "user", content: message }]
    },
    {
      headers: {
        "x-api-key": process.env.CLAUDE_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
}
