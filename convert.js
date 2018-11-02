const fs = require('fs')
const path = require('path')
const showdown  = require('showdown')

const converter = new showdown.Converter()
console.log("converter:", converter);

function convert(basepath) {
  console.log("starting convert with:", basepath);
  if (fs.lstatSync(basepath).isDirectory()) {
    const filenames = fs.readdirSync(basepath)
    filenames.forEach(filename => {
        const filepath = path.join(basepath, filename)
        convert(filepath)
    })
  } else {
    console.log("basepath:", basepath);
    const basename = path.basename(basepath);
    console.log("basename:", basename);
    const filetext = fs.readFileSync(basepath, 'utf-8');
    console.log("filetext:", filetext.length);
    const html = converter.makeHtml(filetext);
    console.log("html.length:", html.length);
    const outfilepath = path.join(basepath.replace("/markdown/", "/html/").replace(".md",'.html'));
    console.log("writing file to ", outfilepath);
    fs.writeFileSync(outfilepath, html)
  }

}

convert('./pages/markdown')