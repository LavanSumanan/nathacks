import { useState } from "react";

const Test = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getFromAPI = () => {
    fetch("/get")
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
        } else {
          console.log("not successful");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const postToAPI = () => {
    const data = { username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/post", options)
      .then((res) => res.json())
      .then((serverresponse) => console.log(serverresponse));
  };

  return (
    <div>
      <div>
        <label>
          Username
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={postToAPI}>post request</button>
      </div>

      <button onClick={getFromAPI}>get request</button>
    </div>
  );
};

export default Test;
