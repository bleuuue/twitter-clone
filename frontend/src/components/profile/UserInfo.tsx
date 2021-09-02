import React, { FC, useContext, useEffect } from 'react';
import { MeContext } from '../../contexts';
import ProfileIcon from '../ProfileIcon';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserInfo: FC = () => {
  const { me } = useContext(MeContext);

  const { userId }: { userId: string } = useParams();

  const onChangeProfileUpload = async (e: any) => {
    try {
      const token = localStorage.getItem('token');
      const imageFile = e.target.files[0];
      const formData = new FormData();

      if (!imageFile) return;

      formData.append('image', imageFile);

      const response = await axios.put(
        `${process.env.REACT_APP_BACK_URL}/users/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex border-b-1">
      <div>
        <ProfileIcon />
        <div>nickname</div>
        {me === +userId && (
          <div>
            <input type="file" onChange={onChangeProfileUpload} />
          </div>
        )}
      </div>
      <div className="flex justify-around w-full text-center">
        <div>
          <div>Followers</div>
          <div>123</div>
        </div>
        <div>
          <div>Followings</div>
          <div>123</div>
        </div>
        <div>
          <div>Tweets</div>
          <div>123</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
