import React from 'react';

import ParlayBetList from './ParlayBetList';
import ParlayBetForm from './ParlayBetForm';
import ParlayBetSubmit from './ParlayBetSubmit';

function ParlayBetContent() {
  return (
    <div className="parlayBet__content">
      <div className="parlayBet__list-container">
        <ParlayBetList />
        <ParlayBetSubmit />
      </div>
      <ParlayBetForm />
    </div>
  );
}

export default ParlayBetContent;
