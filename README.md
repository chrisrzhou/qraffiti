<img src="src/assets/logo.png" width='128' height='128' />

# qraffiti

https://qraffiti.chrisrzhou.io

[![MIT License][license-badge]](LICENSE.md)

[license-badge]: https://flat.badgen.net/badge/license/MIT/blue

Create graffiti with QR codes. No ads + logins + servers, just fun + art :)

## Features

- 100% static and client-facing QR code generator
- Smooth and mobile-friendly UI
- Supports common QR input types (e.g. URL, text, email, sms, wifi)
- Rich ways to customize QR codes
  - Logo
  - Eyes (color, pattern)
  - Body (color, pattern)
  - Background color
- Jumpstart into a customized QR code using presets
- Share your QR graffiti with a permalink or tweet
- Extensible: Clone this codebase and customize QR assets (logos, backgrounds), inputs and renderers to your own needs

## Motivation

When I first learned about QR codes, I loved the idea of using them to encode information, and was developing a few physical concept-art with QR codes. I was inspired by some of the work done by [QRCode Monkey](https://www.qrcode-monkey.com/). At the time of this writing, I am ramping up on building [JAMStack](https://jamstack.org/) applications, and felt fairly confident on building a QR code generator that is 100% static and client-facing.

Following my initial desire to build something artistic with QR codes, I landed on the idea of _'graffiti with QR codes'_, and this kickstarted **qraffiti**, a creative and fun static QR code generator.

## Deploy Production Build

You can build and deploy the production app by running:

```sh
git clone git@github.com:chrisrzhou/qraffiti.git
yarn
yarn build
# serve build folder
```

Or, you can deploy to Netlify by hitting the button below:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrisrzhou/qraffiti)

## Developing

This project is a creative UIUX initiative around QR codes, and is considered 'done'. That being said, please feel free to submit pull requests that help improve the overall user experience of the app!

If you wish to clone and fork your own custom **qraffiti** generator, run the following:

```sh
git clone git@github.com:chrisrzhou/qraffiti.git
yarn
yarn dev
```

### Adding QR Inputs, Patterns, Presets

**qraffiti** provides ways to set QR inputs, patterns and presets on the UI. The code affecting these are located in the [/qr](src/qr/) folder. Edit the corresponding `inputs.js`, `patterns.js` and `presets.js` files and changes will automatically be picked up by the UI.

### Adding Logos and Backgrounds

**qraffiti** allows users to select provided logos and backgrounds. You can add or remove logos in the [/assets](src/assets) folder. The GraphQL calls will naturally pick these up and include them in the app.

### Areas of Improvement

- Find a way to hookup [/qr](src/qr) folder to use GraphQL instead of constructing configurations manually.
- Renderer code for eye patterns could use more love.
- Refactor string constants to enums.
