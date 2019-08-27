import React from 'react';
import './FeatureCard.less';
import { Typography, Row, Col } from 'antd';
import { CustomButton } from '@components/CustomButton';
import { FeatureCardImage } from '@components/FeatureCardImage';
import windowSize from 'react-window-size';

const { Title, Text } = Typography;
const FeatureCard = ({ title, content, index, windowWidth }) => {
  return (
    <div className="feature-card">
      <Col className="feature-card-content">
        <Title level={1}>{title}</Title>
        <Text>{content}</Text>
        <CustomButton type="cta" content="Start Your free Trial" />
      </Col>
      <FeatureCardImage
        name={`feature-${index}`}
        className="feature-card-picture"
        deviceType={windowWidth > 600 ? 'desktop' : 'mobile'}
      />
    </div>
  );
};

export default windowSize(FeatureCard);
