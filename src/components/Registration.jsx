import { useState, useRef } from "react";

export default function Registration() {

  const [showTable, setShowTable] = useState(false);

  const nameRef = useRef();
  const ageRef = useRef();
  const mailRef = useRef();
  const passRef = useRef();
  const cpassRef = useRef();

  const user_data = [
    { id: 101, name: "A", age: 20 },
    { id: 102, name: "B", age: 21 },
    { id: 103, name: "C", age: 22 },
  ];

  function handle(event) {
    event.preventDefault();

    // Show table instead of alert
    setShowTable(true);
  }

  return (
    <>
      <form onSubmit={handle}>
        <h2>Registration</h2>

        <input type="text" placeholder="Full Name" ref={nameRef} />
        <br /><br />

        <input type="number" placeholder="Age" ref={ageRef} />
        <br /><br />

        <input type="email" placeholder="Email" ref={mailRef} />
        <br /><br />

        <input type="password" placeholder="Password" ref={passRef} />
        <br /><br />

        <input type="password" placeholder="Confirm Password" ref={cpassRef} />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {showTable && (
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
      )}
    </>
  );
}