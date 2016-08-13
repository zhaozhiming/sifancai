import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainActions from './actions';
import SiFull from './components/SiFull';
import foodData from 'fixture/food';
import { bingo } from 'utils/arrayUtils';
import _ from 'lodash';


function mapStateToProps(state) {
  const { main } = state;
  return { main };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(MainActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {
  static propTypes = {
    main: PropTypes.object.isRequired,
    mainActions: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    main: PropTypes.object,
    mainActions: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      foodlist: bingo(_.cloneDeep(foodData)),
    };
  }

  getChildContext() {
    const { main, mainActions } = this.props;
    return { main, mainActions };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ foodlist: bingo(_.cloneDeep(foodData)) });
  }

  render() {
    return (
      <div className={style.content}>
        <SiFull foodlist={this.state.foodlist} />
      </div>
    );
  }
}

export default Main;
