import React from 'react';
import cn from 'classnames';

function Page(props) {
  const { className, children } = props;

  return <div className={cn('main-page', className)}>{children}</div>;
}

export default Page;
