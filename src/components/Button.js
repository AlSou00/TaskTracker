import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Button = (props) => {
    return (
        <div className="d-flex flex-row" style={{justifyContent: 'center'}}>
            <button onClick={props.onClick}className="btn btn-dark btn-lg   ">               
                {props.text}&nbsp; 
                {props.show ? <FaChevronUp style={{marginButtom:'20px'}}/> : <FaChevronDown/>}
            </button>
        </div>
    )

}

export default Button
