import React from 'react';
import { Button ,Form, FormGroup, Input } from 'reactstrap';

const Search = ({ search , change}) => {
        return(
            <div className='text-center mt-3 d-flex justify-content-center'>
                <Form inline >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
                        <Input 
                        onChange={change} 
                        type="text" 
                        placeholder="type movie name" 
                        bsSize='lg' />
                    </FormGroup>
                    <Button onClick={search}  size='lg' >Submit</Button>
                </Form>
            </div>

        )
    }
export default Search