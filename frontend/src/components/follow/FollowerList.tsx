import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MeContext } from '../../contexts';
import { IFollower } from '../../interfaces';
import FollowCard from './FollowCard';

interface FollowerListProps {
  followersData: IFollower[];
}

const FollowerList: FC<FollowerListProps> = ({ followersData }) => {
  const { me } = useContext(MeContext);

  return (
    <div className="bg-gray-100 w-80 py-4 rounded-2xl">
      <div className="font-bold text-xl mb-8 pl-4">FollowerList</div>
      {followersData?.length === 0 ? (
        <div className="flex justify-center pb-4">Not exist follower list</div>
      ) : (
        followersData?.map((v, i) => {
          if (i < 3) {
            return (
              <FollowCard
                key={v.id}
                userId={v.following.id}
                nickname={v.following.nickname}
                introduce={v.following.introduce}
              />
            );
          }
        })
      )}
      {followersData?.length > 3 && (
        <Link
          to={`/profile/${me}/followers`}
          className="flex justify-center mt-2"
        >
          <button className="border-1 border-gray-500 rounded-full px-4 py-2 hover:text-green-500 hover:border-green-500">
            More
          </button>
        </Link>
      )}
    </div>
  );
};

export default FollowerList;
