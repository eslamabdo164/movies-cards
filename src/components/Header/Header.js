import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
const Header = () => {
    return(
        <div className=''>
           <Navbar color="dark text-center" light expand="md">
                <NavbarBrand className='text-white mx-auto' href="/">Movies Cards</NavbarBrand>
             </Navbar>
        </div>
    )
}

export default Header