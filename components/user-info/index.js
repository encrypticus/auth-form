import React, { useContext, useEffect, useState } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import LocalStorageServiceContext from '../../utils/context';

const UserInfo = () => {
  const useUserInfoStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    delimeter: {
      width: '1px',
      height: '39px',
      margin: '0 14px',
      backgroundColor: '#fff',
      '@media (max-width: 768px)': {
        height: '24px'
      }
    },
    userIcon: {
      width: '40px',
      height: '40px',
      marginRight: '20px',
      borderRadius: '50%',
      '@media (max-width: 768px)': {
        width: '24px',
        height: '24px',
        marginRight: 0
      }
    },
    userName: {
      margin: 0,
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: '600',
      color: 'inherit',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    }
  });
  const userInfoStyles = useUserInfoStyles();

  const useIconStyles = makeStyles({
    root: {
      color: '#fff',
      marginLeft: 'auto',
      width: '36px',
      height: 'auto',

      '@media (max-width: 768px)': {
        width: '25px',
        height: 'auto'
      }
    }
  });
  const iconStyles = useIconStyles();

  const { name } = useSelector(state => state.userReducer);
  const storage = useContext(LocalStorageServiceContext);
  const [nameFromStorage, setNameFromStorage] = useState(name);

  useEffect(() => {
    setNameFromStorage(storage.getName());
  }, [name]);

  return (
    <div className={userInfoStyles.root}>
      <NotificationsNoneIcon className={iconStyles.root}/>
      <div className={userInfoStyles.delimeter}></div>
      <img
        className={userInfoStyles.userIcon}
        src='img/user-icon.jpg'
        alt='Иконка пользователя'
      />
      <p className={userInfoStyles.userName}>
        {nameFromStorage || name}
      </p>
    </div>
  );
};

export default UserInfo;
