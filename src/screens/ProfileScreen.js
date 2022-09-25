import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container,Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'; 
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMssg from "../components/ErrorMssg";
import {getUserDetails,updateUserProfile} from '../actions/userAction';

function ProfileScreen(){
    const [first_name,setFirst_name] = useState();
    const [last_name,setLast_name] = useState();
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [message,setMessage] = useState();
    const [confirmpassword,setConfirmPassword] = useState();

    const dispatch = useDispatch();

    // const userDetails = useSelector(state => state.userDetails);
    // const {user} = userDetails;
    // console.log(userDetails);

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const id = 20;
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!userInfo){
    //         navigate('/login');
    //     }else{
    //         if(!user){
    //             dispatch(getUserDetails(id));
    //         }
    //     }
    // })

    const submitHandler = (e)=>{
        e.preventDefault();
    }

    return(


        <Row>
            {/* {loading ? <Loader />
            : error ? <ErrorMssg />
            :
            ( */}
            <Col md={3}>
                <h2>User Profile</h2>
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

                </form>
            </Col>
            {/* )} */}
            <Col md={6}>
                <h2>Orders</h2>
            </Col>
        </Row>
    )
}
export default ProfileScreen;