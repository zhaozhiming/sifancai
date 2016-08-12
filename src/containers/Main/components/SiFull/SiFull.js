import style from './style.css';

import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import food from 'images/food.png';


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
              <img className={style.img} alt="food" src={food} />
              <span className={style.title}>example 1</span>
              <span className={style.price}>¥10</span>
            </li>
            <li className={style.item}>
              <img className={style.img} alt="food" src={food} />
              <span className={style.title}>Black And White Cookie</span>
              <span className={style.price}>$15</span>
            </li>
            <li className={style.item}>
              <img className={style.img} alt="food" src={food} />
              <span className={style.title}>example 2</span>
              <span className={style.price}>¥10</span>
            </li>
          </ul>
        </Slide>
        <Slide>
          <div>Fullpage React 3</div>
        </Slide>
      </Fullpage>
    );
  }
}

export default SiFull;
