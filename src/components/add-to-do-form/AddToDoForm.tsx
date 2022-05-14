import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { ITodo } from 'store/todo/models/todo.model';

const { TextArea } = Input;

const StyledTodoForm = styled(Form)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
`;

interface IAddTodoFormProps {
  onFormSubmit: (todo: ITodo) => void;
}

export const AddTodoForm: React.FC<IAddTodoFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name'),
    });

    form.resetFields();
  };

  return (
    <StyledTodoForm
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <TextArea rows={3} placeholder="What needs to be done?" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </StyledTodoForm>
  );
};

export default AddTodoForm;
