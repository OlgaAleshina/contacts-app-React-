import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


const ContactsForm = ({ onHandleAdd }) => {
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleInput = (e) => {
        const { id, value } = e.target;
        setContact((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const newContact = {
            id: uuidv4(),
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        };
        onHandleAdd(newContact);
        setContact({
            name: "",
            phone: "",
            email: ""
        });
    };

    return (

        <Form onSubmit={handleAdd}>
            <Form.Group className="justify-content-center" as={Row} controlId="name">

                <Col sm={6}>
                    <Form.Control value={contact.name}
                        onChange={handleInput} placeholder="Enter name" />
                </Col>
            </Form.Group>
            <Form.Group className="justify-content-center" as={Row} controlId="phone">

                <Col sm={6}>
                    <Form.Control value={contact.phone}
                        onChange={handleInput} placeholder="Enter phone" />
                </Col>
            </Form.Group>
            <Form.Group className="justify-content-center" as={Row} controlId="email">

                <Col sm={6}>
                    <Form.Control className="justify-content-center" value={contact.email}
                        onChange={handleInput} type="email" placeholder="Enter email" />
                </Col>
            </Form.Group>

            <Form.Group className="justify-content-center text-center" as={Row}>
                <Col sm={6} >
                    <Button variant="secondary" type="submit">Add</Button>
                </Col>
            </Form.Group>
        </Form>

    )
}

export default ContactsForm;