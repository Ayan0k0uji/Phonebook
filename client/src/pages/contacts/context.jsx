import { createContext } from "react";

var name_contact, phone, image, is_favorite;
export const ContactsSearchContext = createContext({
    name_contact,
    phone,
    image,
    is_favorite
});

