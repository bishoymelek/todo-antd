import React from 'react';
import styled from 'styled-components';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { ITodo } from 'store/todo/models/todo.model';

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

const TodoTag = styled(Tag)`
  margin: 10px;
  white-space: normal !important;
  word-break: break-all;
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
}) => {
  return (
    <List.Item
      key={todo.id}
      actions={[
        <Tooltip
          title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
    >
      <TodoTag color={todo.completed ? 'cyan' : 'red'}>{todo.name}</TodoTag>
    </List.Item>
  );
};

export default TodoItem;
