import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../components/Loader";
import ErrorMssg from "../components/ErrorMssg";
import { Container,Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'; 
import FormContainer from '../components/FormContainer';
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import {register} from '../actions/userAction';
import {userLoginAction} from '../actions/userAction';

function RegisterScreen(){
    const [first_name,setFirst_name] = useState();
    const [last_name,setLast_name] = useState();
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [message,setMessage] = useState();
    const [confirmpassword,setConfirmPassword] = useState();

    const query = useLocation();
    const redirect = query.search ? query.search.split('=')[1] : '/' ;

    const userRegister = useSelector(state => state.userRegister);
    console.log(userRegister);
    const {error,loading,userInfo} = userRegister;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(password != confirmpassword){
            setMessage('Password did not matched !!!');
        }else{
            dispatch(register(first_name,last_name,email,username,password));
            // dispatch(userLoginAction(username,password));
            navigate('/login');
        }
    }

    // const navigate = useNavigate();
    // useEffect(()=>{
    //     if(userInfo){
    //         navigate(redirect);
    //     }
    // },[userInfo,redirect,navigate]);

    return(
        <div>
            {loading ? <Loader />
            : error ? <h2>{message}</h2>
            :
            (<FormContainer>
                <h2>SIGN-IN</h2>
                <form onSubmit={submitHandler}>

                    <Form.Group controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        onChange={e => setFirst_name(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        onChange={e => setLast_name(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                        onChange={e => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={e => setUsername(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter Password again"
                        onChange={e => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Button
                    type="submit"
                    variant="success"
                    className="loginbtn"
                    >Register</Button>
                    
                    <Row className="py-3">
                        <Col>
                            Have an Account ? 
                            <Link 
                            className="removelinkunderline"
                            to={'/login'}
                            > Sign-In</Link>
                        </Col>
                    </Row>

                </form>
            </FormContainer>
            )}
        </div>
    );

}
export default RegisterScreen;