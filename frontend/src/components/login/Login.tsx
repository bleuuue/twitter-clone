import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { FC, FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../hooks';

const Login: FC = () => {
  const [passwordError, setPasswordError] = useState<string>('');
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (passwordError || !email || !nickname || !password) return;

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users`,
        {
          email: email,
          nickname,
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
    if (password === passwordCheck) {
      setPasswordError('');
    } else {
      setPasswordError('패스워드가 일치하지 않습니다.');
    }
  }, [password, passwordCheck]);

  return (
    <div className="min-h-screen flex">
      <div className="flex justify-center items-center flex-auto bg-green-500">
        <FontAwesomeIcon className="text-20-rem text-white" icon={faTwitter} />
      </div>
      <div className="max-w-screen-sm m-8 flex-auto">
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
              value={email}
              onChange={onChangeEmail}
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
              value={password}
              onChange={onChangePassword}
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
      </div>
    </div>
  );
};

export default Login;
