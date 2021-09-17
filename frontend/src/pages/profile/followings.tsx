import React, { FC } from 'react';
import useSWR from 'swr';
import Header from '../../components/common/Header';
import { useParams } from 'react-router-dom';
import UserInfo from '../../components/profile/UserInfo';
import { fetcher } from '../../utils/fetcher';
import { IFollowing } from '../../interfaces';
import FollowingCard from '../../components/profile/FollowingCard';

const Followings: FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const { data, error } = useSWR<IFollowing[]>(
    `${process.env.REACT_APP_BACK_URL}/users/followings/${userId}`,
    fetcher,
  );

  if (!data) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <Header title="Followings" />
      <UserInfo />
      {data.map((following, i) => {
        return <FollowingCard key={i} following={following} />;
      })}
    </>
  );
};

export default Followings;
