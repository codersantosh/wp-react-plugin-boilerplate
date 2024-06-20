/* WordPress */
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';

/* Library */
import classNames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atrc*/
import {
    AtrcText,
    AtrcControlToggle,
    AtrcWireFrameContentSidebar,
    AtrcWireFrameHeaderContentFooter,
    AtrcControlSelect,
    AtrcPrefix,
    AtrcPanelBody,
    AtrcPanelRow,
    AtrcContent,
    AtrcTitleTemplate1
} from 'atrc';

/* Inbuilt */
import { AtrcReduxContextData } from '../../../routes';
import { DocsTitle } from '../../../components/molecules';

/*Local*/
const MainContent = () => {
    const data = useContext(AtrcReduxContextData);

    const { dbSettings, dbUpdateSetting } = data;

    const { setting3 = false, setting4 = false, setting5 = 'option-1' } = dbSettings;

    return (
        <AtrcContent>
            <AtrcPanelRow>
                <AtrcControlToggle
                    label={__(
                        'Check to enable',
                        'wp-react-plugin-boilerplate'
                    )}
                    checked={setting3}
                    onChange={() => dbUpdateSetting('setting3', !setting3)}
                />

            </AtrcPanelRow>
            <AtrcPanelRow>
                <AtrcControlToggle
                    label={__(
                        'Check to enable',
                        'wp-react-plugin-boilerplate'
                    )}
                    checked={setting4}
                    onChange={() => dbUpdateSetting('setting4', !setting4)}
                />

            </AtrcPanelRow>
            <AtrcPanelRow>
                <AtrcControlSelect
                    label={__('Setting 5 Select', 'wp-react-plugin-boilerplate')}
                    value={setting5}
                    options={[
                        {
                            label: __('Option 1', 'wp-react-plugin-boilerplate'),
                            value: 'option-1'
                        },
                        {
                            label: __('Option 2', 'wp-react-plugin-boilerplate'),
                            value: 'option-2'
                        },
                    ]}
                    onChange={newVal =>
                        dbUpdateSetting('setting5', newVal)
                    }
                />

            </AtrcPanelRow>
        </AtrcContent>
    );
};

const Documentation = () => {
    const data = useContext(AtrcReduxContextData);

    const { lsSettings, lsSaveSettings } = data;

    return (
        <AtrcWireFrameHeaderContentFooter
            headerRowProps={{
                className: classNames(AtrcPrefix('header-docs'), 'at-m'),
            }}
            renderHeader={
                <DocsTitle
                    onClick={() => {
                        const localStorageClone = cloneDeep(lsSettings);
                        localStorageClone.bmSaDocs1 = !localStorageClone.bmSaDocs1;
                        lsSaveSettings(localStorageClone);
                    }}
                />
            }
            renderContent={
                <>
                    <AtrcPanelBody
                        className={classNames(AtrcPrefix('m-0'))}
                        title={__(
                            'FAQ Query 3?',
                            'wp-react-plugin-boilerplate'
                        )}
                        initialOpen={true}>
                        <AtrcText
                            tag='p'
                            className={classNames(AtrcPrefix('m-0'), 'at-m')}>
                            {__(
                                'FAQ Answer 3',
                                'wp-react-plugin-boilerplate'
                            )}
                        </AtrcText>
                    </AtrcPanelBody>
                    <AtrcPanelBody
                        title={__('FAQ Query 4?', 'wp-react-plugin-boilerplate')}
                        initialOpen={false}>
                        <AtrcText
                            tag='p'
                            className={classNames(AtrcPrefix('m-0'), 'at-m')}>
                            {__(
                                'FAQ Answer 4',
                                'wp-react-plugin-boilerplate'
                            )}
                        </AtrcText>
                    </AtrcPanelBody>
                </>
            }
            allowHeaderRow={false}
            allowHeaderCol={false}
            allowContentRow={false}
            allowContentCol={false}
        />
    );
};

const Settings = () => {
    const data = useContext(AtrcReduxContextData);
    const { lsSettings } = data;

    const { bmSaDocs1 } = lsSettings;

    return (
        <AtrcWireFrameHeaderContentFooter
            wrapProps={{
                className: classNames(AtrcPrefix('bg-white'), 'at-bg-cl'),
            }}
            renderHeader={
                <AtrcTitleTemplate1 title={__('Settings', 'wp-react-plugin-boilerplate')} />
            }
            renderContent={
                <AtrcWireFrameContentSidebar
                    wrapProps={{
                        allowContainer: true,
                        type: 'fluid',
                        tag: 'section',
                        className: 'at-p',
                    }}
                    renderContent={<MainContent />}
                    renderSidebar={!bmSaDocs1 ? <Documentation /> : null}
                    contentProps={{
                        contentCol: bmSaDocs1 ? 'at-col-12' : 'at-col-7',
                    }}
                    sidebarProps={{
                        sidebarCol: 'at-col-5',
                    }}
                />
            }
            allowHeaderRow={false}
            allowHeaderCol={false}
            allowContentRow={false}
            allowContentCol={false}
        />
    );
};

export default Settings;
