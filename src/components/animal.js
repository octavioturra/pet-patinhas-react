import React          from 'react';
import { connect }    from 'react-redux';
import { Link }       from 'react-router';
import SocialButton   from './socialButton';

import styles         from './animal.scss';

export class Animal extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  static propTypes = {
    animal: PropTypes.object.isRequired,
    follow: PropTypes.object.isRequired,
    like: PropTypes.object.isRequired
  }
  render () {
    return (
      <article class={styles['card']}>
        <img src={this.props.animal.profilePictureUrl}/>
        <section className={styles['card-nav']}>
            <Link className={styles['card-title']} to={'/animal/' + this.props.animal.id}>
              {this.props.animal.name}
            </Link>
            <SocialButton action="follow" target={this.follow}>
              {this.follow.count}
            </SocialButton>
            <SocialButton action="like" target={this.like}>
              {this.like.count}
            </SocialButton>
        </section>
      </article>
    );
  }
}

export Animal;
