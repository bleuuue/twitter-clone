import axios from 'axios';
import React, { FC } from 'react';
import useSWR from 'swr';
import Cards from '../components/Cards';
import { ITweet } from '../interfaces';

const Main: FC = () => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error } = useSWR<ITweet[]>(
    `${process.env.REACT_APP_BACK_URL}/tweets`,
    fetcher,
  );

  if (!data) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return <Cards tweets={data} />;
};

export default Main;