import './styles.css'
import {configGallery} from "../../config-gallery";
import {useState} from "react";
import {Modal, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState('')
  const navigate = useNavigate()

  const handleSelect = (i) => {
    setImage(i)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setImage('')

  }

  return (
    <div className={'gallery-container'}>
      {configGallery.map((i) => <img onClick={()=>handleSelect(i.img)} className={'gallery-card'} src={`/gallery/${i.img}`} alt={`${i.key}`}/>)}
      <div onClick={()=> navigate('/contacts')} className={'buy-button'}>Купить работы</div>
      <Modal
        open={isOpen}
        aria-describedby="modal-modal-description"
      >
          <Box id="modal-modal-description">
            <img className={'modal-card'} src={`/gallery/${image}`} alt={`${image}`}/>
            <div className={'close-button'} onClick={handleClose}/>
          </Box>
      </Modal>
    </div>  )
}

export default Gallery