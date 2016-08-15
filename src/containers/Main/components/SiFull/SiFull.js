import style from './style.css';

import React, { Component, PropTypes } from 'react';
import FoodList from './components/FoodList';
import _ from 'lodash';


class SiFull extends Component {
  static propTypes = {
    foodlist: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.foodlist, this.props.foodlist);
  }

  renderSlides() {
    const { foodlist } = this.props;
    return foodlist.map((foods, i) => (
      <section key={i}>
        <FoodList foods={foods} />
      </section>
    ));
  }

  render() {
    return (
      <div className={style.main} >
        {this.renderSlides()}
      </div>
    );
  }
}

export default SiFull;
