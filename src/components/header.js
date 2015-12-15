import React          from 'react';
import { connect }    from 'react-redux';
import headerActions from 'actions/header';
import { Link }       from 'react-router';

const mapStateToProps = (state) => ({
  header : state.header
});
export class Header extends React.Component {
  static propTypes = {}

  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Menu</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">PetPatinhas</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>Sobre</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, headerActions)(Header);
