import React, { createRef, FC, MutableRefObject, useRef } from 'react';
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
  const ellipsisElRefs = useRef<MutableRefObject<HTMLDivElement | null>[]>([]);

  ellipsisElRefs.current = tweets.map(
    (_, i) => ellipsisElRefs.current[i] ?? createRef(),
  );

  return (
    <div>
      {tweets.map((tweet, i) => {
        return (
          <Card
            key={tweet.id}
            tweet={tweet}
            mutate={mutate}
            ellipsisEl={ellipsisElRefs.current[i]}
          />
        );
      })}
    </div>
  );
};

export default Cards;
