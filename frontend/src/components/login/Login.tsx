import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const Login: FC = () => {
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
          <form>
            <input className="input mb-2 w-96 text-2xl" placeholder="Email" />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Nickname"
            />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Password"
            />
            <br />
            <input
              className="input mb-2 w-96 text-2xl"
              placeholder="Password check"
            />
            <br />
            <input
              className="input w-96 text-2xl bg-white"
              type="submit"
              value="Sign up"
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
