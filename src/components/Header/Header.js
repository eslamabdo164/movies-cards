import React from 'react';
import {Navbar} from 'reactstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return(
        <div className='cus_nav'>
           <Navbar color="dark text-center"  expand="md">
                <p className='text-white display-4 mx-auto' href="/">
                <FontAwesomeIcon className='mr-3' icon="film" />
                Movies Cards</p>
             </Navbar>
        </div>
    )
}

export default Header