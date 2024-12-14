import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface ModalProps {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, title, children, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-dialog-title">
      <DialogTitle id="modal-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
