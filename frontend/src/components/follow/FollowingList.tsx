import React, { FC } from 'react';
import { IFollowing } from '../../interfaces';
import FollowCard from './FollowCard';

interface FollowingListProps {
  followingsData: IFollowing[];
}

const FollowingList: FC<FollowingListProps> = ({ followingsData }) => {
  return (
    <div className="bg-gray-100 w-80 py-4 rounded-2xl">
      <div className="font-bold text-xl mb-8 pl-4">FollowingList</div>
      {followingsData?.length === 0 ? (
        <div className="flex justify-center pb-4">Not exist following list</div>
      ) : (
        followingsData?.map((v) => {
          return (
            <FollowCard
              key={v.id}
              userId={v.follower.id}
              nickname={v.follower.nickname}
              introduce={v.follower.introduce}
            />
          );
        })
      )}
    </div>
  );
};

export default FollowingList;
