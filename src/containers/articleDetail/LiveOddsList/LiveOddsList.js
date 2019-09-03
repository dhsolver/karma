import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cns from 'classnames';
import { Spin } from 'antd';
import GameActions, { GameSelectors } from '@redux/GameRedux';
import KarmaGrid from '@components/common/KarmaGrid';
import LiveOddListCell from './LiveOddListCell';

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

  const cols = [
    {
      title: '',
      dataIndex: 'gameInfo',
      width: '320px',
      align: 'left',
      renderCell
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
      title: 'SPR',
      dataIndex: 'spread',
      width: '320px',
      align: 'right',
      renderCell
    }
  ];

  const mainClassName = 'live-odds-list';

  return (
    <div className={cns(mainClassName, className)}>
      <KarmaGrid
        columns={cols}
        dataSource={games}
        className="article-detail-grid"
      />
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
