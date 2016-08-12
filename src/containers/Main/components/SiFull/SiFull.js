import style from './style.css';

import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
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
            <li className={style.item}>
              <img className={style.img} alt="food" src={small1} />
              <span className={style.title}>Heaven in a Box: Our Sampler</span>
              <span className={style.price}>¥60</span>
            </li>
            <li className={style.item}>
              <img className={style.img} alt="food" src={small2} />
              <span className={style.title}>Black And White Cookie</span>
              <span className={style.price}>¥15</span>
            </li>
            <li className={style.item}>
              <img className={style.img} alt="food" src={small3} />
              <span className={style.title}>For The Love Of Chocolate</span>
              <span className={style.price}>¥65</span>
            </li>
          </ul>
        </Slide>
        <Slide>
          <ul className={style.list}>
            <li className={style.item}>
              <img className={style.img} alt="food" src={big1} />
              <span className={style.title}>Heaven in a Box: Our Sampler</span>
              <span className={style.price}>¥10</span>
            </li>
            <li className={style.item}>
              <img className={style.img} alt="food" src={small4} />
              <span className={style.title}>Black And White Cookie</span>
              <span className={style.price}>$15</span>
            </li>
          </ul>
        </Slide>
      </Fullpage>
    );
  }
}

export default SiFull;
