import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import EditIcon from "../assets/EditIcon.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";
import TrashIcon from "../assets/TrashIcon.svg";

const ContactsList = ({ contacts, onDeleteContact, onEditContact }) => {
    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
    });
    const [editedContact, setEditedContact] = useState({
        id: "",
        name: "",
        phone: "",
        email: ""
    });
    const clearInputs = () => {
        setEditedContact({
            id: "",
            name: "",
            phone: "",
            email: ""
        });
    };
    const handleInput = (e) => {
        const { id, value } = e.target;
        setEditedContact((prevState) => ({
            ...prevState,

            [id]: value
        }));
    };


    const editContact = (id) => {
        setInEditMode({
            status: true,
            rowKey: id
        });
    };

    const cancelEdit = () => {
        setInEditMode({
            status: false,
            rowKey: null
        });
        clearInputs();
    };

    const deleteContact = (id) => {
        onDeleteContact(id);
    };

    const saveEdit = (id) => {
        const savedEditedContact = {
            id: id,
            name: editedContact.name,
            phone: editedContact.phone,
            email: editedContact.email
        };
        onEditContact(savedEditedContact);
        setInEditMode({
            status: false,
            rowKey: null
        });
        clearInputs();
    };

    const staticCells = (contact) => {
        return (
            <>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                    <Button variant="link" onClick={() => editContact(contact.id)}>
                        <img src={EditIcon} alt="edit" />
                    </Button>
                    <Button variant="link" onClick={() => deleteContact(contact.id)}>
                        <img src={TrashIcon} alt="delete" />
                    </Button>
                </td>
            </>
        );
    };
    const editableCells = (contact) => {
        return (
            <>
                <td>
                    <Form.Group as={Row} controlId="name">
                        <Form.Control
                            value={editedContact.name}
                            onChange={handleInput}
                            placeholder={contact.name}
                        />
                    </Form.Group>
                </td>
                <td>
                    <Form.Group as={Row} controlId="phone">
                        <Form.Control
                            value={editedContact.phone}
                            onChange={handleInput}
                            placeholder={contact.phone}
                        />
                    </Form.Group>
                </td>
                <td>
                    <Form.Group as={Row} controlId="email">
                        <Form.Control
                            value={editedContact.email}
                            onChange={handleInput}
                            placeholder={contact.email}
                        />
                    </Form.Group>
                </td>
                <td className="button-cell">
                    <Button variant="link" onClick={() => saveEdit(contact.id)}>
                        save
              </Button>
                    <Button variant="link" onClick={cancelEdit}>
                        <img src={DeleteIcon} alt="delete" />
                    </Button>
                </td>
            </>
        );
    };

    const contactsTable = contacts.map((contact, i = 1) => {
        i++;
        return (
            <tr key={contact.id}>
                <td>{i}</td>
                {inEditMode.status && inEditMode.rowKey === contact.id
                    ? editableCells(contact)
                    : staticCells(contact)}
            </tr>
        );
    });

    /*const contactsTable = contacts.map((contact, i = 1) => {
        i++;
        //make table responsive
        return (<tr key={contact.id}>
            <td>{i}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td><Button variant="success" onClick={() => editContact(contact.id)}>r</Button></td>
            <td><Button variant="danger" onClick={() => deleteContact(contact.id)}>X</Button></td>

        </tr>)
    })*/
    return (
        <section>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Telephone</th>
                        <th> E-mail</th>
                        <th colSpan="2" ></th>
                    </tr>
                </thead>
                <tbody>
                    {contactsTable}
                </tbody>
            </Table>
        </section>
    )
}

export default ContactsList;