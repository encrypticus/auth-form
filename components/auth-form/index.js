import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, setUserEmail, setUserPhone } from '../../redux/actions/user';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import ConfirmDialog from '../dialogs/confirm';
import LocalStorageServiceContext from '../../utils/context';
import fetch from 'isomorphic-unfetch';

const AuthForm = () => {
  const storage = useContext(LocalStorageServiceContext);

  const useFormStyles = makeStyles({
    wrapper: {
      paddingBottom: '44px',
      background: '#fff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      borderRadius: '10px',
      '@media (max-width: 480px)': {
        paddingBottom: '17px'
      }
    },
    fieldBlock: {
      display: 'flex',
      padding: '49px 35px 44px',
      '@media (max-width: 1365px)': {
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      '@media (max-width: 480px)': {
        padding: '26px 23px 17px'
      }
    },
    fieldWrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '77px',
      '&:not(:last-child)': {
        borderRight: '1px solid #CAE7FE'
      },
      '&:not(:first-child)': {
        paddingLeft: '32px'
      },
      '@media (max-width: 1365px)': {
        marginBottom: '22px',
        paddingLeft: '0 !important',
        border: '0 !important'
      },
      '@media (max-width: 480px)': {
        paddingRight: 0,
        width: '100%'
      }
    },
    buttonWrapper: {
      textAlign: 'center'
    }
  });
  const formStyles = useFormStyles();

  const useInputStyles = makeStyles({
    root: {
      width: '254px',
      '@media (max-width: 480px)': {
        width: '100%'
      },
      '& input:focus + fieldset': {
        borderColor: '#359FF4 !important'
      },
      '& label.Mui-focused': {
        color: '#359FF4'
      },
      '& .MuiFormHelperText-root': {
        color: '#EB5757',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: '12px'
      }
    }
  });
  const inputStyles = useInputStyles();

  const useButtonStyles = makeStyles({
    root: {
      padding: '15px 26px',
      backgroundColor: '#01BDA7',
      borderRadius: '36px',
      boxShadow: 'none',

      '&:hover': {
        backgroundColor: '#009a88',
        boxShadow: 'none'
      },

      '& .MuiButton-label': {
        color: '#fff',
        textTransform: 'lowercase',
        fontFamily: 'Open Sans, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '600'
      }
    }
  });
  const buttonStyles = useButtonStyles();

  const useIconStyles = makeStyles({
    root: {
      color: '#00BFA5',
      width: '27px',
      height: '30px',
      marginRight: '45px',
      '@media (max-width: 480px)': {
        display: 'none'
      }
    },
    email: {
      width: '30px'
    },
    phone: {
      height: '27px'
    }
  });
  const iconStyles = useIconStyles();

  const initialValues = {
    name: '',
    email: '',
    phone: ''
  };

  const dispatch = useDispatch();

  const [openConfirm, setOpenConfirm] = useState(false);

  const [user, setUser] = useState({});

  const saveUser = () => {
    storage.setUser(user);

    dispatch(setUserName(storage.getName()));
    dispatch(setUserEmail(storage.getEmail()));
    dispatch(setUserPhone(storage.getPhone()));

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).catch(err => console.log(err));
  };

  const openConfirmDialog = () => {
    setOpenConfirm(true);
  };

  const closeConfirmDialog = () => {
    setOpenConfirm(false);
  };

  const onSubmit = (user) => {
    setUser(user);
    openConfirmDialog();
  };

  const validate = (values) => {
    const errors = {};
    const nameRegexp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
    const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (!values.name.trim()) {
      errors.name = 'это поле должно быть заполнено';
    } else if (!nameRegexp.test(values.name.trim())) {
      errors.name = 'Вы неверно указали имя';
    }

    if (!values.email.trim()) {
      errors.email = 'это поле должно быть заполнено';
    } else if (!emailRegexp.test(values.email.trim())) {
      errors.email = 'Вы неверно указали email';
    }

    if (!values.phone.trim()) {
      errors.phone = 'это поле должно быть заполнено';
    } else if (!phoneRegexp.test(values.phone.trim())) {
      errors.phone = 'Вы неверно указали номер';
    }

    return errors;
  };

  return (
    <div className={formStyles.wrapper}>
      <Formik {...{ initialValues, onSubmit, validate }}>
        {({ getFieldProps, submitForm, errors }) => (
          <form>
            <div className={formStyles.fieldBlock}>
              <div className={formStyles.fieldWrapper}>
                <AssignmentIndIcon className={iconStyles.root}/>
                <TextField
                  error={!!errors.name}
                  className={inputStyles.root}
                  name='name'
                  placeholder='Укажите ваши фамилию и имя'
                  label="Фамилия и имя"
                  variant="outlined"
                  helperText={errors.name}
                  {...getFieldProps('name')}
                />
              </div>
              <div className={formStyles.fieldWrapper}>
                <AlternateEmailIcon className={`${iconStyles.root} ${iconStyles.email}`}/>
                <TextField
                  error={!!errors.email}
                  className={inputStyles.root}
                  name='email'
                  placeholder='Ivanove@mail.ru'
                  label='E-mail'
                  variant="outlined"
                  helperText={errors.email}
                  {...getFieldProps('email')}
                />
              </div>
              <div className={formStyles.fieldWrapper}>
                <PhoneIcon className={`${iconStyles.root } ${iconStyles.phone}`}/>
                <TextField
                  error={!!errors.phone}
                  className={inputStyles.root}
                  name='phone'
                  placeholder='Укажите номер телефона'
                  label="Номер телефона"
                  variant="outlined"
                  helperText={errors.phone}
                  {...getFieldProps('phone')}
                />
              </div>
            </div>
            <div className={formStyles.buttonWrapper}>
              <Button
                className={buttonStyles.root}
                variant='contained'
                color='primary'
                onClick={submitForm}
              >
                Сохранить изменения
              </Button>
            </div>
          </form>
        )}

      </Formik>
      <ConfirmDialog
        open={openConfirm}
        openConfirmDialog={openConfirmDialog}
        closeConfirmDialog={closeConfirmDialog}
        saveUser={saveUser}
      />
    </div>
  );
};

export default AuthForm;
