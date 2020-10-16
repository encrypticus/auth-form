import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import LocalStorageServiceContext from '../../utils/context';

const FormOverlay = () => {
  const userOverlayStyles = makeStyles({
    root: {
      backgroundColor: '#fff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      borderRadius: '10px'
    },
    info: {
      display: 'flex',
      margin: '0',
      padding: '33px 70px',
      alignItems: 'center',
      color: '#313131',
      fontSize: '18px',
      '@media (max-width: 768px)': {
        padding: '22px 12px',
        fontSize: '14px'
      }
    },
    email: {
      borderBottom: '1px solid #CAE7FE'
    },
    icon: {
      color: '#00BFA5',
      width: '30px',
      height: '30px',
      marginRight: '45px',
      '@media (max-width: 768px)': {
        width: '20px',
        height: '20px',
        marginRight: '12px'
      }
    }
  });
  const overlayStyles = userOverlayStyles();

  const { email, phone } = useSelector(state => state.userReducer);
  const [emailFromStorage, setEmailFromStorage] = useState(email);
  const [phoneFromStorage, setPhoneFromStorage] = useState(phone);
  const storage = useContext(LocalStorageServiceContext);

  useEffect(() => {
    setPhoneFromStorage(storage.getPhone());
  }, [phone]);

  useEffect(() => {
    setEmailFromStorage(storage.getEmail());
  }, [email]);

  return (
    <div className={overlayStyles.root}>
      <p className={`${overlayStyles.info} ${overlayStyles.email}`}>
        <AlternateEmailIcon className={overlayStyles.icon}/>
        {emailFromStorage || email}
      </p>
      <p className={overlayStyles.info}>
        <PhoneIcon className={overlayStyles.icon}/>
        {phoneFromStorage || phone}
      </p>
    </div>
  );
};

export default FormOverlay;
