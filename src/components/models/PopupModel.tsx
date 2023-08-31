import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface PopupModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  showSaveButton?: boolean;
  onSave?: () => void;
}

const PopupModel: React.FC<PopupModelProps> = ({
  isOpen,
  onClose,
  title,
  content,
  showSaveButton = false,
  onSave,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {showSaveButton && (
          <Button onClick={onSave} color="primary">
            Save
          </Button>
        )}
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupModel;
