import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const ContactsSearch = () => {
    const searchName = "";
    const handleChange = () => { };

    return (
        <InputGroup className="mb-3 col-6">
            <FormControl
                placeholder="Search by name"
                aria-describedby="basic-addon2"
                value={searchName}
                onChange={handleChange} />
            <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>)
};

export default ContactsSearch;