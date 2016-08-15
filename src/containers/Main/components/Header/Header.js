import style from './style.css';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import header from 'images/header.jpg';
import title from 'images/title.png';

class Header extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.header)}
      >
        <div className={style.top}>
          <img className={style.title} alt="title" src={title} />
          <span className={style.subtitle}>属于戛纳滨江的私房菜馆</span>
          <img className={style.img} alt="img" src={header} />
        </div>
        <span className={style.middle}>
          本店菜品
        </span>
        <div className={style.bottom}></div>
      </div>
    );
  }
}

export default Header;
