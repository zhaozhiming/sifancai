import style from './style.css';

import classnames from 'classnames';
import React, { Component } from 'react';
import qrcode from 'images/qrcode.jpg';
import { Icon } from 'antd';


class Footer extends Component {
  render() {
    return (
      <div className={classnames(style.footer)}>
        <span className={classnames(style.top)}>联系我们</span>
        <div className={classnames(style.contact)}>
          <img className={style.qrcode} alt="qrcode" src={qrcode} />
          <Icon className={style.location} type="environment" />
        </div>
      </div>
    );
  }
}

export default Footer;
