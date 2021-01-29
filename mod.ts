const endpoints: any = {
  image: {
    birb: "/birb",
    cats: "/cats",
    dogs: "/dogs",
    sadcat: "/sadcat",
    amiajoke: "/amiajoke",
    bad: "/bad",
    joke: "/jokeoverhead",
    salty: "/salty",
    blur: "/filter/blur",
    invert: "/filter/invert",
    bnw: "/filter/b&w",
    deepfry: "/filter/deepfry",
    pixelate: "/filter/pixelate",
    magik: "/filter/magik",
    jpegify: "/filter/jpegify",
    snow: "/filter/snow",
    gay: "/filter/gay",
    sepia: "/filter/sepia",
    wide: "/filter/wide",
    communist: "/filter/communist",
    colorify: "/colourify",
    floor: "/floor",
    scroll: "/scroll",
    shame: "/shame",
    facts: "/facts",
    calling: "/calling",
    captcha: "/captcha",
    achievement: "/achievement",
    challenge: "/challenge",
    supreme: "/supreme",
    didyoumean: "/didyoumean",
    drake: "/drake",
    fml: "/fml",
    pornhub: "/pornhub",
    ship: "/ship",
    trash: "/trash",
    what: "/what",
  },
  others: {
    color: "/color/",
  },
};

const fetchData = async (key: string, url: string) => {
  console.log(url);
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: key,
        "User-Agent": `AlexFlipnote.ts by Tejas#9134`,
      },
    });

    return res.headers.get("Content-Type") === "application/json"
      ? await res.json()
      : new Blob([await res.arrayBuffer()]);
  } catch (e) {
    return `[alexflipnote.ts] Error: ${e}`;
  }
};

export default class AlexClient {
  image: any;
  others: any;

  constructor(key: string) {
    this.image = {};
    this.others = {};
    let baseURL = "https://api.alexflipnote.dev";
    Object.keys(endpoints["image"]).forEach(async (endpoint) => {
      this.image[endpoint] = async function (queryParams = "") {
        let url = new URL(endpoints.image[endpoint], baseURL);
        queryParams !== ""
          ? (url.search = new URLSearchParams(queryParams).toString())
          : "";
        return await fetchData(key, url.toString());
      };
    });
    Object.keys(endpoints.others).forEach(async (endpoint) => {
      this.others[endpoint] = async function (queryParams = "") {
        let url = new URL(endpoints.others[endpoint], baseURL);
        if (endpoints.others[endpoint].includes("color")) {
          if (/^[0-9A-F]{6}$/i.test(queryParams.toUpperCase())) {
            return await fetchData(key, `${url.toString()}${queryParams}`);
          } else {
            return console.error("[alexflipnote.ts] Not a valid hex value");
          }
        }
      };
    });
  }
}
