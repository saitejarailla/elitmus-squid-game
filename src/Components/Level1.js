import {useNavigate} from 'react-router-dom';
import Cards from './level-1/Cards'

function Level1(props) {
    const navigate=useNavigate();
    function nextLevel() {
        props.Up();
        navigate("/");
    }
    return ( 
        <div className='lg-col-8'>
            <Cards Up={props.Up} />            
        </div>
     );
}

export default Level1;