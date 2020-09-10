import React from 'react'
import {InputGroup, FormControl } from 'react-bootstrap'

function SearchBox(props) {
    return (
        <div>
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="large" aria-describedby="inputGroup-sizing-sm" onChange={props.handleSearchInput} placeholder={props.placeholder}/>
            </InputGroup>
            <br />
        </div>
    )
}

export default SearchBox;