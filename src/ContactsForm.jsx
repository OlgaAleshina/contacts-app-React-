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
        <div>

            <Form onSubmit={handleAdd}>
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm={2}>
                        Name
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={contact.name}
                            onChange={handleInput} placeholder="Enter name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm={2}>
                        Phone
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={contact.phone}
                            onChange={handleInput} placeholder="Enter phone" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={2}>
                        Email
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={contact.email}
                            onChange={handleInput} type="email" placeholder="Enter email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="secondary" type="submit">Add</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ContactsForm;