import React from 'react';
import { Button ,Form, FormGroup, Input } from 'reactstrap';

const Search = ({ search , change}) => {
        return(
            <div className='text-center mt-2'>
                <Form inline >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input onChange={change} type="text"  id="searchField" placeholder="type movie name" />
                    </FormGroup>
                    <Button onClick={search} >Submit</Button>
                </Form>
            </div>

        )
    }
export default Search