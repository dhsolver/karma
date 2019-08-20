import React from 'react';
import './FeatureCard.less';
import { Typography, Row, Col } from 'antd';
import { CustomButton } from '@components/CustomButton';
const { Title, Text } = Typography;
const FeatureCard = ({ title, content, reverse }) => {
  return (
    <Row
      className="feature-card"
      type="flex"
      align="middle"
      justify="center"
      style={{
        flexDirection: reverse && 'row-reverse',
        backgroundColor: reverse ? '#f0f0f0' : '#ffffff'
      }}
    >
      <Col span={6} className="feature-card-content">
        <Title level={1}>{title}</Title>
        <Text>{content}</Text>
        <CustomButton
          type="cta"
          content="Start Your free Trial"
          style={{ width: '60%', marginTop: '20px', minWidth: '220px' }}
        />
      </Col>
      <Col span={6} className="feature-card-picture">
        <Title level={1}>Lorem Ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab
          consectetur reprehenderit aliquid magnam voluptatem ratione, eaque
          voluptates illo cupiditate, minima deleniti sed corrupti esse, at
          sapiente omnis nisi neque. Delectus iure consequuntur accusamus enim
          maxime et animi fugit dolorem quaerat, ipsam alias reiciendis
          cupiditate, magnam rem. Vero odio enim at minus cum nulla iure
          obcaecati ipsam, repellat quam qui. Harum quod, nulla odio aspernatur
          iure perspiciatis amet vel fugit temporibus consequatur, distinctio
          excepturi quis eaque recusandae necessitatibus facilis at magnam. Iste
          culpa odio possimus animi illum neque dolore corporis! Pariatur iste,
          quis labore nesciunt enim debitis dolorum nulla ratione dolore quas
          accusamus nemo tenetur, quos error eum deleniti quia? Ea perspiciatis
          a quo magnam pariatur consectetur cupiditate dolorem et.
        </Text>
      </Col>
    </Row>
  );
};

export default FeatureCard;
