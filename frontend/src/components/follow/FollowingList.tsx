import React, { FC } from 'react';
import { IFollowing } from '../../interfaces';

interface FollowingList {
  followersData: IFollowing[];
}

const FollowingList: FC<FollowingList> = ({ followersData }) => {
  return <div>FollowingList</div>;
};

export default FollowingList;
