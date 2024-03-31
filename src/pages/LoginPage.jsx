import PropTypes from "prop-types";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { login } from "../utils/network-data";

export default function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <AuthLayouts type="login">
      <FormLogin login={onLogin} />
    </AuthLayouts>
  );
}
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
