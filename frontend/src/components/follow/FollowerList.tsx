import React, { FC } from 'react';
import { IFollower } from '../../interfaces';
import FollowCard from './FollowCard';

interface FollowerListProps {
  followersData: IFollower[];
}

const FollowerList: FC<FollowerListProps> = ({ followersData }) => {
  return (
    <div className="bg-gray-100 w-80 py-4 rounded-2xl">
      <div className="font-bold text-xl mb-8 pl-4">FollowerList</div>
      {followersData?.length === 0 ? (
        <div className="flex justify-center pb-4">Not exist follower list</div>
      ) : (
        followersData?.map((v) => {
          return <FollowCard key={v.id} nickname={v.following.nickname} />;
        })
      )}
    </div>
  );
};

export default FollowerList;
