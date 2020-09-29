import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const ContactsSearch = ({ onHandleSearch }) => {

    const [searchName, setSearchName] = useState(" ");
    //const searchName = "";
    const handleChange = () => { };

    const handleSearch = () => {
        onHandleSearch();
    }

    return (
        <InputGroup className="mb-3 col-6">
            <FormControl
                placeholder="Search by name"
                aria-describedby="basic-addon2"
                value={searchName}
                onChange={handleChange} />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
            </InputGroup.Append>
        </InputGroup>)
};

export default ContactsSearch;