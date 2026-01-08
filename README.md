# 🔍 Search With

A simple **Firefox Extension** that adds multiple **context menu search options** to your browser.  
With this extension, you can highlight any text and instantly search it on your favorite sites.  
>> OOB includes **DuckDuckGo**, **IMDb**, **GTA Cars**, **Metal Archives**, and **Songsterr**.

---

## 📋 Features

This extension adds several custom entries to the right-click (context) menu when you select text on a webpage:

- **DuckDuckGo** — Search the web.
- **GTA Cars** — Find vehicles from the *Grand Theft Auto* series.
- **IMDb** — Search for movies, TV shows, or people.
- **Metal Archives** — Search by band, album, song, or artist.
- **Songsterr** — Search for music tablature.

---

## ⚙️ How It Works

Each menu item is created using the `browser.contextMenus.create()` API.  
When you right-click on selected text, the extension shows available search options.  
Upon selecting one, it:

1. Reads the highlighted text.
2. Encodes it for use in a URL.
3. Opens a new browser tab with the corresponding search result page.

---

## 🧩 Installation (Temporary)

Firefox has not yet accepted the addon, so at this time you'll need to add it using temporary extensions:

1. Open **Firefox** and go to:  
   `about:debugging#/runtime/this-firefox`
2. Click **“Load Temporary Add-on…”**
3. Select the extension’s `manifest.json` file from your project folder.

>> ⚠️ Note: The extension will be removed when Firefox restarts. This is not up to me to change.

---

## 🧠 Example: Adding a New Search Option

You can easily extend this extension by adding new menu items.  
Here’s a quick example for **Wikipedia**:

```js
browser.contextMenus.create({
  id: "<unique-id>",
  title: "Example",
  contexts: ["selection"],
  icons: { "32": "icons/icon32.png" }
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "<unique-id>") {
    const query = encodeURIComponent(info.selectionText);
    browser.tabs.create({ url: `https://example.com/search=${query}` });
  }
});
```

---

## 🧑‍💻 Developer Notes

- Built using the **WebExtensions API**, compatible with modern Firefox versions.
- All actions are performed **locally** — no data is collected or stored.
- Permissions required:
  - `contextMenus`
  - `tabs`

---

## 📜 License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**.  
You are free to use, modify, and distribute it under the same license terms.  
For more information, see [LICENSE](LICENSE)

---
