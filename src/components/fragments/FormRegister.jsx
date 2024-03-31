import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import InputForm from "../elements/inputForm/InputForm";
import Button from "../elements/button/Button";

export default function FormRegister({ register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function onNameChangeHandler(e) {
    setName(e.target.value);
  }
  function onEmailChangeHandler(e) {
    setEmail(e.target.value);
  }
  function onPasswordChangeHandler(e) {
    setPassword(e.target.value);
  }
  function onSubmitEventHandler(e) {
    e.preventDefault();
    register({ name, email, password });
  }
  return (
    <form onSubmit={onSubmitEventHandler}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukan username anda"
        ref={usernameRef}
        value={name}
        onChange={onNameChangeHandler}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="jhon@gmail.com"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********************"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <Button
        type="submit"
        classname="flex items-center justify-center w-full gap-1 py-1 px-3 rounded bg-sky-500 text-white hover:bg-sky-600 duration-200"
      >
        Register
      </Button>
    </form>
  );
}
FormRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
