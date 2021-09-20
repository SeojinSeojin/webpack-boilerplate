# Webpack Boilerplate

<p>A Boilerplate for Simple SPA with Babel and SCSS</p>

<div align="center">
<a href="https://webpack.js.org/">
<img src="https://i1.wp.com/www.blockprojekt.de/wp-content/uploads/webpack-logo.gif?resize=600%2C419" width="300">
</a>
</div>

## Plugins and Modules
element|plugins and modules
--|--
HTML| `html-webpack-plugin`, `handlebars-loader`
CSS| `style-loader`, `css-loader`, `sass-loader`, `raw-loader`
JS| `babel-loader`
Assets | `file-loader`

## Boiler Structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── 📁 public // 번들링된 파일이 담긴 디렉터리
│   ├── 3b7bf087cbac835e6f7d4b7dc9711e72.png
│   ├── index.html
│   ├── index_bundle.js
│   └── index_bundle.js.map
├── 📁 source // 개발 중인 파일이 담긴 디렉터리
│   ├── app.js
│   ├── 📁 components // 컴포넌트
│   │   ├── 📁 base
│   │   │   └── Component.js
│   │   └── 📁 example
│   │       └── index.js
│   ├── 📁 images // 이미지 파일들 (png, jpg, jpeg, svg 모두 가능)
│   │   └── webpack-logo.png
│   ├── index.html // 형식상 띄워질 html 파일
│   ├── 📁 scripts // 컴포넌트 외의 js 파일들을 담는 디렉터리
│   │   └── hello.js
│   ├── 📁 stylesheets // 스타일 파일들 (scss, sass, css 가능)
│   │   ├── app.scss
│   │   └── initialize.scss
│   └── 📁 templates // 템플릿 파일들
│       └── index.hbs
├── webpack.config.js
├── .eslintrc.json
├── .gitignore
└── .prettierrc.json
```

## Quick Start

### get codes
```shell
$ git clone https://github.com/SeojinSeojin/webpack-boilerplate
```

### install node packages
```shell
$ npm i
$ npm i --save-dev babel-loader css-loader html-webpack-plugin sass sass-loader style-loader webpack webpack-cli webpack-dev-server
```

### run development server
```shell
$ npx webpack serve
```
or
```shell
$ npm start
```

### build
```
$ npm run build
```

### Reference
* [Base Component 구조 참고 - 최고의 개발자 황준일님](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%87%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BC)
* [웹팩 핸드북 - 캡틴 판교님](https://joshua1988.github.io/webpack-guide/)