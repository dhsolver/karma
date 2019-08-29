import React from 'react';
import { Typography, Row, Col } from 'antd';
import { Button } from '@components/common/Button';
import './PreLaunch.less';

const { Title, Text } = Typography;

const PreLaunch = () => {
  return (
    <div className="prelaunch">
      <Title level={2}>Launching late september 2019</Title>
      <Text>
        Sign up below to get on our early bird list and get notified when we
        launch!
      </Text>
      <Button
        onClick={() =>
          (location.href = 'https://ackarmasports.activehosted.com/f/219')
        }
        variant="cta"
        size="large"
      >
        Get on the list
      </Button>
    </div>
  );
};

export default PreLaunch;
