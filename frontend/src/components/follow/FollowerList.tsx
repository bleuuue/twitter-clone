import React, { FC } from 'react';
import { IFollower } from '../../interfaces';
import FollowCard from './FollowCard';

interface FollowerList {
  followersData: IFollower[];
}

const FollowerList: FC<FollowerList> = ({ followersData }) => {
  return (
    <>
      {followersData?.map((v) => {
        return <FollowCard key={v.id} nickname={v.follower.nickname} />;
      })}
    </>
  );
};

export default FollowerList;
