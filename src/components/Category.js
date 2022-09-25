import React from "react"
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CategoryDropDown(props) {
    const data = props.productCategory;
    const navigate = useNavigate();
    const categoryProductListHandler = (id)=>{
        navigate(`/category/${id}`);
        
    }
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success">
                Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/">All</Dropdown.Item>
                {data.map(category=>(
                    <div key = {category.id}>
                        <Dropdown.Item 
                        onClick={()=>{categoryProductListHandler(category.id)}}
                        >{category.name}
                        </Dropdown.Item>
                    </div>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default CategoryDropDown;