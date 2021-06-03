import React, { useState, useEffect } from 'react';
import '@clr/icons';
import { Header, HeaderActions, HeaderBranding } from '@vmware-react/clarity';
import Popup from './Popup';
import QuickLinks from './QuickLinks';

import vmwareLogo from '../assets/images/vmwareLogo.png';

const ChsHeader = (props) => {

    //set default fields
    const defaultLinkClicked = ''
    const [linkClicked, setLinkClicked] = useState(defaultLinkClicked);

    const removeLinkClicked = () => {
        const updatedLinkClicked = null
        // Set values to the linkClicked
        setLinkClicked(updatedLinkClicked)
    }

    const openLink = (e) => {
        e.stopPropagation();
        const updatedLinkClicked = e.target.name
        // Set values to the linkClicked
        setLinkClicked(updatedLinkClicked)
    }

    const quickLinks = {
        "Reports": [
            {
                "displayName": "Customer 360 Report",
                "url": "https://tableau.vmware.com/#/site/SelfService/views/Customer360/Customer360"
            },
            {
                "displayName": "Customer Scorecard",
                "url": "https://tableau.vmware.com/#/site/SelfService/views/CHS_Customer_Facing_Scorecard/Dashboard"
            },
        ],
        "Help": [
            {
                "displayName": "Documentation",
                "url": "https://confluence.eng.vmware.com/display/SYH/User+Guide"
            },
            {
                "displayName": "What's New",
                "url": "https://confluence.eng.vmware.com/display/SYH/What%27s+New"
            },
            {
                "displayName": "VMware Social",
                "url": "https://social.vmware.com/spaces/36608"
            }
        ]
    }
    useEffect(() => {
        return (() => {
            // similar to componentDidMount
            window.addEventListener("click", removeLinkClicked);
        });
    }, [props.name]);
    useEffect(() => {
        return (() => {
            // similar to componentWillUnmount
            window.removeEventListener("click", removeLinkClicked);
        });
    }, []);
    return (
        <Header type={7}>
            <HeaderBranding>
                <div cds-layout='horizontal p-r:lg'>
                    <img cds-layout='align:vertical-center m-t:xs' alt="" src={vmwareLogo} height='18px' />
                </div>
                <div className='title headerTitle' cds-text='title bold' style={{ padding: '1% 0 0 0' }} onClick={(e) => { props.history.push('/home') }}>SYNERGY.Health</div>
                <ul id="headerTabs" className="nav" role="tablist" style={{ boxShadow: 'none', height: '64%', margin: '3% 7%', borderLeft: '1px solid dimgray' }}>
                    <li role="presentation" className="nav-item header-links" style={{ margin: '0 10% 0 14%' }}>
                        <button
                            id="tab1"
                            name="home"
                            style={{ color: 'white' }}
                            className="btn btn-link nav-link active"
                            aria-controls="panel1"
                            // aria-selected="true" 
                            onClick={(e) => { props.history.push('/home') }}
                            type="button">
                            Home
                                </button>
                    </li>
                    <li role="presentation" className="nav-item quickLinksButton">
                        <button id="tab2"
                            name="quickLinks"
                            style={{ color: 'white' }}
                            className="btn btn-link nav-link"
                            aria-controls="panel2"
                            // aria-selected="false"
                            onClick={(e) => openLink(e)}
                            type="button">
                            Quick Links
                                </button>
                        {linkClicked === "quickLinks"
                            ? <Popup
                                show={linkClicked === "quickLinks"}>
                                <QuickLinks
                                    data={quickLinks}>
                                </QuickLinks>
                            </Popup>
                            : null}
                    </li>
                </ul>
            </HeaderBranding>
            <HeaderActions>
                <div cds-layout='horizontal align:right'>
                    <div cds-layout='horizontal align:vertical-center'>
                        <span className='nav-text' cds-layout='p-l:md m-r:lg'>{props.name}</span>
                    </div>
                </div>
            </HeaderActions>
        </Header>
    );
}

export default ChsHeader;
