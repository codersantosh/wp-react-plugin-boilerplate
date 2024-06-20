/* TODO, not functional fully */
const glob = require('glob');
const path = require('path');
const { transformAsync } = require('@babel/core');
const fs = require('fs');

// let inputPath = path.join(process.cwd(), 'build/**/*.{js,php}');
let inputPath = path.join(process.cwd(), 'build/**/*.js');
let outputPath = path.join(process.cwd(), 'languages', 'translation-js.php');

// Replace backslashes with forward slashes for Windows compatibility
inputPath = inputPath.replace(/\\/g, '/');
outputPath = outputPath.replace(/\\/g, '/');

// Print the input and output paths
console.log('Input path:', inputPath);
console.log('Output path:', outputPath);

const files = glob.sync(inputPath);
const pattern = /\(['"]([^'"]+)['"],\s*['"]wp-react-plugin-boilerplate['"]\)/g;

let matches = [];
let match;

if (files) {
	files.map((file) => {
		// Check if the input files exist and are readable
		if (fs.existsSync(file)) {
			try {
				const data = fs.readFileSync(file, 'utf8');
				while ((match = pattern.exec(data)) !== null) {
					matches.push(match[0]);
				}
			} catch (err) {
				console.error(`Error reading file: ${err}`);
			}
		} else {
			console.log(` ${file} Input file does not exist`);
		}
	});
}
function uniqueArray(arr) {
	return [...new Set(arr)];
}

if (matches) {
	const uniqueStrings = uniqueArray(matches);
	const translations = uniqueStrings.map((item) => {
		return `__${item}`;
	});

	// Check if the output directory exists and is writable
	if (!fs.existsSync(path.dirname(outputPath))) {
		fs.mkdirSync(path.dirname(outputPath));
	}

	// Write resultString to outputPath
	fs.writeFileSync(outputPath, `<?php\n${translations.join(';\n')}\n`);
}
