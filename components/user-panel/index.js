import React, { useState, useEffect, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { showForm } from '../../redux/actions/auth-form';
import LocalStorageServiceContext from '../../utils/context';

const UserPanel = () => {
  const useUserPanelStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
      padding: '24px 30px',
      background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      borderRadius: '10px',
      '@media (max-width: 768px)': {
        padding: '15px 10px'
      },
      '@media (max-width: 480px)': {
        marginBottom: '10px'
      }
    },
    icon: {
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      '@media (max-width: 768px)': {
        width: '40px',
        height: '40px'
      }
    },
    name: {
      margin: '0 0 0 42px',
      fontSize: '30px',
      fontWeight: '600',
      '@media (max-width: 768px)': {
        fontSize: '14px',
        marginLeft: '10px'
      }
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      padding: 0,
      border: 0,
      borderRadius: '5px',
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      '&:active, &:focus': {
        outline: '1px solid rgba(255, 255, 255, .5)'
      }
    },
    buttonLabel: {
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    editIcon: {
      marginLeft: '8px',
      '@media (max-width: 768px)': {
        marginLeft: 0
      }
    }
  });
  const userPanelStyles = useUserPanelStyles();

  const { formIsShown } = useSelector(state => state.authFormReducer);
  const { name } = useSelector(state => state.userReducer);
  const [nameFromStorage, setNameFromStorage] = useState(name);
  const storage = useContext(LocalStorageServiceContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setNameFromStorage(storage.getName());
  }, [name]);

  const showFormHandler = () => {
    dispatch(showForm(!formIsShown));
  };

  return (
    <div className={userPanelStyles.root}>
      <img
        className={userPanelStyles.icon}
        src='img/user-icon.jpg'
        alt='Иконка пользователя'
      />
      <h2 className={userPanelStyles.name}>
        { nameFromStorage || name}
      </h2>

      <button
        className={userPanelStyles.button}
        type='button'
        onClick={showFormHandler}
      >
        <span className={userPanelStyles.buttonLabel}>{formIsShown ? 'Закрыть' : 'Редактировать'}</span>
        {formIsShown ? <CloseIcon className={userPanelStyles.editIcon}/> :
          <EditIcon className={userPanelStyles.editIcon}/>}
      </button>
    </div>
  );
};

export default UserPanel;
