import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import InputForm from "../elements/inputForm/InputForm";
import Button from "../elements/button/Button";

export default function FormLogin({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function onEmailChangeHandler(e) {
    setEmail(e.target.value);
  }
  function onPasswordChangeHandler(e) {
    setPassword(e.target.value);
  }
  function onSubmitEventHandler(e) {
    login({ email, password });
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitEventHandler}>
      <InputForm
        name="email"
        label="Email"
        type="text"
        placeholder="JhonDoe@gmail.com"
        ref={emailRef}
        value={email}
        onChange={onEmailChangeHandler}
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="****************"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <Button
        type="submit"
        classname="flex items-center justify-center w-full gap-1 py-1 px-3 rounded bg-sky-500 text-white hover:bg-sky-600 duration-200"
      >
        Login
      </Button>
    </form>
  );
}
FormLogin.propTypes = {
  login: PropTypes.func.isRequired,
};
