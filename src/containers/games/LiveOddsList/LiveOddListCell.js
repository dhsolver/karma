import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Typography } from 'antd';
import SvgInline from '@components/common/SvgInline';

const { Text } = Typography;

const CELL_TYPES = {
  GAME: 'score',
  OVERUNDER: 'ou',
  SPREAD: 'spread',
  KARMAPICK: 'karmaPick',
  KARMSIM: 'karmaSim'
};

function LiveOddListCell(props) {
  const { className, data, type, refData } = props;

  const mainClassName = 'live-odds-list__two-row-cell';

  const renderGameInfo = () => {
    const { teamInfo } = refData;
    const { homeTeam: homeScore, awayTeam: awayScore } = data;
    const { homeTeam, awayTeam } = teamInfo;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <div className="flex-col">
            <SvgInline url={homeTeam.logo} />
          </div>

          <div className="flex-col">
            <Text>{homeTeam.name}</Text>
          </div>

          <div className="flex-col score">
            <Text>{homeScore.score}</Text>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-col">
            <SvgInline url={awayTeam.logo} />
          </div>

          <div className="flex-col">
            <Text>{awayTeam.name}</Text>
          </div>

          <div className="flex-col score">
            <Text>{awayScore.score}</Text>
          </div>
        </div>
      </div>
    );
  };

  const renderOU = () => {
    const { overUnder, overPayout, underPayout } = data;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row right-align">
          <Text>{overUnder}</Text>
          <Text>{`O ${overPayout}`}</Text>
        </div>
        <div className="flex-row right-align">
          <Text>{`U ${underPayout}`}</Text>
        </div>
      </div>
    );
  };

  const renderSpread = () => {
    const { homeTeam, awayTeam } = data;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>{`${homeTeam.pointSpread}(${homeTeam.pointPayout})`}</Text>
        </div>
        <div className="flex-row">
          <Text>{`-${awayTeam.pointSpread}(${awayTeam.pointPayout})`}</Text>
        </div>
      </div>
    );
  };

  const renderKarma = () => {
    const { teamKey, value, percentage } = data;
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>
            {percentage
              ? `${teamKey} ${value}, ${percentage}%`
              : `${teamKey} ${value}`}
          </Text>
        </div>
      </div>
    );
  };

  const renderDummy = () => {
    return (
      <div className={cns(mainClassName, className)}>
        <div className="flex-row">
          <Text>-106</Text>
        </div>
        <div className="flex-row">
          <Text>-104</Text>
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
    case CELL_TYPES.KARMAPICK:
    case CELL_TYPES.KARMSIM:
      return renderKarma();
    default:
  }
  return renderDummy();
}

LiveOddListCell.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  refData: PropTypes.object
};

export default LiveOddListCell;
