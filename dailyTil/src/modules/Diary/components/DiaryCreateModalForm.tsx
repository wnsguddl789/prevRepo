import * as React from 'react';
import { Form, Input } from 'antd';
import type { Moment } from 'moment';
interface DiaryCreateModalFormProps {
  date: Moment;
}
export const DiaryCreateModalForm: React.FunctionComponent<DiaryCreateModalFormProps> = ({ date }) => {
  const onFinish = () => {
    console.log('dd');
  };
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 24 }} onFinish={onFinish}>
      <Form.Item label="배운내용">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};
