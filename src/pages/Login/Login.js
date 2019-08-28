import React from 'react';
import { Typography } from 'antd';
import { Page, PageContent, TopNav, TOP_NAV_TYPES } from '@containers/Layout';
import LoginForm from '@containers/auth/LoginForm';
import './Login.less';

const { Title } = Typography;

export default function LoginPage(props) {
  const { history } = props;
  return (
    <Page>
      <TopNav type={TOP_NAV_TYPES.SECONDARY} history={history} />
      <PageContent className="login">
        <Title level={2}>Login to Your Bet Karma Account</Title>
        <div className="login__form-container">
          <LoginForm />
        </div>
      </PageContent>
    </Page>
  );
}
