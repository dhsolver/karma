import React from 'react';
import PropTypes from 'prop-types';

import QBSvg from '@assets/svg/qb.svg';
import AccountSVG from '@assets/svg/account.svg';
import CalculatorSvg from '@assets/svg/calculator.svg';
import MoneyLineSVG from '@assets/svg/money-line.svg';
import InjurySVG from '@assets/svg/injury.svg';
import LinkSVG from '@assets/svg/link.svg';
import NavArrowLeftSVG from '@assets/svg/nav-arrow-left.svg';
import NavArrowRightSVG from '@assets/svg/nav-arrow-right.svg';
import OverUnderSVG from '@assets/svg/over-under.svg';
import ReceiverSVG from '@assets/svg/receiver.svg';
import PropBetSVG from '@assets/svg/prop-bet.svg';
import RefereeSVG from '@assets/svg/referee.svg';
import RunningBackSVG from '@assets/svg/running-back.svg';
import TicketSVG from '@assets/svg/ticket.svg';
import SpreadSVG from '@assets/svg/spread.svg';
import TouchdownSVG from '@assets/svg/touchdown.svg';
import WeatherSVG from '@assets/svg/weather.svg';

import './SvgIcon.less';

import {Icon} from "antd";

// TODO: check Image component and allow customization
function SvgIcon(props) {
  const { name, ...restProps } = props;

  switch (name) {
    case 'qb':
      return (
        <QBSvg className="svg-icon" viewBox="0 0 100 100" {...restProps} />
      );
    case 'account':
      return (
        <AccountSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'calculator':
      return (
        <CalculatorSvg
          className="svg-icon"
          viewBox="0 0 50 50"
          {...restProps}
        />
      );
    case 'injury':
      return (
        <InjurySVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'link':
      return (
        <LinkSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'money-line':
      return (
        <MoneyLineSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'nav-arrow-left':
      return (
        <NavArrowLeftSVG
          className="svg-icon"
          viewBox="0 0 50 50"
          {...restProps}
        />
      );
    case 'nav-arrow-right':
      return (
        <NavArrowRightSVG
          className="svg-icon"
          viewBox="0 0 50 50"
          {...restProps}
        />
      );
    case 'over-under':
      return (
        <OverUnderSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'receiver':
      return (
        <ReceiverSVG
          className="svg-icon"
          viewBox="0 0 100 100"
          {...restProps}
        />
      );
    case 'prop-bet':
      return (
        <PropBetSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'referee':
      return (
        <RefereeSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'running-back':
      return (
        <RunningBackSVG
          className="svg-icon"
          viewBox="0 0 100 100"
          {...restProps}
        />
      );
    case 'ticket':
      return (
        <TicketSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'spread':
      return (
        <SpreadSVG className="svg-icon" viewBox="0 0 50 50" {...restProps} />
      );
    case 'touchdown':
      return (
        <TouchdownSVG
          className="svg-icon"
          viewBox="0 0 100 100"
          {...restProps}
        />
      );
    case 'weather':
      return (
        <WeatherSVG className="svg-icon" viewBox="0 0 100 100" {...restProps} />
      );
    default:
      return (
        <Icon type={name} />
      )
  }

  return null;
}

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default SvgIcon;
