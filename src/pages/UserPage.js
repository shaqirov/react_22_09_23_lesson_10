import { useState } from "react";

export function UserPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    married: "",
  });

  function onChangeUserInfo(event) {
    if (event.target.type === "checkbox") {
      setForm({
        ...form,
        [event.target.name]: event.target.checked,
      });
      return;
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function send() {
    const userInfo = document.getElementById("userInfo");
    userInfo.innerHTML = `
            <li>Name: ${form.name}</li>
            <li>Surname: ${form.surname}</li>
            <li>Age: ${form.age}</li>
            <li>Married: ${form.married ? "Yes" : "No"}</li>
    `;
  }
  return (
    <>
      <input
        onChange={onChangeUserInfo}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        onChange={onChangeUserInfo}
        type="text"
        placeholder="Surname"
        name="surname"
      />
      <input
        onChange={onChangeUserInfo}
        type="number"
        placeholder="Age"
        name="age"
      />
      <label>
        Are you married?
        <input onChange={onChangeUserInfo} type="checkbox" name="married" />
      </label>
      <button onClick={send}>Send</button>

      <ul id="userInfo"></ul>
    </>
  );
}
