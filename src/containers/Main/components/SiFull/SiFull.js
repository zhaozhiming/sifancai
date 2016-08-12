import style from './style.css';

import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import FoodList from './components/FoodList';
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
    const b1 = {
      img: big1,
      name: 'Salted Caramel Cashew Tart',
      price: 10,
      big: true,
    };
    const s1 = {
      img: small1,
      name: 'Heaven in a Box: Our Sampler',
      price: 60,
      big: false,
    };
    const s2 = {
      img: small2,
      name: 'Black And White Cookie',
      price: 15,
      big: false,
    };
    const s3 = {
      img: small3,
      name: 'Black And White Cookie',
      price: 65,
      big: false,
    };
    const s4 = {
      img: small4,
      name: 'Chocolate Sable Cookies',
      price: 15,
      big: false,
    };
    const foods1 = [b1, s1, s2, s3];
    const foods2 = [s1, s2, s3];
    const foods3 = [b1, s4];
    return (
      <Fullpage
        active={this.updateActiveState}
        className={style.main}
      >
        <Slide>
          <FoodList foods={foods1} />
        </Slide>
        <Slide>
          <FoodList foods={foods2} />
        </Slide>
        <Slide>
          <FoodList foods={foods3} />
        </Slide>
      </Fullpage>
    );
  }
}

export default SiFull;
