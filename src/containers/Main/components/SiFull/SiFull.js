import style from './style.css';

import React, { Component } from 'react';
import { Fullpage, Slide, SideNav } from 'fullpage-react';


class SiFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      hover: null,
    };

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  shouldComponentUpdate(nP, nS) {
    // ensure hoverStyles and activeStyles update
    return nS.active !== this.state.active || nS.hover !== this.state.hover;
  }

  onMouseOver(idx) {
    this.setState({ hover: idx });
  }

  onMouseOut() {
    this.setState({ hover: null });
  }

  updateActiveState(newActive) {
    this.setState({ active: newActive });
  }

  compareStyles(component, idx) {
    if (idx === this.state.active) return component.activeStyles;
    if (idx === this.state.hover) return component.hoverStyles;

    return component.nonActiveStyles;
  }

  geneNav() {
    const navCount = 3;
    const navArr = [];
    for (let i = 0; i < navCount; i++) {
      navArr.push(i);
    }
    return navArr;
  }

  renderNav() {
    const navArr = this.geneNav();

    const sideNavOptions = {
      right: '2%',
      top: '50%',

      activeStyles: { color: 'red' },
      hoverStyles: { color: 'blue' },
      nonActiveStyles: { color: 'gray' },
    };

    return navArr.map((n, idx) => (
      <div
        key={idx}
        ref={idx}
        style={this.compareStyles(sideNavOptions, idx)}
        onMouseOver={() => this.onMouseOver(idx)} onMouseOut={() => this.onMouseOut(idx)}
      >
        &#x25CF;
      </div>
    ));
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
          <div>Fullpage React 2</div>
        </Slide>
        <Slide>
          <div>Fullpage React 3</div>
        </Slide>

        <SideNav>
          {this.renderNav()}
        </SideNav>

      </Fullpage>
    );
  }
}

export default SiFull;
