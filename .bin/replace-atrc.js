const replace = require('replace-in-file');
const glob = require('glob');
const path = require('path');

let filePath = path.join(process.cwd(), 'build/**/*.{js,php}');

/*Ignore pattern not needed for deploy but needed for main folder*/

/*For windows PC
 * https://stackoverflow.com/questions/55512907/node-glob-sync-returns-empty-array
 * */
filePath = filePath.replace(/\\/g, '/');

const files = glob.sync(filePath);

const options = {
    files: files,
    from: [
        /atrc-prefix-atrc/g,
    ],
    to: [
        'your-renamed-plugin',/******************** replace with your plugin text domain */
    ],
    verbose: true /*for detailed information*/,
    dry: false /*true for simulation only, does not really replace*/,
};

async function main() {
    try {
        const results = await replace(options);
        console.log('Replacement results:', results);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
main();