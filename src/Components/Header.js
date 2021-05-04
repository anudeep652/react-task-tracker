import React from 'react';
import Button from './Button';
const Header = ({ title,onAdd,showAdd }) => {

    // const onClick = () => {
    //     console.log('clicked');
    // }

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color ={showAdd ? 'red' : 'green'}
                text = {showAdd ? 'close' : "Add a Task"}
                onClick = {onAdd}
            />

        </header>
    );

}

// Header.defaultProps = {
//     title :"Task Tracker",       default props
// }

// Header.PropTypes ={
//     title :PropTypes.string,     //defining prop types
// }

//css in JS
// const headingstyle = {
//     color :'red',
//     backgroundColor :"black",
// }

export default Header;