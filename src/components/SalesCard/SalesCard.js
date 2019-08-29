import React from 'react';
import './SalesCard.less';
import { Typography, Row } from 'antd';
import { Button } from '@components/common/Button';
import windowSize from 'react-window-size';
const { Text, Title } = Typography;

const SalesCard = ({
  title,
  dollar,
  cent,
  timePeriod,
  ctaText,
  disabled,
  windowWidth
}) => {
  return (
    <div
      className="sales-card"
      style={{
        transform: !disabled && windowWidth > 900 && 'scale(1.1)',
        zIndex: !disabled && windowWidth > 900 && '99',
        filter: disabled && 'grayscale(1)'
      }}
    >
      <Row
        className="sales-card-header"
        type="flex"
        align="middle"
        justify="center"
      >
        <Title level={4}>{title}</Title>
      </Row>
      <div className="sales-card-content">
        <Row type="flex" align="bottom" justify="center">
          <Title level={1}>
            <sup className="dollar-sign">$</sup>
            {dollar}
            <sup>{cent}</sup>
          </Title>
        </Row>
        <Row type="flex" align="middle" justify="center">
          <Text className="sales-card-content-sub-heading-primary">
            per month
          </Text>
        </Row>
        <Row type="flex" align="bottom" justify="center">
          <Text className="sales-card-content-sub-heading-secondary">
            billed {timePeriod}
          </Text>
        </Row>
      </div>

      <Row
        className="sales-card-button-container"
        type="flex"
        align="middle"
        justify="center"
      >
        <Button variant="cta">{ctaText}</Button>
      </Row>
    </div>
  );
};

export default windowSize(SalesCard);
