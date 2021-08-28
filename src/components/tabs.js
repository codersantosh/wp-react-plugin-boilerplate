const {
	__
} = wp.i18n;

import {RenderGeneral} from "./render-tabs/general";
import {RenderAdvanced} from "./render-tabs/advanced";

export const GetTab = () =>{
	return [
		{
			name: 'general',
			title: __( 'General','wp-react-plugin-boilerplate' ),
			className: 'general',
		},
		{
			name: 'advanced',
			title: __( 'Advanced','wp-react-plugin-boilerplate' ),
			className: 'advanced',
		},
	]
}

export const RenderTab = (props) => {
	if ( 'general' === props.tab.name ) {
		return <RenderGeneral props={props}/>
	} else if ( 'advanced' === props.tab.name ) {
		return <RenderAdvanced props={props}/>
	}
	return '';
}
