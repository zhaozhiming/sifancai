import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';


class FoodItem extends Component {
  static propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    big: PropTypes.bool,
  };

  render() {
    const { img, name, price, big } = this.props;
    return (
      <li className={classnames(style.item, { [`${style.big}`]: big })}>
        <img className={style.img} alt={name} src={img} />
        <span className={style.title}>{name}</span>
        <span className={style.price}>¥{price}</span>
      </li>
    );
  }
}

export default FoodItem;
