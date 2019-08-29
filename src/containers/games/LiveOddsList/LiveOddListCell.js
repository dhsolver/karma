import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Typography } from 'antd';

const { Text } = Typography;

const CELL_TYPES = {
  GAME: 'gameInfo',
  OVERUNDER: 'ou',
  SPREAD: 'spread'
};

function LiveOddListCell(props) {
  const { className, data, type, refData } = props;

  const mainClassName = 'live-odds-list__two-row-cell';

  const renderGameInfo = () => {
    const { homeTeam, awayTeam } = data;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>{homeTeam.name}</Text>
        </div>
        <div className="flex-row">
          <Text>{awayTeam.name}</Text>
        </div>
      </div>
    );
  };

  const renderOU = () => {
    const overUnder = data;
    const { moneyLine } = refData;
    const { homeTeam, awayTeam } = moneyLine;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row right-align">
          <Text>{overUnder}</Text>
          <Text>{`O ${homeTeam}`}</Text>
        </div>
        <div className="flex-row right-align">
          <Text>{`U ${awayTeam}`}</Text>
        </div>
      </div>
    );
  };

  const renderSpread = () => {
    const spread = data;
    const { moneyLine } = refData;
    const { homeTeam, awayTeam } = moneyLine;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>{`-${spread}(${homeTeam})`}</Text>
        </div>
        <div className="flex-row">
          <Text>{`+${spread}(${awayTeam})`}</Text>
        </div>
      </div>
    );
  };

  const renderTextContent = () => {
    const { homeTeam, awayTeam } = data;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>{homeTeam}</Text>
        </div>
        <div className="flex-row">
          <Text>{awayTeam}</Text>
        </div>
      </div>
    );
  };

  switch (type) {
    case CELL_TYPES.GAME:
      return renderGameInfo();
    case CELL_TYPES.OVERUNDER:
      return renderOU();
    case CELL_TYPES.SPREAD:
      return renderSpread();
    default:
  }
  return renderTextContent();
}

LiveOddListCell.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  refData: PropTypes.object
};

export default LiveOddListCell;
