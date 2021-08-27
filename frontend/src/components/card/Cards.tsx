import React, { FC } from 'react';
import { mutate } from 'swr';
import { ITweet } from '../../interfaces';
import Card from './Card';
import { MutatorCallback } from 'swr/dist/types';

interface CardProps {
  tweets: ITweet[];
  mutate: (
    data?: ITweet[] | Promise<ITweet[]> | MutatorCallback<ITweet[]> | undefined,
    shouldRevalidate?: boolean | undefined,
  ) => Promise<ITweet[] | undefined>;
}

const Cards: FC<CardProps> = ({ tweets, mutate }) => {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Card key={tweet.id} tweet={tweet} mutate={mutate} />;
      })}
    </div>
  );
};

export default Cards;
