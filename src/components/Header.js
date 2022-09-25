import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { categoryProducts } from "../actions/productCategoryAction";
import CategoryDropDown from "./Category";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ErrorMssg from "./ErrorMssg";
import { logout } from "../actions/userAction";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const productCategoryList = useSelector(state => state.productCategoryList);
    const { error, loading, productCategory } = productCategoryList;
    
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    
    useEffect(()=>{
        dispatch(categoryProducts());
    },[]);
    
    const logoutHandler = ()=>{
        dispatch(logout());
    }
    
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"><strong>GiGa Store</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/cart/">
                        <i className="fas fa-shopping-cart">Cart</i>
                    </Nav.Link>
                    {userInfo 
                    ? 
                    (
                        <NavDropdown title={userInfo.token} id="token">
                            <NavDropdown.Item>
                                <Link to={'/profile'}>Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    )
                    :
                    <Nav.Link href="/login">
                        <i className="fas fa-user">Login</i>
                    </Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
                <div>
                    {loading ? <Loader />
                    : error ? <ErrorMssg />
                    : <CategoryDropDown productCategory = {productCategory} />
                    }
                </div>
            </Container>
        </Navbar>        
    );
}
export default Header;
