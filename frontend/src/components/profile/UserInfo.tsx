import React, { FC, useContext, useEffect, useState } from 'react';
import { MeContext } from '../../contexts';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileIcon from '../common/ProfileIcon';
import { toastError, toastSuccess } from '../../utils/toastify';
import { useGetProfileImage } from '../../hooks/useGetProfileImage';
import imageCompression from 'browser-image-compression';
import CreateProfile from './CreateProfile';
import { useGetProfile } from '../../hooks/useGetProfile';
import useSWR from 'swr';
import { fetcher, tokenFetcher } from '../../utils/fetcher';
import { IFollowList, IProfileInfo } from '../../interfaces';
import { useFollowings } from '../../hooks/useFollow';

const UserInfo: FC = () => {
  const [toggleIntroduce, setToggleIntroduce] = useState<boolean>(false);

  const { me } = useContext(MeContext);

  const { userId } = useParams<{ userId: string }>();

  const { mutate } = useGetProfileImage(+userId);
  const { mutate: followingsMutate } = useFollowings(me);

  const { data, error, mutate: profileMutate } = useGetProfile(+userId);

  const onChangeProfileUpload = async (e: any) => {
    try {
      const token = localStorage.getItem('token');
      const imageFile = e.target.files[0];
      if (!imageFile) return;
      const compressedImage = await imageCompression(imageFile, {
        maxWidthOrHeight: 96,
      });
      const blobToFile = new File([compressedImage], compressedImage.name, {
        type: compressedImage.type,
      });
      const formData = new FormData();
      // insomnia에서 파일 올리는 부분
      formData.append('image', blobToFile);
      const response = await axios.put(
        `${process.env.REACT_APP_BACK_URL}/users/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.statusText === 'OK') {
        mutate();
        toastSuccess('Image upload success!!!');
      }
    } catch (error: any) {
      console.error(error);
      toastError(error.response.data.message);
    }
  };

  const onClickToggleIntroduce = () => {
    setToggleIntroduce(true);
  };

  const onClickFollow = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/users/follow/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);
      if (response.statusText === 'Created') {
        toastSuccess(
          `${isFollowData && isFollowData ? '언팔로우 성공' : '팔로우 성공'}`,
        );
        isFollowMutate();
        profileInfoMutate();
        followingsMutate();
      }
    } catch (error: any) {
      console.error(error);
      toastError(error);
    }
  };

  const { data: profileInfoData, mutate: profileInfoMutate } =
    useSWR<IProfileInfo>(
      `${process.env.REACT_APP_BACK_URL}/users/profile/info/${userId}`,
      fetcher,
    );

  const { data: isFollowData, mutate: isFollowMutate } = useSWR<boolean>(
    `${process.env.REACT_APP_BACK_URL}/users/is-follow/${userId}`,
    tokenFetcher,
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <div className="flex border-b-1">
        <div>
          <ProfileIcon userId={data.id} />
          <div>{data.nickname}</div>
          {me === data.id && (
            <div className="relative rounded-full px-2 py-1 font-black text-white text-xs bg-black mx-2 mt-1 text-center">
              <input
                className="w-full opacity-0 absolute"
                type="file"
                onChange={onChangeProfileUpload}
              />
              <span>Fix</span>
            </div>
          )}
        </div>
        <div className="flex justify-around w-full text-center">
          <Link
            className="hover:text-green-500"
            to={`/profile/${userId}/followers`}
          >
            <div>Follwers</div>
            <div>{profileInfoData?.followers.length}</div>
          </Link>
          <div>
            <div>Follwings</div>
            <div>{profileInfoData?.followings.length}</div>
          </div>
          <Link className="hover:text-green-500" to={`/profile/${userId}`}>
            <div>Tweets</div>
            <div>{profileInfoData?.tweets.length}</div>
          </Link>
          {me !== +userId && (
            <div>
              <button
                className={`rounded-full px-4 py-2 font-black text-white text-sm mt-2 bg-black
                ${isFollowData && isFollowData ? 'bg-black' : 'bg-green-500'} `}
                onClick={onClickFollow}
              >
                {isFollowData && isFollowData ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          )}
        </div>
      </div>
      {toggleIntroduce ? (
        <CreateProfile
          profileMutate={profileMutate}
          setToggleIntroduce={setToggleIntroduce}
        />
      ) : data.introduce ? (
        <div>
          {data.introduce}
          {me === data.id && (
            <button
              onClick={onClickToggleIntroduce}
              className="rounded-full px-2 py-1 font-black text-white text-xs bg-black mx-2 mt-1 text-center"
            >
              Fix
            </button>
          )}
        </div>
      ) : me === data.id ? (
        <CreateProfile profileMutate={profileMutate} />
      ) : (
        <div>No Introduce</div>
      )}
    </>
  );
};

export default UserInfo;
