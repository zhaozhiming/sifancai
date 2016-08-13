import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import FoodList from './components/FoodList';
import _ from 'lodash';


class SiFull extends Component {
  static propTypes = {
    foodlist: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.updateActiveState = this.updateActiveState.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.active !== this.state.active
      || !_.isEqual(nextProps.foodlist, this.props.foodlist);
  }

  updateActiveState(newActive) {
    this.setState({ active: newActive });
  }

  renderSlides() {
    const { foodlist } = this.props;
    return foodlist.map((foods, i) => (
      <Slide key={i}>
        <FoodList foods={foods} />
      </Slide>
    ));
  }

  render() {
    return (
      <Fullpage
        active={this.updateActiveState}
        className={style.main}
      >
        {this.renderSlides()}
      </Fullpage>
    );
  }
}

export default SiFull;
