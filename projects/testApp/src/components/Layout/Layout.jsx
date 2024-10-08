import { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { postUserLogOut } from '../../lib/api/axios-api';
import { getToken } from '../../store/slice/userSlice';
import MainHeader from '../MainHeader/MainHeader';

const LayOut = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState(false);

  const location = useLocation();

  const mutation = useMutation(postUserLogOut, {
    onSuccess(data) {
      localStorage.removeItem('token');
      dispatch(getToken(null));
      setUserMenu(false);
      navigate('/');
    },
    onError(err) {
      console.log(err);
    },
  });

  const onLogoutHandler = () => {
    mutation.mutate();
  };

  const onUserToggleMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <>
      <MainHeader
        token={token}
        location={location}
        userMenu={userMenu}
        onLogOut={onLogoutHandler}
        onUserToggleMenu={onUserToggleMenu}
      />
      <Outlet />
    </>
  );
};

export default LayOut;
