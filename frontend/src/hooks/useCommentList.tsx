import { IComment, ITweet } from '../interfaces';
import axios from 'axios';
import React, { FC } from 'react';
import useSWR from 'swr';
import { toastError } from '../utils/toastify';

export const useCommentList = (tweet: ITweet) => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error: any) {
      console.error(error);
      toastError(error.response.data.message);
    }
  };

  const { data, mutate } = useSWR<IComment[]>(
    `${process.env.REACT_APP_BACK_URL}/comments/tweets/${tweet.id}`,
    fetcher,
  );

  return { data, mutate };
};
