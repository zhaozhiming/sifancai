import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import FoodItem from './components/FoodItem';


class FoodList extends Component {
  static propTypes = {
    foods: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  renderFoods() {
    return this.props.foods.map((f, i) => (
      <FoodItem key={i} img={f.img} name={f.name} price={f.price} big={f.big} />
    ));
  }

  render() {
    return (
      <ul className={classnames(style.list, style['list-responsive'])}>
        {this.renderFoods()}
      </ul>
    );
  }
}

export default FoodList;
