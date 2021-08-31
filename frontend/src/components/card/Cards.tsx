import React, { createRef, FC, MutableRefObject, useRef } from 'react';
import { ITweet } from '../../interfaces';
import Card from './Card';
import { MutatorCallback } from 'swr/dist/types';
import { CreateTweetProps } from '../main/CreateTweet';

interface CardsProps extends CreateTweetProps {
  tweets: ITweet[];
}

const Cards: FC<CardsProps> = ({ tweets, mutate }) => {
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
