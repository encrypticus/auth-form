import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const AlertDialog = (props) => {
  const { open, close } = props;

  const useDialogStyles = makeStyles({
    root: {
      '& .MuiDialog-paper': {
        paddingTop: '84px',
        paddingBottom: '109px',
        width: '600px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        '@media (max-width: 480px)': {
          position: 'fixed',
          bottom: 0,
          margin: 0,
          padding: '29px 0',
          width: '100%',
          /*height: '75vh',*/
          borderRadius: '20px 20px 0 0'
        }
      }
    },

    title: {
      textAlign: 'center',
      marginBottom: '32px',
      padding: 0,
      fontFamily: 'inherit',
      fontSize: '24px',
      fontWeight: '600',
      color: 'rgba(49, 49, 49, 0.7)',
      '@media (max-width: 480px)': {
        fontSize: '18px',
        marginBottom: 0
      }
    },

    actions: {
      padding: 0,
      flexDirection: 'column'
    },

    buttons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      width: '202px',
      height: '50px'
    },

    buttonOk: {
      marginBottom: '28px',
      backgroundColor: '#01BDA7',
      border: '1px solid #01BDA7',
      borderRadius: '41px',
      color: '#fff',

      '&:hover': {
        backgroundColor: '#fff',
        color: '#01BDA7'
      },
      '@media (max-width: 480px)': {
        display: 'none'
      }
    },

    buttonCancel: {
      marginLeft: '0 !important',
      backgroundColor: '#fff',
      border: '1px solid #01BDA7',
      borderRadius: '41px',
      color: '#01BDA7',

      '&:hover': {
        backgroundColor: '#01BDA7',
        color: '#fff'
      }
    },

    iconButton: {
      position: 'absolute',
      top: '17px',
      right: '17px',
      color: '#828282'
    }
  });
  const dialogStyles = useDialogStyles();

  const handleClose = () => {
    close();
  };

  return (
    <Dialog
      className={dialogStyles.root}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        disableTypography
        className={dialogStyles.title}
        id="alert-dialog-title"
      >
        {'Данные успешно сохранены'}
      </DialogTitle>
      <DialogActions className={dialogStyles.actions}>
        <Button className={`${dialogStyles.buttons} ${dialogStyles.buttonOk}`} onClick={handleClose}>
          Хорошо
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
