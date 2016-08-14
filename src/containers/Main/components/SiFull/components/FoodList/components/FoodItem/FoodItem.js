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
    const liStyle = classnames(
      style.item,
      style['item-responsive'],
      { [`${style.big}`]: big });
    return (
      <li className={liStyle}>
        <img className={style.img} alt={name} src={img} />
        <div className={style.description}>
          <span className={classnames(style.title, style.animation)}>{name}</span>
          <span className={classnames(style.price, style.animation)}>¥{price}</span>
        </div>
      </li>
    );
  }
}

export default FoodItem;
