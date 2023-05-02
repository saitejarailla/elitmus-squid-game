import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

function StaticExample(props) {

    const navigate=useNavigate();
    function gotoHome() {
        navigate("/");
    }
    function retry() {
        window.location.reload(false);

    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog className=''>
        <Modal.Body>
            <img className='d-block mx-auto' src='/images/death.gif' alt='no img' style={{width:"60%"}} ></img>
          <h3 className='text-center'>You died</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={()=>gotoHome()}>Goto Home</Button>
          <Button variant="success" onClick={()=>retry()}>Retry</Button>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;