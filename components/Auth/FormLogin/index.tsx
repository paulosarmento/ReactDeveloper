import axios from "axios";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};
const FormLogin = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    axios
      .post(`/auth/login`, data, {
        baseURL: process.env.API_URL,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <form id="auth-login" onSubmit={handleSubmit<FormData>(onSubmit)}>
      <h1>Fazer login</h1>

      <hr />

      <div className="field">
        <input
          type="email"
          id="email-login"
          {...register("email", {
            required: "E-mail é obrigatório",
          })}
        />
        <label htmlFor="email-login">E-mail</label>
      </div>

      <div className="field">
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Senha é obrigatória",
          })}
        />
        <label htmlFor="password">Digite sua Senha</label>
      </div>

      <div className="actions">
        <div>
          <a href="#forget" className="link">
            Esqueceu sua senha?
          </a>
          <a href="#email" className="link">
            Este não é o seu e-mail?
          </a>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default FormLogin;
