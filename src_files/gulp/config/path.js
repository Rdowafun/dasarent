import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`; //Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js:`${buildFolder}/js/`,
        css:`${buildFolder}/css/`,
        html:`${buildFolder}/`,
        images:`${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js:`${srcFolder}/js/app.js`,
        svg:`${srcFolder}/img/**/*.svg`,
        images:`${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
        scss: `${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.pug`,  //.html можем поменять
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js:`${srcFolder}/js/**/*.js`,
        images:`${srcFolder}/img/**/*.{jpg, jpeg, png ,svg, gif, ico, webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html:`${srcFolder}/**/*.pug`, //.html
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}