import React, { useState } from "react";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
  });

  console.log(input);

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={(e) =>
            setInput({
              ...input,
              username: e.target.value,
            })
          }
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
