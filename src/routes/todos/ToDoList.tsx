import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, PageHeader, message } from 'antd';

import TodoList from 'components/to-do-list';
import AddTodoForm from 'components/add-to-do-form';

import { RootState } from 'store/rootReducer';
import { ITodo } from 'store/todo/models/todo.model';
import { addTodo, removeTodo, toggleTodoStatus } from 'store/todo/actions';

interface ITodosContainerProps {}

export const TodoListRoute: React.FC<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
  };

  return (
    <Row justify="center" align="middle" gutter={[0, 20]}>
      <Col
        xs={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader title="To-Do List" />
      </Col>

      <Col
        xs={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default TodoListRoute;
