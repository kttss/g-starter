## Gulp 4 webpack starter with generators and translations

🚀 Automatically and easily generate components, based on atomic design logic: Element > Fragment > Lame > Page

![enter image description here](https://i.imgur.com/BoxlO94.png)

These tools make it a solid front-end boilerplate to get a new project off the ground.

## Usage

### Requirements
Make sure all dependencies have been installed before moving on:

* [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/get-npm)
* [Node.js](https://nodejs.org/en/download/) >= 8.16.0
* [Gulp](http://gulpjs.com/)

### Quick start: Installation
Clone this repository and run
- `yarn` or `npm install` to install dependencies

### Tasks
| Task Name | Description | Environment |
| :------------- | :------------- | :------------- |
| `yarn start` or `npm run start` | Generate a development environment, start the server and watch for changes | Development
| `yarn watch` or `npm run watch` | Start the server and watch for changes | Development
| `yarn build` or `npm run build` | Compile production code | Production

### Generating components
| Task Name | Description |
| :--------------------- | :------------- |
| `gulp generate --element elementName` | generate an element files under `views/elements/` and `scss/elements` folder
| `gulp generate --fragment fragmentName` | generate a fragment files under `views/fragments/` and `scss/fragments/` folder
| `gulp generate --lame lameName` | generate a lame files under `views/lames/` and `scss/lames/` folder
| `gulp generate --layout layoutName` | generate a layout twig under `views/layouts/` folder
| `gulp generate --page pageName` | generate a page twig under `views/pages/` folder

## Structure

```
|--dist/                   # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.babel.js/      # →  Gulpfile config and tasks
|--node_modules/           # →  Node.js packages (never edit)
|--src/                    # →  Source files
|  |--assets/              # →  Assets
|  |  |--fonts/            # →  Assets: Fonts
|  |  |--img/              # →  Assets: Images
|  |--modules/             # →  Modules: Multi-part components e.g. Navbar (HTML, CSS and JS)
|  |--js/                  # →  JS 
|  |  |--fragments/        # →  JS: Fragments 
|  |  |--utils/            # →  JS: Various utility functions
|  |  |--app.js            # →  JS: Main file
|  |--locales/             # →  Locales: Translation
|  |  |--fr.json           # →  Locales: Default site lang
|  |--scss/                # →  Styles
|  |  |--configs/          # →  Styles: Global site config ( vars, colors ... )
|  |  |--elements/         # →  Styles: Elements styles
|  |  |--fragments/        # →  Styles: Fragments styles
|  |  |--lames/            # →  Styles: Lames styles
|  |  |--layouts/          # →  Styles: Layouts styles
|  |  |--utils/            # →  Styles: Various utility styles
|  |  |--main.scss         # →  Styles: Main stylesheet file
|  |  |--config.json       # →  Styles: Config file
|  |--Views/               # →  Site views (Twig.js)
|  |  |--elements/         # →  Views: Elements
|  |  |--fragments/        # →  Views: Fragments
|  |  |--lames/            # →  Views: Lames
|  |  |--layouts/          # →  Views: Layouts
|  |  |--pages/            # →  Views: Pages
|  |  |--index.twig        # →  Views: Main site file
|--.babelrc                # →  Babel presets
|--.browserslistrc         # →  Browserslist config, browsers that we support
|--.eslintrc               # →  ESLint config
|--.gitignore              # →  Gitignore
|--.stylelintrc            # →  Stylelint config
|--package-lock.json       # →  NPM lock file (never edit)
|--package.json            # →  Node.js dependencies and scripts
|--webpack.config.js       # →  Webpack config
|--yarn.lock               # →  Yarn lock file (never edit)
```
##  Features
| Features | Description |
| :------------- | :------------- |
| Task Runner | [Gulp 4](http://gulpjs.com/)
| CSS | [SASS](http://sass-lang.com/), [CSS Guidelines](https://cssguidelin.es/), [BEM](http://getbem.com/)
| CSS Tools | [Autoprefixer](https://github.com/postcss/autoprefixer), [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps), [Stylelint](https://stylelint.io/)
| Bootstrap | [Bootstrap v4](https://getbootstrap.com/)
| JS | [Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/), [ESLint](http://eslint.org/)
| Live Reload | [BrowserSync](http://www.browsersync.io/)
| HTML Templates | [Twig.js](https://github.com/twigjs/twig.js)
