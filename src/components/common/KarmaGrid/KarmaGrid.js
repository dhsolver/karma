import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import get from 'lodash/get';

import './KarmaGrid.less';

function KarmaGrid(props) {
  const { className, dataSource, columns } = props;
  const mainClassName = 'karma-table';

  const renderHeader = (col, index) => {
    const { dataIndex, title, width, align } = col;
    return (
      <div
        key={dataIndex}
        className={cns(`${mainClassName}__col`, {
          [`${mainClassName}__col--left`]: align === 'left',
          [`${mainClassName}__col--right`]: align === 'right',
          [`${mainClassName}__col--width`]: width !== undefined
        })}
        style={{
          width
        }}
      >
        {col.renderHeader ? col.renderHeader(col, index) : title}
      </div>
    );
  };

  const renderCell = (row, col) => {
    const { dataIndex, width, align } = col;
    const cell = get(row, dataIndex);
    return (
      <div
        key={dataIndex}
        className={cns(`${mainClassName}__col`, {
          [`${mainClassName}__col--left`]: align === 'left',
          [`${mainClassName}__col--right`]: align === 'right',
          [`${mainClassName}__col--width`]: width !== undefined
        })}
        style={{
          width
        }}
      >
        {col.renderCell ? col.renderCell(cell, col, row) : `${cell}`}
      </div>
    );
  };

  const renderCard = row => {
    return (
      <div
        key={`${mainClassName}__row_${row.key}`}
        className={cns(`${mainClassName}__row`, className)}
      >
        {columns.map(col => renderCell(row, col))}
      </div>
    );
  };

  return (
    <div className={cns(mainClassName, className)}>
      <div className={`${mainClassName}__header-row`}>
        {columns.map(renderHeader)}
      </div>

      {dataSource.map((row, index) => renderCard(row, index))}
    </div>
  );
}

KarmaGrid.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  renderHeaderItem: PropTypes.func,
  renderRowItem: PropTypes.func
};

export default KarmaGrid;
