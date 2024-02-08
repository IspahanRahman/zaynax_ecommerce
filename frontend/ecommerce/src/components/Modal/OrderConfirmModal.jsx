import * as React from 'react';
import {Box, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Check} from '@mui/icons-material'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '1px solid #EEEEE',
  boxShadow: 24,
  borderRadius:"10px",
  p: 4,
};

export default function OrderConfirmModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            backgroundColor:'black',
            borderRadius:"50%",
            height:"25px",
            width:"25px"
          }}>
            <Check sx={{color:"#fff"}}/>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your order placed successfully.
          </Typography>
          <Button id="modal-modal-description" sx={{ mt: 2,textTransform:'capitalize',backgroundColor:"yellow",borderRadius:50 }}>
           Go to admin panel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}