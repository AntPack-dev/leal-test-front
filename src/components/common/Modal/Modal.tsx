import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ModalComponentStyle from '../../../styles/components/common/Modal/ModalComponentStyle';

const ModalComponent = ({ data }: { data: any }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: data.height || 'auto',
    width: data.width,
    maxWidth: data.maxWidth,
    bgcolor: data.style.bg || '#000',
    color: data.style.color || '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 1000000000,
    minHeight: '200px',
    overflow: 'auto',
  };

  return (
    <div className={ModalComponentStyle}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={data.open}
        onClose={data.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={data.open}>
          <Box sx={style}>
            <div className='_contentForm'>
              {data.component}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )

}


export default ModalComponent;