import {observer} from "mobx-react-lite";
import React from 'react';
import "./style.scss"



export const Contact = ({contact, deleteContact, putContact}) => {
    return (
        <li className="contact-card">
            <img src={contact.image} alt="" className="contact-card__img" />
            <div className="contact-card__info">
                <div className="contact-card__name">{contact.name_contact}</div>
                <div className="contact-card__phone">{contact.phone}</div>
            </div>
            <div className="contact-card__button">
                <button onClick={() => deleteContact(contact.id_contact)} className="contact-card__close-x"></button>
                {contact.is_favorite && 
                    <button onClick={() => putContact(contact)} className="contact-card__star__true"></button>
                }
                {!contact.is_favorite && 
                    <button onClick={() => putContact(contact)} className="contact-card__star__false"></button>
                }
            </div>
        </li>
    );
};
  
export default observer(Contact);