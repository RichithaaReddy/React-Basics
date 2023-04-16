//signup
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    pass: "",
    conPass: "",
  });
  const { username, email, pass, conPass } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); //updaqte while entering new value
    console.log([e.target.name])
  };
  
  const submit = (e) => {
    e.preventDefault();
    if(username.length <= 5){
      alert('Less than 5 characters')
    }
    else if (pass !== conPass) {
      alert("pass did nt match")
      //console.log(data);
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="pass"
          value={pass}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="conPass"
          value={conPass}
          onChange={changeHandler}
        />
        { pass !== conPass ? <h2>Password didnt match</h2>: null}
        {/* if pass matches it returns null */}
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default App;
