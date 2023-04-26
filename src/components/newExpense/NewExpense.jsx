import React, { useState } from 'react'
import Button from '../UI/button/Button'
import ExpenseForm from '../expenseForm/ExpenseForm'
import styled from 'styled-components'

const NewExpense = ({ addNewExpense }) => {
  const [state, setState] = useState(false)

  const stateHandler = () => {
    setState((prevState) => !prevState)
  }

  return (
    <NewExpenseStyled>
      {state ? (
        <ExpenseForm
          stateHandler={stateHandler}
          addNewExpense={addNewExpense}
        />
      ) : (
        <Button onClick={stateHandler}>Добавить новый расход</Button>
      )}
    </NewExpenseStyled>
  )
}

export default NewExpense

const NewExpenseStyled = styled.div`
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 20px 0px;
  width: 780px;
  display: flex;
  justify-content: center;
  margin-left: 25%;
  margin-top: 5%;
`
