import style from './style.css';

import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import FoodItem from '../FoodItem';
import small1 from 'images/food/small1.jpg';
import small2 from 'images/food/small2.jpg';
import small3 from 'images/food/small3.jpg';
import small4 from 'images/food/small4.jpg';
import big1 from 'images/food/big1.jpg';


class SiFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  shouldComponentUpdate(nP, nS) {
    return nS.active !== this.state.active;
  }

  updateActiveState(newActive) {
    this.setState({ active: newActive });
  }

  render() {
    return (
      <Fullpage
        active={this.updateActiveState}
        className={style.main}
      >
        <Slide>
          <div>Fullpage React 1</div>
        </Slide>
        <Slide>
          <ul className={style.list}>
            <FoodItem img={small1} name="Heaven in a Box: Our Sampler" price={60} />
            <FoodItem img={small2} name="Black And White Cookie" price={15} />
            <FoodItem img={small3} name="For The Love Of Chocolate" price={65} />
          </ul>
        </Slide>
        <Slide>
          <ul className={style.list}>
            <FoodItem img={big1} name="Heaven in a Box: Our Sampler" price={10} big />
            <FoodItem img={small4} name="Black And White Cookie" price={15} />
          </ul>
        </Slide>
      </Fullpage>
    );
  }
}

export default SiFull;
