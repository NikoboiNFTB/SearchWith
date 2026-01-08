////Add "DuckDuckGo"
//browser.contextMenus.create({
//  id: "search-on-duckduckgo",
//  title: "DuckDuckGo",
//  contexts: ["selection"],
//  icons: {
//    "15": "icons/duckduckgo15.png",
//    "32": "icons/duckduckgo32.png",
//  }
//});
//
//browser.contextMenus.onClicked.addListener((info, tab) => {
//  if (info.menuItemId === "search-on-duckduckgo") {
//    const selectedText = info.selectionText;
//
//    const query = encodeURIComponent(selectedText);
//
//    const DuckDuckGoUrl = `https://duckduckgo.com/?t=ftsa&ia=web&q=${query}`;
//
//    browser.tabs.create({
//      url: DuckDuckGoUrl
//    });
//  }
//});



//Add "GTA Cars"
browser.contextMenus.create({
  id: "search-on-gtacars",
  title: "GTA Cars",
  contexts: ["selection"],
  icons: {
    "16": "icons/gtacars16.png",
    "32": "icons/gtacars32.png",
    "48": "icons/gtacars48.png",
    "64": "icons/gtacars64.png",
    "64": "icons/gtacars64.png",
    "196": "icons/gtacars196.png"
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-gtacars") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const GTACarsUrl = `https://gtacars.net/gta5?q=${query}`;

    browser.tabs.create({
      url: GTACarsUrl
    });
  }
});



//Add "IMDb"
browser.contextMenus.create({
  id: "search-on-imdb",
  title: "IMDb",
  contexts: ["selection"],
  icons: {
    "32": "icons/imdb32.png",
    "196": "icons/imdb196.png"
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-imdb") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const IMDbUrl = `https://www.imdb.com/find/?q=${query}`;

    browser.tabs.create({
      url: IMDbUrl
    });
  }
});



//Add "Metal Archives (Band)"
browser.contextMenus.create({
  id: "search-band-on-metallum",
  title: "Metal Archives (Band)",
  contexts: ["selection"],
  icons: {
    "16": "icons/metallum16.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-band-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumBandUrl = `https://www.metal-archives.com/search?searchString=${query}&type=band_name`;

    browser.tabs.create({
      url: MetallumBandUrl
    });
  }
});



//Add "Metal Archives (Album)"
browser.contextMenus.create({
  id: "search-album-on-metallum",
  title: "Metal Archives (Album)",
  contexts: ["selection"],
  icons: {
    "16": "icons/metallum16.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-album-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumAlbumUrl = `https://www.metal-archives.com/search?searchString=${query}&type=album_title`;

    browser.tabs.create({
      url: MetallumAlbumUrl
    });
  }
});



//Add "Metal Archives (Song)"
browser.contextMenus.create({
  id: "search-song-on-metallum",
  title: "Metal Archives (Song)",
  contexts: ["selection"],
  icons: {
    "16": "icons/metallum16.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-song-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumSongUrl = `https://www.metal-archives.com/search?searchString=${query}&type=song_title`;

    browser.tabs.create({
      url: MetallumSongUrl
    });
  }
});



//Add "Metal Archives (Artist)"
browser.contextMenus.create({
  id: "search-artist-on-metallum",
  title: "Metal Archives (Artist)",
  contexts: ["selection"],
  icons: {
    "16": "icons/metallum16.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-artist-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumArtistUrl = `https://www.metal-archives.com/search?searchString=${query}&type=artist_alias`;

    browser.tabs.create({
      url: MetallumArtistUrl
    });
  }
});



//Add "Songsterr"
browser.contextMenus.create({
  id: "search-on-songsterr",
  title: "Songsterr",
  contexts: ["selection"],
  icons: {
    "32": "icons/songsterr32.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-songsterr") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const songsterrUrl = `https://www.songsterr.com/?pattern=${query}`;

    browser.tabs.create({
      url: songsterrUrl
    });
  }
});