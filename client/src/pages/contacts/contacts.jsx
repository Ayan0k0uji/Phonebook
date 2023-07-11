import {observer} from "mobx-react-lite";
import axios from "axios";
import React, {useState, useEffect, useMemo } from 'react';
import "./style.scss";
import Contact from "../../components/contact/contact";
import SearchBar from "../../components/search/search";


export const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    
    async function deleteContact(id) {
        await axios.delete(`http://localhost:3001/contact/${id}`);
        getContacts();
    }

    async function putContact(contact) {
        await axios.put(`http://localhost:3001/contact/${contact.id_contact}`, {
            id_contact: contact.id_contact,
            is_favorite: !contact.is_favorite
        });
        getContacts();
    }


    const searchedContact = useMemo(() => {
        return contacts.filter(contact => contact.name_contact.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, contacts])

    useEffect(() => {
        getContacts();
    }, []);

    async function getContacts() {
        const response = await axios.get('http://localhost:3001/contact');
        setContacts(response.data.data);
    }

    return (
        <div>
            <div className="section">
                <div className={'col-8'}>
                    <SearchBar
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)
                    }/>
                </div>
                <ul className="contacts" >
                    {searchedContact.map((contact) =>
                        <Contact contact={contact} deleteContact={deleteContact} putContact={putContact}/>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default observer(Contacts);