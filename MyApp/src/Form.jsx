import { useState } from "react";

export function Form() {
  const [data, setData] = useState({
    user: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData({
      ...data,
      [name]: type == "checked" ? checked : value,
    });
  }

  const [array, setArray] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);

    setArray([...data, array]);
    handleFormReset();
  }

  function handleFormReset() {
    setData({
      user: "",
      password: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="user"
        type="text"
        value={data.user}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        style={{
          border:
            data.password.length < 12 ? "1px solid red" : "1px solid black",
        }}
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="Password"
        disabled={data.user.length < 3}
      />
      <button type="submit" disabled={data.password.length < 12}>
        Submit
      </button>
      <button onClick={handleFormReset} disabled={!data.user}>
        Reset
      </button>

      <ul>
        {array.map((index, el) => (
          <div key={index}>
            <li>{el.user}</li>
            <li>{el.password}</li>
          </div>
        ))}
      </ul>
    </form>
  );
}
