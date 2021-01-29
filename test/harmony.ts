import {
  Client,
  Message,
  Intents,
  MessageAttachment,
} from "https://deno.land/x/harmony@v1.0.0/mod.ts";
import img from "./index.ts";

const client = new Client();

client.on("ready", () => {
  console.log(`Ready! User: ${client.user?.tag}`);
});

client.on(
  "messageCreate",
  async (msg: Message): Promise<void> => {
    if (msg.content === "!alexflipnote") {
      await msg.reply("", {
        file: new MessageAttachment("alexflip.png", img),
      });
    }
  }
);

client.connect("😜", Intents.All);
