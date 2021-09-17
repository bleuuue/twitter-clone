import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MeContext } from '../../contexts';
import { IFollowing } from '../../interfaces';
import FollowCard from './FollowCard';

interface FollowingListProps {
  followingsData: IFollowing[];
}

const FollowingList: FC<FollowingListProps> = ({ followingsData }) => {
  const { me } = useContext(MeContext);
  return (
    <div className="bg-gray-100 w-80 py-4 rounded-2xl">
      <div className="font-bold text-xl mb-8 pl-4">FollowingList</div>
      {followingsData?.length === 0 ? (
        <div className="flex justify-center pb-4">Not exist following list</div>
      ) : (
        followingsData?.map((v, i) => {
          if (i > 3) {
            return (
              <FollowCard
                key={v.id}
                userId={v.follower.id}
                nickname={v.follower.nickname}
                introduce={v.follower.introduce}
              />
            );
          }
        })
      )}
      {followingsData?.length > 3 && (
        <Link
          className="flex justify-center mt-2"
          to={`/profile/${me}/followers`}
        >
          <button className="border-1 border-gray-500 rounded-full px-4 py-2 hover:text-green-500 hover:border-green-500">
            More
          </button>
        </Link>
      )}
    </div>
  );
};

export default FollowingList;
