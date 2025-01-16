# Electron Boilerplate
**Includes the following npm packages**
- mongoose - *my preffered database*
- electron-store - *persistent data storage for settings and preferences*
- electronmon - *for auto app restart on save*
- electron-builder - *for packaging app*

**My other preferred inclusions**
- bootstrap - *for responsive design to incorporate various screen sizes*
- bootstrap-icons - *for placing icons in ui*
- bootstrap-bundle js - *includes popper.js and bootstrap.js*

**My custom modules**
- `assets/css/app.css` - *for removing scroolbars, preventing user selection and dragging of html components and electron drag, no-drag properties*
- `helpers/appManager.js` - *for managing database configurations, user sessions and app settings*
- `helpers/dbManager.js` - *for database operations*

## Getting Started
**Download .zip or clone template for your app**
```bash
git clone --template=https://github.com/BXAMRA/electron-template.git my-app
```

## Configuration
### Make following changes to "package.json" properties
1. Change **"name": "app-name"** property. Replace **"app-name"** with **"name-of-the-package"**
2. Change **"productName": "App Name"** property. Replace **"App Name"** with **"Name of The App"**
3. Change **"description": "App Description"** property. Replace **"App Description"** with **"One line description about app"** *- ^property is not required*
4. Change **"author": "Author Name"** property. Replace **"Author Name"** with **"Your Name or Company Name"** *- ^property is not required*

### Make following changes to "electron-builder.json" properties
1. Change **"build": { "appId": "domain.company-name.app-name",** property. Replace **"domain", "company-name" and "app-name"** with your respective values.
2. Change **"mac": { "category": "mac.app.category",** property. Replace **"mac.app.category"** with UTIs from [here](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8) *- ^property is not required if not building for mac*
3. Change **"linux": { "category": "Category" }** property. Replace **"Category"** with Main Category or Additional Category from [here](https://specifications.freedesktop.org/menu-spec/latest/apa.html#main-category-registry) *- ^property is not required if not building for linux*\
\
***^not required properties can be removed***

## Running App
**Install node_modules**
```bash
npm install
```
**Run script to start app**
```bash
npm run dev
```
**Run this script for auto restart after saving changes**
```bash
npm run devmon
```

## Templates
**Copy, rename and use built templates**
* view - `views/z.html`
* script - `scripts/z.js`
* preload - `preloads/z.js`


## Packaging application
**This template has electron-builder configured to make arm64 apps for mac & win and x64 apps for mac, win and linux**

*Folder `dist/` will contain packaged apps after building*

**Application will be packaged with default electron app icon unless provided custom icons**

*Put custom icons in `build/` directory at project root.*

**Required icons**
* icon.icns @ 512x512px for macOS
* icon.ico @ 256x256px for windows
* icon.png @ 512x512px for linux

### Packaging and testing scripts


* This script creates unpackaged app for testing on current dev environment
```bash
npm run app:test
```

* This script packages app for current dev environment
```bash
npm run app:dist
```

* This script packages mac app for arm64
```bash
npm run app:dist-macarm
```

* This script packages mac app for x64
```bash
npm run app:dist-macx64
```

* This script packages win app for arm64
```bash
npm run app:dist-winarm
```

* This script packages win apps for x64
```bash
npm run app:dist-winx64
```

* This script builds linux deb package
```bash
npm run app:dist-linux
```
