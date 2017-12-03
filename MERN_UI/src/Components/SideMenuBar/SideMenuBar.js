import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import DashboardSvg from '../Shared/SvgComponents/DashboardSvg';
// import AddEntrySvg from '../Shared/SvgComponents/AddEntrySvg';
// import ManageEntrySvg from '../Shared/SvgComponents/ManageEntrySvg';
import ReportingSvg from '../Shared/SvgComponents/ReportingSvg';
// export DashboardSvg from '../Shared/SvgComponents/DashboardSvg';
// export AddEntrySvg from '../Shared/SvgComponents/AddEntrySvg';
// export ManageEntrySvg from '../Shared/SvgComponents/ManageEntrySvg';
// export ReportingSvg from '../Shared/SvgComponents/ReportingSvg';
// import * as SvgComponents from '../Shared/SvgComponents';
import './SideMenuBar.scss';
import { exportExcelReport, exportPivotReport } from '../../actions/ReportsActions';

// const pages = [
//   DashboardSvg,
//   AddEntrySvg,
//   ManageEntrySvg,
//   ReportingSvg
// ];
class SideMenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIconToggle: true,
      sidebarToggle: true
    };
    this.toggleElement = this.toggleElement.bind(this);
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }
  toggleElement() {
    const elements = document.getElementsByClassName('expandCollaps');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.toggle('active');
    }
  }
  toggleShowHide() {
    this.setState({ sidebarIconToggle: !this.state.sidebarIconToggle, sidebarToggle: !this.state.sidebarToggle });
  }
  exportData() {
    this.props.dispatch(exportExcelReport());
    return false;
  }
  exportPivotData() {
    this.props.dispatch(exportPivotReport());
    return false;
  }
  render() {
    const pathArr = this.props.location.pathname.split('/').filter(Boolean);
    const currentloc = this.props.location;
    console.log(currentloc, 'currentloc');
    // localStorage.setItem('isAuthenticated', false);
    let LoG = false;
    let LG = false;
    const listItems = [];
    const listItemss = [];
    if (localStorage.getItem('isAuthenticated')) {
      LG = localStorage.getItem('userInfo');
      LoG = (LG) ? JSON.parse(LG) : false;
    }
    if (LoG) {
      if ('userMenu' in LoG) {
        const LogUserMenu = LoG.userMenu;
        for (let i = 0; i < LogUserMenu.length; i += 1) {
          const link = LogUserMenu[i];
          if (link.subMenu.length === 0) {
            listItems.push(<li className="sidebar-menu-block">
              <Link className={`sidebar-item-main ${(pathArr[0] === link.slug ? 'active' : '')}`} to={link.slug}>
                <div className="sidebar-item-icon"> <DashboardSvg /> </div>
                <div className="sidebar-item-text"> {link.name} </div>
              </Link> </li>);
          }
          if (link.subMenu.length !== 0) {
            const LogUserSubMenu = link.subMenu;
            for (let k = 0; k < LogUserSubMenu.length; k += 1) {
              const linkk = LogUserSubMenu[k];
              if (linkk.length !== 0) {
                if (linkk.slug.length !== 0) {
                  listItemss.push(<li> <Link className={`sidebar-item-sub  ${(currentloc.pathname.replace('/', '') === linkk.slug ? 'active' : '')}`} to={linkk.slug}>{linkk.name}</Link> </li>);
                } else {
                  if (linkk.id === 6) {
                    listItemss.push(<li> <a role="button" onClick={() => this.exportData()} className={`sidebar-item-sub exportData  ${(currentloc.pathname.replace('/', '') === linkk.slug ? 'active' : '')}`} >{linkk.name}</a> </li>);
                  }
                  if (linkk.id === 7) {
                    listItemss.push(<li> <a role="button" onClick={() => this.exportPivotData()} className={`sidebar-item-sub exportData  ${(currentloc.pathname.replace('/', '') === linkk.slug ? 'active' : '')}`} >{linkk.name}</a> </li>);
                  }
                  if (linkk.id !== 7 && linkk.id !== 6) {
                    listItemss.push(<li> <a role="button" className={`sidebar-item-sub  ${(currentloc.pathname.replace('/', '') === linkk.slug ? 'active' : '')}`} >{linkk.name}</a> </li>);
                  }
                }
              }
            }
            listItems.push(<li className="sidebar-menu-block">
              <a className={`sidebar-item-main ${(pathArr[0] === link.slug ? 'active' : '')}`}>
                <div className="sidebar-item-icon"><ReportingSvg /></div>
                <div className="sidebar-item-text"> {link.name} </div>
              </a>
              <div className="sidebar-item-expand expandCollaps" onClick={this.toggleElement}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
              </svg> </div>
              <ul className="sidebar-menu-sub expandCollaps " id="subMenu">
                {listItemss}
              </ul>
            </li>
            );
          }
        }
      }
    }
    return (
      <div
        className={`sidebar ${this.state.sidebarToggle ? '' : 'hiddenMenu'} ${listItems.length !== 0 ? '' : 'hide'}`}
        id="sidebarShowHide"
      >
        <nav className="sidebar-menu">
          <ul>
            {listItems}
            <div
              className={`sidebar-toggler js-sidebar-toggle hideShow ${this.state.sidebarIconToggle ? 'active' : ''}`}
              id="sidebarExpandButton"
              onClick={this.toggleShowHide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.86 21.24">
                <polyline points="7.86 1 1 10.62 7.86 20.24" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
              </svg>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideMenuBar;
