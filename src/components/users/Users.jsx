import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";


export const Users = (props)=>{
  const [studentName, SetStudentName] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const getUsersName = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      SetStudentName(data);
    };
    getUsersName();
  }, []);
  const handleUserClick = async (item) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${item.id}`
    );
    const data = await response.json();
    setSelectedUser(data);
  };

  const usersHandler=()=>{
props.onUsers()
  }
  return (
    <>
      <h1>Students List</h1>
      {studentName.map((user) => {
        return (
          <List key={user.id}>
            <h1 onClick={() => handleUserClick(user)}>{user.name}</h1>
            <h2>{user.id}</h2>
          </List>
        );
      })}
      {selectedUser && (
        <>
          <Cont>
            <Box>
              <h1>Selected User:</h1>
              <p>Name: {selectedUser.name}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Id: {selectedUser.id}</p>
            </Box>
          </Cont>
        </>
      )}
    </>
  );

}
  
const Box = styled.div`
  background-color: grey;
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
const List = styled.li`
  list-style: none;
  padding: 5px;
  border: 1px dashed black;
  margin-right: 20px;
  background-color: orange;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;