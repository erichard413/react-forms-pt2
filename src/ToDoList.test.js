import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import Todo from './Todo';

it('should render OK', ()=>{
    render(<TodoList />)
})

it('should match snapshot', ()=> {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should start with no todos', ()=> {
    const result = render(<TodoList />);
    const todo = result.container.querySelector('.Todo');
    expect(todo).not.toBeInTheDocument();
});

it('should add new todo', ()=> {
    const result = render(<TodoList />);
    const {getByLabelText, queryByText} = result;
    const text = getByLabelText('Task');
    const btn = queryByText('Add Task');
    fireEvent.change(text, {target: {value: 'do test'}});
    fireEvent.click(btn);
    const todo = result.container.querySelector('.Todo');
    expect(todo).toBeInTheDocument();
});

it('should delete todo', ()=> {
    const result = render(<TodoList />);
    const {getByLabelText, queryByText, getByRole} = result;
    const text = getByLabelText('Task');
    const btn = queryByText('Add Task');
    fireEvent.change(text, {target: {value: 'do test'}});
    fireEvent.click(btn);
    const todo = result.container.querySelector('.Todo');

    const delBtn = getByRole('removeTodo');

    expect(todo).toBeInTheDocument();
    fireEvent.click(delBtn);
    expect(todo).not.toBeInTheDocument();
})