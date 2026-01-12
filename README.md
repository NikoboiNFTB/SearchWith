# Search With

A simple **Firefox Extension** that adds multiple **context menu search options** to your browser.

With this extension, you can highlight any text and instantly search it on your favorite sites.

## Overview

This extension adds several search entries to the right-click (context) menu when you select text on a website. Out of the box this extension includes searches:

- **DuckDuckGo** — Search the web.
- **GTA Cars** — Find vehicles from the *Grand Theft Auto* series.
- **IMDb** — Search for movies, TV shows, or people.
- **Metal Archives** — Search by band, album, song, or artist.
- **Songsterr** — Search for music tablature.

## Installation

You will need to add it using temporary extensions:

1. Open **Firefox** and go to:

```md
about:debugging#/runtime/this-firefox
```

2. Click **“Load Temporary Add-on…”**
3. Select the extension’s [`manifest.json`](1.0/manifest.json) file from the project folder ([`1.0`](1.0)).

>> Note: The extension will be removed when Firefox restarts. This is not up to me to change.

## Adding Search Options

You can easily extend this extension by adding new menu items.

Example:

```js
browser.contextMenus.create({
  id: "search-on-songsterr",          // Change this to anything unique
  title: "Songsterr",                 // Change to website title
  contexts: ["selection"],
  icons: {
    "32": "icons/songsterr32.png",    // Change path to your icon
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-on-songsterr") {      // This needs to match id
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const songsterrUrl = `https://www.songsterr.com/?pattern=${query}`;   // Change to unique id, also search URL. Replace the search term with ${query}

    browser.tabs.create({
      url: songsterrUrl     // same as const above
    });
  }
});
```

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](LICENSE) for details.
