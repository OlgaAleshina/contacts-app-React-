import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import SearchIcon from "../assets/SearchIcon.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";

const ContactsSearch = ({ onHandleSearch, onHandleSearchedTable }) => {

    const [name, setName] = useState("");

    const handleInput = (e) => {
        const { value } = e.target;
        setName(value);
    };

    //
    const handleSearch = () => {
        onHandleSearch(name);
        onHandleSearchedTable(true);
    };

    //clear search field
    const handleClear = () => {
        setName("");
        onHandleSearchedTable(false);
    };

    return (
        <InputGroup className="mb-3 col-md-4 col-sm-12">
            <FormControl
                placeholder="Search by name"
                aria-describedby="basic-addon2"
                value={name}
                onChange={handleInput} />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleClear}>
                    <img src={DeleteIcon} alt="delete" />
                </Button>
                <Button variant="outline-secondary" onClick={handleSearch}>
                    <img src={SearchIcon} alt="search" />
                </Button>
            </InputGroup.Append>
        </InputGroup>)
};

export default ContactsSearch;