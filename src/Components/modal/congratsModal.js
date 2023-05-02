import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

function StaticExample(props) {

    const navigate=useNavigate();
    function nextLevel() {
        props.Up();
        navigate("/");
    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog className=''>
        <Modal.Body>
            <img className='d-block mx-auto' src='/images/trophy.png' alt='no img' style={{width:"60%"}} ></img>
          <h3 className='text-center'>Congratulations you passed this level.</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={()=>nextLevel()}>Next level</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;