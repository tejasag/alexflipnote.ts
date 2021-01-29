import alexflipnote from "../mod.ts";

const alex = new alexflipnote("uwu");
let color = await alex.others.color("1d1d1d");
console.log(color);

let buffer = await alex.image.drake({ top: "top", bottom: "bottom" });
export default buffer;
