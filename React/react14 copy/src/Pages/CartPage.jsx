import {useState} from 'react'
import Card from '../COMPONENT/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartPage = () => {
 
const [open , setOpen] = useState(false)

const handleShow = ()=>{
  setOpen(true)
}

const handleClose = ()=>{
  setOpen(false)
}


  
  return (
    <div>

   <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>


<Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default CartPage