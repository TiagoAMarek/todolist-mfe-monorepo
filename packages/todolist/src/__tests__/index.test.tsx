
import { TodosContextProvider } from "@repo/state-manager";
import { screen, fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { TodoList } from "../";


describe('TodoList', () => {

  it('renders without crashing', () => {
    const { getByText } = render(
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    )
    expect(getByText('Todo List')).toBeInTheDocument()
  })

  it('adds a new todo when the add button is clicked', () => {
    const { getByText, getByLabelText } = render(
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    )

    const input = getByLabelText(/insert todo task here/i)
    fireEvent.change(input, { target: { value: 'New Todo' } })

    const button = getByText('Add')
    fireEvent.click(button)

    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })
})
