import React , { useState }  from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  const trimmedMessage = message.length > 35 ? message.substring(0, 35) + '...' : message;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-12 col-md-4">
      <Link onClick= {handleShow} className='text-decoration-none text-dark'>
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{trimmedMessage}</h4>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
        </div>
      </div>
      </Link>

      <Modal show={show} onHide={handleClose} className="text-center">
        {/* <Modal.Header closeButton className='justify-content-end pb-0 border-0 btn-close'>
        </Modal.Header> */}
        <Modal.Body className='p-4'>
        <button type="button" className="close w-100 text-end" style={{textAlign:'end' , outline:"none"}} onClick={handleClose}>
          <span aria-hidden="true" >&times;</span>
        </button>
          <h5 className="card-text">{message}</h5>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecommendationCard;
