import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const BUTTONS = 'Options';


function Dropdown(props) {
    return (
        <DropdownButton 
        bsStyle={props.title.toLowerCase()}
        title = {props.title}
        key = {props.i}
        >
        <MenuItem eventKey="1" multi={true} onClick={props.onClick} >Pokemon</MenuItem>
        <MenuItem eventKey="2" multi={true} onClick={props.onClick} >Movies</MenuItem>
        <MenuItem eventKey="3" multi={true} onClick={props.onClick} >Weather</MenuItem>

        </DropdownButton>
    );
}


export default Dropdown; 