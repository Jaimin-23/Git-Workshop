import React, { useState } from "react";

function Login(props) {
  const [isLogged, setIsLogged] = useState("Not Logged In");
  const [showTable, setShowTable] = useState(false);

  function checked() {
    setIsLogged("Logged In Successfully");
    setShowTable(true);
  }

  const user_data = [
    { id: 101, name: "A", age: 20 },
    { id: 102, name: "B", age: 21 },
    { id: 103, name: "C", age: 22 },
  ];

  return (
    <>
      <center>
        <input type="text" placeholder="Enter Email.." />
        <br />
        <br />

        <input type="password" placeholder="Enter Password.." />
        <br />
        <br />

        <button onClick={checked}>Login</button>

        <p>{isLogged}</p>

        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>

        <h3>Hobbies</h3>
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        {showTable && (
          <>
            <h3>User Details</h3>

            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>

              <tbody>
                {user_data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </center>
    </>
  );
}

export default Login;