import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ContactsList = ({ contacts, onHandleDelete, onHandleEdit }) => {
    const [isEditable, setIsEditable] = setState(false);

    const editContact = (id) => {
        onHandleEdit(id)
    };
    const deleteContact = (id) => {
        onHandleDelete(id);
    };

    const contactsTable = contacts.map((contact, i = 1) => {
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
    })
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