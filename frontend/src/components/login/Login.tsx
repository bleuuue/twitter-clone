import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { FC, FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../hooks';

const Login: FC = () => {
  const [passwordError, setPasswordError] = useState<string>('');
  const [signUpEmail, onChangeSignUpEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [signUpPassword, onChangeSignUpPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (passwordError || !signUpEmail || !nickname || !signUpPassword) return;

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users`,
        {
          email: signUpEmail,
          nickname,
          password: signUpPassword,
        },
      );

      if (response.statusText === 'Created') {
        localStorage.setItem('token', response.data.token);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!email || !password) return;

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users/login`,
        {
          email: email,
          password: password,
        },
      );

      if (response.statusText === 'Created') {
        localStorage.setItem('token', response.data.token);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (signUpPassword === passwordCheck) {
      setPasswordError('');
    } else {
      setPasswordError('패스워드가 일치하지 않습니다.');
    }
  }, [signUpPassword, passwordCheck]);

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex justify-center items-center flex-auto bg-green-500">
        <FontAwesomeIcon className="text-20-rem text-white" icon={faTwitter} />
      </div>
      <div className="max-w-screen-sm md:m-8 flex-auto">
        <div className="mb-8">
          <FontAwesomeIcon
            className="text-green-500 text-4xl"
            icon={faTwitter}
          />
        </div>
        <div className="font-black text-6xl mb-4">Happening now</div>
        <div className="mb-8">
          <div className="font-bold text-4xl mb-2">Sign up</div>
          <form onSubmit={onSubmitSignup}>
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Email"
              type="text"
              value={signUpEmail}
              onChange={onChangeSignUpEmail}
            />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Nickname"
              type="text"
              value={nickname}
              onChange={onChangeNickname}
              maxLength={10}
            />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Password"
              type="password"
              value={signUpPassword}
              onChange={onChangeSignUpPassword}
            />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Password check"
              type="password"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            <br />
            <input
              className="input w-96 text-2xl bg-white"
              type="submit"
              value="Sign up"
            />
            {passwordError && (
              <div className="text-red-500 text-xs">{passwordError}</div>
            )}
            <br />
          </form>
        </div>
        <div className="font-bold text-4xl mb-2">Login</div>
        <form onSubmit={onSubmitLogin}>
          <input
            className="input mb-2 w-96 text-2xl"
            placeholder="Email"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
          <br />
          <input
            className="input mb-2 w-96 text-2xl"
            placeholder="Password"
            type="text"
            value={password}
            onChange={onChangePassword}
          />
          <br />
          <input
            className="input w-96 text-2xl bg-white"
            type="submit"
            value="Login"
          />
          {passwordError && (
            <div className="text-red-500 text-xs">{passwordError}</div>
          )}
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
