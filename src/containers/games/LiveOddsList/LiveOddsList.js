import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cns from 'classnames';
import { Spin } from 'antd';
import GameActions, { GameSelectors } from '@redux/GameRedux';
import KarmaGrid from '@components/common/KarmaGrid';
import LiveOddListCell from './LiveOddListCell';
import SvgIcon from '@components/SvgIcon';

import './LiveOddsList.less';

function LiveOddsList(props) {
  const { loading, loadGames, games, className } = props;
  useEffect(() => {
    loadGames();
  }, []);

  if (loading) {
    return <Spin />;
  }

  const renderCell = (cell, col, row) => {
    const { dataIndex } = col;
    return <LiveOddListCell data={cell} type={dataIndex} refData={row} />;
  };

  const renderFractors = cell => {
    const { weather } = cell;
    const { icon: weatherIcon } = weather;

    return (
      <React.Fragment>
        {weatherIcon && <SvgIcon name="weather" />}
      </React.Fragment>
    );
  };

  const cols = [
    {
      title: 'GAME',
      dataIndex: 'gameInfo',
      width: '320px',
      align: 'left',
      renderCell
    },
    {
      title: 'FRACTORS',
      dataIndex: 'fractors',
      width: '320px',
      align: 'left',
      renderCell: renderFractors
    },
    {
      title: 'OPEN',
      dataIndex: 'open',
      width: '320px',
      renderCell
    },
    {
      title: 'LIVE',
      dataIndex: 'live',
      width: '320px',
      renderCell
    },
    {
      title: 'SPREAD',
      dataIndex: 'spread',
      width: '320px',
      align: 'right',
      renderCell
    },
    {
      title: 'O/U',
      dataIndex: 'ou',
      width: '320px',
      align: 'right',
      renderCell
    },
    {
      title: 'Karma Sim',
      dataIndex: 'karmaSim',
      align: 'right',
      width: '320px',
      renderCell
    },
    {
      title: 'Karma Pick',
      dataIndex: 'karmaPick',
      width: '320px',
      align: 'right',
      renderCell
    }
  ];

  const mainClassName = 'live-odds-list';

  return (
    <div className={cns(mainClassName, className)}>
      <KarmaGrid columns={cols} dataSource={games} />
    </div>
  );
}

LiveOddsList.propTypes = {
  games: PropTypes.array,
  loading: PropTypes.bool,
  loadGames: PropTypes.func,
  className: PropTypes.string
};

const mapStatesToProps = state => ({
  loading: GameSelectors.selectLoading(state),
  games: GameSelectors.selectGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadGames: () => dispatch(GameActions.requestGamesList())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(LiveOddsList);
