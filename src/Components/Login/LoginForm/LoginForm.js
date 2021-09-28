import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import Error from '../../../Helper/Error/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../../Forms/Button/Button.module.css';
import Head from '../../../Helper/Head/Head';
import { userLogin } from '../../../Store/user';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { token, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loading = token.loading || user.loading;
  const error = token.loading || user.loading;

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
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
        <Error error={error && 'Dados incorretos.'} />
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
