import React          from 'react';
import { connect }    from 'react-redux';
import SocialButton   from './socialButton';

import styles         from './socialButton.scss';

export class SocialButton extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  static propTypes = {
    type: PropTypes.oneOf(['follow', 'like']).isRequired,
    target: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired
  }
  toggle(){

  }
  render () {
    return (
      <button onClick={this.toggle.bind(this)}>
        <i className=""></i>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export SocialButton;
