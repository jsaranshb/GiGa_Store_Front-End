import React, {useEffect} from "react"
import { Link, useParams,useNavigate,useLocation } from "react-router-dom";
import { Container,Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'; 
import { addToCart, removeFromCart } from "../actions/cartAction";
import {useDispatch,useSelector} from 'react-redux';

function CartScreen() {
  const {id} = useParams();
  const query = useLocation();
  const qty = query.search ? Number(query.search.split('=')[1]) : 1 ;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty));
    }
  },[dispatch,id,qty]);

  const removeFromCartHandler = (id)=>{
    dispatch(removeFromCart(id));
  }

  const checkoutHandler = ()=>{
    console.log('proceed to checkout');
    navigate('/checkout/?redirect=shipping');
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <h2>Your cart is empty <Link className="removelinkunderline" to='/'>Go Back</Link></h2>
        ) : (
          <ListGroup varient='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product_id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product_id}`}>{item.name}</Link>
                  </Col>
                  <Col md={4}>
                    <h3>Rs.{item.price}</h3>
                  </Col>
                  <Col md={2}>
                    <select
                    value={item.qty}
                    onChange={e=>dispatch(addToCart(item.product_id, Number(e.target.value)))}
                    >
                      {[...Array(item.countInStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}> {x+1} </option>
                      ))}
                    </select>
                  </Col>
                  <Col md={1}>
                    <Button
                    type="button"
                    variant="danger"
                    onClick={()=>{removeFromCartHandler(item.product_id)}}
                    ><i className="fa-solid fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} className="sidetotal">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4 className="pricedetails">Price Details</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Subtotal({cartItems.reduce((acc,item)=> acc+item.qty, 0)} items) 
                </Col>
                <Col>
                  <h6>Rs.{cartItems.reduce((acc,item)=> acc+item.price*item.qty, 0)}</h6>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Discount
                </Col>
                <Col>N/A</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Delivery Charges
                </Col>
                <Col>N/A</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5>Total Amount</h5>
                </Col>
                <Col><h5>Rs.{cartItems.reduce((acc,item)=> acc+item.price*item.qty, 0)}</h5></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="d-grid gap-2">
            <Button 
            type="button"
            variant="warning" 
            disabled={cartItems.length == 0}
            onClick={checkoutHandler}
            ><strong>Proceed To Checkout</strong>
            </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
export default CartScreen;