# AlexFlipnote.ts

A simple [AlexFlipnote API](https://api.alexflipnote.dev) wrapper for [Deno](https://deno.land/)

**CREDITS TO [HarutoHiroki's alexflipnote.js](https://npmjs.com/package/alexflipnote.js) FOR CODE REFERENCE AND THE README.**

## Import

```ts
import client from "https://deno.land/x/alexflipnote.ts/mod.ts";
```

## Tokens

Wondering how to get an Auth token to use your API? Well head on to https://discord.gg/DpxkY3x to request one.

## Endpoints

### Image

| Function        | Params                                    | Description                          |
| --------------- | ----------------------------------------- | ------------------------------------ |
| `birb()`        | none                                      | Sends a birb image                   |
| `cats()`        | none                                      | Sends a cat image                    |
| `dogs()`        | none                                      | Sends a dog image                    |
| `sadcat()`      | none                                      | Sends a sad cat image                |
| `amiajoke()`    | `image`                                   | Am I A Joke Meme                     |
| `bad()`         | `image`                                   | Show someone how bad they are        |
| `joke()`        | `image`                                   | r/wooosh                             |
| `salty()`       | `image`                                   | Sends a salty image filter           |
| `blur()`        | `image`                                   | Sends a blur image filter            |
| `invert()`      | `image`                                   | Sends a inverted color image filter  |
| `bnw()`         | `image`                                   | Sends a black and white image filter |
| `deepfry()`     | `image`                                   | Sends a deep fry image filter        |
| `pixelate()`    | `image`                                   | Sends a pixelated image filter       |
| `magik()`       | `image`                                   | Sends a magik image filter           |
| `jpegify()`     | `image`                                   | Turns image into jpeg                |
| `snow()`        | `image`                                   | Sends a snow image filter            |
| `gay()`         | `image`                                   | Sends a gay image filter             |
| `wide()`        | `image`                                   | Sends a wide Putin image filter      |
| `sepia()`       | `image`                                   | Sends a Sepia image filter           |
| `communist()`   | `image`                                   | Sends a communist image filter       |
| `what()`        | `image`                                   | Sends an Earthbound WHAT meme        |
| `shame()`       | `image`                                   | Sends you to the Dock of Shame       |
| `colorify()`    | `image` `c(optional)` `b(optional)`       | Sends a colorify image filter        |
| `floor()`       | `image` `text`                            | The floor is lava                    |
| `scroll()`      | `text`                                    | Sends the Scroll of Truth            |
| `facts()`       | `text`                                    | Sends the facts book                 |
| `calling()`     | `text`                                    | Tom&Jerry Tom calling Meme image     |
| `captcha()`     | `text`                                    | Sends a Google Captcha image         |
| `fml()`         | `text`                                    | Sends a F\*\*\* my life quote        |
| `achievement()` | `text` `icon(optional)`                   | Sends a Minecraft Achievement image  |
| `challenge()`   | `text` `icon(optional)`                   | Sends a Minecraft Challenge image    |
| `supreme()`     | `text` `dark(optional)` `light(optional)` | Sends a Supreme image                |
| `didyoumean()`  | `top` `bottom`                            | Google Did you mean?                 |
| `drake()`       | `top` `bottom`                            | Drake meme image                     |
| `pornhub()`     | `text` `text2`                            | Pornhub Logo image                   |
| `ship()`        | `user` `user2`                            | Ships 2 users                        |
| `trash()`       | `face` `trash`                            | Points out someone is trash          |

### Others

| Function  | Params | Description      |
| --------- | ------ | ---------------- |
| `color()` | `hex`  | Searches a Color |

Params such as:
`image`,`user`,`user2`,`face`,`trash` requires Discord CDN and MEDIA URLs

`dark`,`light` requires a boolean value formatted as a string (`"true"`,`"false"`)

`icons` requires a number (int) value

`text` requires strings

All endpoints will return a `Buffer` except birb/cats/dogs/sadcat/color/fml

`birb/cats/dogs/sadcat` will return a JSON `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color` will return a JSON (example: [Color](https://github.com/HarutoHiroki/alexflipnote.js/blob/master/README.md#Color-Example))

`fml` will return a JSON `{"text": "Today, I was running late for school and accidentally ran a red light and got pulled over. I couldn't find the registration and was freaking out, when the cop told me that he wouldn't give me a ticket if he could give me some advice. His advice? Don't wear your shirt inside-out. FML"}`

## Examples

_Note: These examples use the Deno Discord API library [Harmony](https://github.com/harmonyland/harmony)_

### Cats Example

```js
import client from "https://deno.land/x/alexflipnote.ts/mod.ts";
const alexclient = new client("Your-API-Token-Here");

let link = await alexclient.image.cats();
message.channel.send("", new MessageAttachment("filename.png", link));
```

### Colorify Example

```js
import client from "https://deno.land/x/alexflipnote.ts/mod.ts";
const alexclient = new client("Your-API-Token-Here");

let url =
  "https://cdn.discordapp.com/avatars/242263403001937920/37050aab01de8806e4bc1e2b83983439.webp?size=1024";

let link = await alexclient.image.colorify({
  image: url,
  c: "00ffd9",
  b: "000000",
});
message.channel.send("", new MessageAttachment("filename.png", link));
```

### Color Example

```js
import client from "https://deno.land/x/alexflipnote.ts/mod.ts";
const alexclient = new client("Your-API-Token-Here");
let body = await alexclient.others.color("00ffd9");
message.channel.send(body);
```

returns:

```cmd
{
  "blackorwhite_text": "#ffffff",
  "brightness": 157,
  "hex": "#00ffd9",
  "image": "https://api.alexflipnote.dev/color/image/00ffd9",
  "image_gradient": "https://api.alexflipnote.dev/color/image/gradient/00ffd9",
  "int": 65497,
  "name": "Bright Teal",
  "rgb": "rgb(0, 255, 217)",
  "rgb_values": {"r": 0, "g": 255, "b": 217},
  "shade": ["00ffd9", "00e5c3", "00ccad", "00b297", "009982", "007f6c", "006556", "004c41", "00322b", "001915", "000000"],
  "tint": ["00ffd9", "19ffdc", "33ffe0", "4cffe4", "66ffe8", "7fffec", "99ffef", "b2fff3", "ccfff7", "e5fffb", "FFFFFF"]
}
```

# Made By

This wrapper is made by Tejas#9134 on Discord.

For questions and bug reports you can DM me or join [AlexFlipnote's server](https://discord.gg/alexflipnote)

Suggestions are welcomed!
