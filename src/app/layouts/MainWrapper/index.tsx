import React, { Fragment } from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = (props: Props) => {
  return (
    <Fragment>
      <div className={`wrapper`}>
        {props.children}
      </div>
    </Fragment>
  );
};
