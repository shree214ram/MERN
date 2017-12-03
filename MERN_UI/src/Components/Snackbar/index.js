/* eslint-disable */
import React, { Component } from 'react';

export default class Snackbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorBar: this.props.show,
      timer: this.props.timer || 4000
    };
  }

  componentWillReceiveProps(nextProps) {
    const { showErrorBar, timer } = this.state;
    if (showErrorBar !== nextProps.show) {
      this.setState({
        showErrorBar: nextProps.show,
        timer: nextProps.timer
      });

      setTimeout(() => {
        this.setState({ showErrorBar: false });
        this.props.toggleState();
      }, timer);
    }
  }
  render() {
    const { show } = this.props;
    const { showErrorBar } = this.state;
    const ErrorbarStyle = {
      position: 'fixed',
      left: '20px',
      bottom: '20px',
      background: '#404040',
      color: '#fff',
      padding: '14px',
      WebkitTransition: 'translate 0.3s cubic-bezier(0, 0, 0.30, 1)',
      transition: 'translate 0.3s cubic-bezier(0, 0, 0.30, 1)',
      fontWeight: '500',
      textTransform: 'initial',
      willChange: 'transform',
      whiteSpace: 'nowrap',
      transform: 'translateY(20px)',
      WebkitTransform: 'translateY(20px)',
      boxShadow: '0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24)',
      fontSize: '14px',
      opacity: 0,
      borderRadius: '3px',
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      WebkitBoxAlign: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      WebkitBoxPack: 'justify',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      lineHeight: '20px',
      zIndex: 2147483647
    };

    if (showErrorBar) {
      ErrorbarStyle.opacity = 1;
      ErrorbarStyle.transform = 'translateY(0)';
    } else{
      ErrorbarStyle.display = 'none';
    }

    return(
      <div style={ErrorbarStyle}>
        {this.props.children}
      </div>
    );
  }
};

Snackbar.defaultProps = {
  show: 'false'
};

Snackbar.propTypes = {
  show: React.PropTypes.bool.isRequired,
  timer: React.PropTypes.number,
  toggleState: React.PropTypes.func.isRequired
};
