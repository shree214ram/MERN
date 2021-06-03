import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChsHeader from './ChsHeader';

class Header extends Component {
    render() {
        return (
            <ChsHeader name={this.props.name} history={this.props.history} />
        );
    }
}

const mapStateToProps = (state) => {
    let { name } = state.users;
    return { name };
}

export default compose(withRouter, connect(mapStateToProps))(Header);
