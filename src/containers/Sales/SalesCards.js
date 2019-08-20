import React from 'react';
import { Row } from 'antd';
import { SalesCard } from '@components/SalesCard';
const SalesCards = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ marginBottom: '100px' }}
    >
      <SalesCard
        title="Regular Monthly"
        dollar="49"
        cent="99"
        timePeriod="monthly"
        ctaText="Start your free trial"
        disabled={true}
      />
      <SalesCard
        title="Special Offer: 16% off"
        dollar="39"
        cent="99"
        timePeriod="annually"
        ctaText="Start your free trial"
        disabled={false}
      />
      <SalesCard
        title="Regular Annual"
        dollar="44"
        cent="99"
        timePeriod="annually"
        ctaText="Start your free trial"
        disabled={true}
      />
    </Row>
  );
};

export default SalesCards;
