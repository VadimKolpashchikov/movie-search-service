import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './LoginForm.module.scss';
import { useContext, useState, type FormEvent } from 'react';
import UserContext from '../../context/user/UserContext';

function LoginForm() {
  const [name, setName] = useState<string>('');
  const { login } = useContext(UserContext);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = name.trim();

    if (query) {
      login(query);
    }

    setName('');
  };

  return (
    <div className={styles['login-form']}>
      <div className={styles['login-form__head']}>
        <Title>Вход</Title>
      </div>

      <form
        className={styles['login-form__form']}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <Input
          placeholder="Ваше имя"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Button type="submit">Войти в профиль</Button>
      </form>
    </div>
  );
}

export default LoginForm;
