import React, {useState,useEffect} from "react"
import { Link,useNavigate,useLocation } from "react-router-dom";
import { Container,Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'; 
import { addToCart, removeFromCart } from "../actions/cartAction";
import {useDispatch,useSelector} from 'react-redux';
import { userLoginAction } from "../actions/userAction";
import Loader from '../components/Loader';
import ErrorMssg from "../components/ErrorMssg";
import FormContainer from '../components/FormContainer';

export const LoginScreen = ()=>{
    const [fullname, setFullname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const query = useLocation();
    const redirect = query.search ? query.search.split('=')[1] : '/' ;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        }
    },[userInfo,redirect,navigate]);

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(userLoginAction(username,password));
    }

    return(
        <div>
            {loading ? <Loader />
            : error ? <ErrorMssg />
            :
            (<FormContainer>
                <h2>SIGN-IN</h2>
                <form onSubmit={submitHandler}>

                    <Form.Group controlId="fullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Full Name ..."
                        onChange={e => setFullname(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Username ..."
                        onChange={e => setUsername(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter Password ..."
                        onChange={e => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Button
                    type="submit"
                    variant="success"
                    className="loginbtn"
                    >Sign In</Button>
                    
                    <Row className="py-3">
                        <Col>
                            New Costumer ? 
                            <Link 
                            className="removelinkunderline"
                            to={redirect ? `/register?redirect=${redirect}` : '/register'}
                            > Register</Link>
                        </Col>
                    </Row>

                </form>
            </FormContainer>
            )}
        </div>
    )
}
