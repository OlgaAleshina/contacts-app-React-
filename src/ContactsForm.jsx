import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';



const ContactsForm = ({ fName, fPhone, fEmail }) => {
    const handleChange = () => { };

    const handleAdd = (event) => {
        event.preventDefault();
    };


    return (
        <div>

            <Form onSubmit={handleAdd}>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm={2}>
                        Name
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={fName}
                            onChange={handleChange} placeholder="Enter name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPhone">
                    <Form.Label column sm={2}>
                        Phone
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={fPhone}
                            onChange={handleChange} placeholder="Enter phone" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formEmail">
                    <Form.Label column sm={2}>
                        Email
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={fEmail}
                            onChange={handleChange} type="email" placeholder="Enter email" />
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