/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/*Code goes here
* Output : build/index.js
* */

const {
	__
} = wp.i18n;

const {
	render
} = wp.element;

const AddSettings = () => {

	return (
		<div className={'init-react'}>Hello Nepal! Hello World!!!</div>
	)
}
document.addEventListener('DOMContentLoaded', () => {
	if ('undefined' !== typeof document.getElementById(wpReactPluginBoilerplateBuild.root_id) && null !== document.getElementById(wpReactPluginBoilerplateBuild.root_id)) {
		render(<AddSettings />, document.getElementById(wpReactPluginBoilerplateBuild.root_id));
	}
});