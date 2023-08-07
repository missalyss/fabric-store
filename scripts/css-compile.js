import fsp from 'fs/promises';
import path from "path";

// Manually add in list here. Result is async so order is irrelevant
const stylesList = [
  '../styles/color.css',
  '../styles/padding-margin.css',
  '../styles/flex.css',
  '../styles/font.css',
  '../styles/misc.css',
  '../styles/index.css',

]

const appendCss = (fileName) => {
    const filePath = new URL(fileName, import.meta.url);
    const destination = path.normalize('./dist.css');

    fsp.writeFile(destination, '/* This is a generated file. Do not modify directly. */ \n \n')
    .then(() => {
      fsp.readFile(filePath, 'utf8').then((res) => {
        console.log('res: ', res);
        fsp.appendFile(destination, res)
        .then(() => {
            console.log('###### appending ', fileName, '->', destination, '#####');
          })
        .catch((err) => {console.error('Shields up, red alert! Writing file', err)})
      })
      .catch((err) => {console.error('Shields up, red alert! Reading file', err)})
    })
    .catch((err) => {console.error('Shields up, red alert! Emptying file', err)})

};

const compileCss = () => {
  stylesList.forEach(styleFile => appendCss(styleFile))
}


export {compileCss};
