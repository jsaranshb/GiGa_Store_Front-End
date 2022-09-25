import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div>
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="primary" />
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="secondary" />
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="success" />
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="danger" />
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="warning" />
            <Spinner style={{height:'100px',width:'100px',margin:'auto'}} animation="grow" variant="info" />
        </div>
    );
  }
export default Loader;