import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useEffect, useState } from "react";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { Users } from "./components/users/Users";
const product = [
  {
    title: "Alma",
    price: 120,
    date: "01.25.23",
    id: "1",
  },

  {
    title: "Alcha",
    price: 380,
    date: "11.07.23",
    id: "2",
  },

  {
    title: "Gilas",
    price: 80,
    date: "05.15.23",
    id: "3",
  },
];
function App() {
  const [newExpense, setNewExpense] = useState(
    JSON.parse(localStorage.getItem("key")) || product
  );
  const [login, setLogin] = useState(false);
  const [insideUsers, setInsideUsers] = useState(false);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(newExpense));
  }, [newExpense]);

  useEffect(() => {
    const loginLocalStorage = localStorage.getItem("Auth");
    setLogin(loginLocalStorage);
    const showUsersLocalStorage = localStorage.getItem("Users");
    setInsideUsers(showUsersLocalStorage);
  }, [login]);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };

  const loginHandler = () => {
    setLogin(true);
    localStorage.setItem("Auth", !login);
  };

  const logOutHandler = () => {
    setLogin(false);
    localStorage.removeItem("Auth");
  };

  const deleteExpense = (id) => {
    const newData = newExpense.filter((el) => el.id !== id);
    setNewExpense(newData);
  };

  const showUsers = () => {
    setInsideUsers(true);
    localStorage.setItem("Users", insideUsers);
  };
  const showExpense = () => {
    setInsideUsers(false);
    localStorage.removeItem("Users");
  };

  return (
    <>
      <Header
        showUsers={showUsers}
        showExpense={showExpense}
        login={login}
        logOutHandler={logOutHandler}
      />

      {login ? (
        <>
          {insideUsers ? (
            <Users />
          ) : (
            <>
              <NewExpense addNewExpense={addNewExpense} />
              <Expenses deleteExpense={deleteExpense} newExpense={newExpense} />
            </>
          )}
        </>
      ) : (
        <Login loginHandler={loginHandler} />
      )}
      {/* <Users/> */}
    </>
  );
}

export default App;
