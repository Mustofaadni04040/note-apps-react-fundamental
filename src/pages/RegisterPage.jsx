import { useNavigate } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { register } from "../utils/network-data";

export default function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <AuthLayouts type="register">
      <FormRegister register={onRegisterandler} />
    </AuthLayouts>
  );
}
