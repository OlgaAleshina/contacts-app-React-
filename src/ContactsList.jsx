import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ContactsList = (props) => {

    const editContact = () => { };
    const deleteContact = () => { };

    const contactsTable = props.contacts.map(contact => {
        return (<tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td><Button variant="success" onClick={editContact()}>r</Button></td>
            <td><Button variant="danger" onClick={deleteContact()}>X</Button></td>

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