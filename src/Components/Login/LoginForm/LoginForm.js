import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import { UserContext } from '../../../Contexts/UserContext';
import Error from '../../../Helper/Error/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../../Forms/Button/Button.module.css';
import Head from '../../../Helper/Head/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Perdeu a senha?
      </Link>
      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesButton.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
