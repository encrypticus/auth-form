import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AlertDialog from  '../alert';

export default function ConfirmDialog(props) {
  const useDialogStyles = makeStyles({
    root: {
      '& .MuiDialog-paper': {
        paddingTop: '60px',
        paddingBottom: '56px',
        width: '600px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        '@media (max-width: 480px)': {
          position: 'fixed',
          bottom: 0,
          margin: 0,
          width: '100%',
          height: '75vh',
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
        fontSize: '18px'
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
      top: '3%',
      right: '3%',
      color: '#828282'
    }
  });
  const dialogStyles = useDialogStyles();

  const { open, closeConfirmDialog, saveUser } = props;
  const [openAlert, setOpenAlert] = useState(false);

  const saveAndClose = () => {
    saveUser();
    handleClose();
    setOpenAlert(true);
  };

  const handleClose = () => {
    closeConfirmDialog();
  };

  const closeAlertDialog = () => {
    setOpenAlert(false);
  };

  return (
    <>
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
          {'Сохранить изменения?'}
          <IconButton className={dialogStyles.iconButton} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>
        <DialogActions className={dialogStyles.actions}>
          <Button className={`${dialogStyles.buttons} ${dialogStyles.buttonOk}`} onClick={saveAndClose}>
            Сохранить
          </Button>
          <Button className={`${dialogStyles.buttons} ${dialogStyles.buttonCancel}`} onClick={handleClose} autoFocus>
            Не сохранять
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog open={openAlert} close={closeAlertDialog}/>
    </>
  );
}
