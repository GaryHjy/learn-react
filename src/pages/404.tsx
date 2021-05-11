import React from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';

const NotFound = () => {
  const onBackHome = () => {
    history.push('/');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={onBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
