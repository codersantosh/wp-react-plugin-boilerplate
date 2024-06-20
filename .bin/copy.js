const ncp = require('ncp');
const rimraf = require('rimraf');
const path = require('path');

const source = process.cwd();
const destination = 'deploy';

const excludedFiles = [
	destination,
	'src',
	'node_modules',
	'.git',
	'.bin',
	'.babelrc',
	'.gitignore',
	'package.json',
	'package-lock.json',
	'.map',
	'js.pot',
	'translation-js.php',
	'info.md',
];
console.log('Excludes files and folder:');
const filterFunction = (file) => {
	const relativePath = path.relative(source, file);
	const fileName = path.basename(file);
	const fileExtension = path.extname(file);
	const isExcluded =
		excludedFiles.includes(fileName) || excludedFiles.includes(fileExtension);
	if (isExcluded) {
		console.log(`Excluded: ${fileName}`);
	}
	return !isExcluded;
};

// Delete the destination directory
rimraf(destination, (error) => {
	if (error) {
		console.error('Error occurred:', error);
	} else {
		// Copy the files and directories
		ncp(source, destination, { filter: filterFunction }, (error) => {
			if (error) {
				console.error('Error occurred:', error);
			} else {
				console.log('Files copied.');
				console.log(
					"The plugin is built in the `deploy` folder for production. You can upload it to your WordPress site or to WordPress.org. Don't forget to check the files and folders, and test it thoroughly."
				);
			}
		});
	}
});
