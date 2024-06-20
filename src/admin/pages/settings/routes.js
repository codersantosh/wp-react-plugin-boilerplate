/* WordPress */
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';

/* Library */
import { isEmpty } from 'lodash';

/*Atrc*/
import {
    AtrcRoute,
    AtrcRoutes,
    AtrcNavigate,
    AtrcNav,
    AtrcWireFrameSidebarContent,
} from 'atrc';

/*Inbuilt*/
import { Settings1, Settings2, Advanced } from './pages';
import { AtrcReduxContextData } from '../../routes';
import { SaveSettings } from '../../components/atoms';

/*Local*/
const SettingsRouters = () => {
    return (
        <>
            <AtrcRoutes>
                <AtrcRoute
                    exact
                    path='setting1/*'
                    element={<Settings1 />}
                />
                <AtrcRoute
                    exact
                    path='setting2/*'
                    element={<Settings2 />}
                />
                <AtrcRoute
                    exact
                    path='advanced/*'
                    element={<Advanced />}
                />
                <AtrcRoute
                    path='/'
                    element={
                        <AtrcNavigate
                            to='setting1'
                            replace
                        />
                    }
                />
            </AtrcRoutes>
            <SaveSettings />
        </>
    );
};

const InitSettings = () => {
    const data = useContext(AtrcReduxContextData);
    const { dbSettings } = data;

    if (isEmpty(dbSettings)) {
        return null;
    }
    return (
        <AtrcWireFrameSidebarContent
            wrapProps={{
                tag: 'div',
                className: 'at-ctnr-fld',
            }}
            rowProps={{}}
            renderSidebar={
                <AtrcNav
                    variant='vertical'
                    navs={[
                        {
                            to: 'setting1',
                            children: __('Settings 1', 'wp-react-plugin-boilerplate'),
                        },
                        {
                            to: 'setting2',
                            children: __('Settings 2', 'wp-react-plugin-boilerplate'),
                        },
                        {
                            to: 'advanced',
                            children: __('Advanced', 'wp-react-plugin-boilerplate'),
                        },
                    ]}
                />
            }
            renderContent={<SettingsRouters />}
            contentProps={{
                tag: 'div',
                contentCol: 'at-col-10',
            }}
            sidebarProps={{
                sidebarCol: 'at-col-2',
            }}
        />
    );
};

export default InitSettings;
