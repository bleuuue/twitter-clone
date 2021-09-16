import axios from 'axios';
import React, { FC, useContext, useEffect } from 'react';
import useSWR from 'swr';
import Header from '../../components/common/Header';
import { useParams } from 'react-router-dom';
import UserInfo from '../../components/profile/UserInfo';
import { fetcher } from '../../utils/fetcher';
import { MeContext } from '../../contexts';
import FollowerCard from '../../components/profile/FollowerCard';
import { IFollower } from '../../interfaces';

const Followers: FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const { data, error } = useSWR<IFollower[]>(
    `${process.env.REACT_APP_BACK_URL}/users/followers/${userId}`,
    fetcher,
  );

  useEffect(() => console.log(data), [data]);

  if (!data) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <Header title="Profile" />
      <UserInfo />
      {data.map((follower, i) => {
        return <FollowerCard key={i} follower={follower} />;
      })}
    </>
  );
};

export default Followers;
