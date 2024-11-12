import Contact from "./Contact";

const Item = ({ children }) => {
  <li>{children}</li>;
};

const ContactList = ({ Contacts }) => {
  return (
    <ul>
      {Contacts.map((contact) => {
        return (
          <Item key={contact.id}>
            {Contact({ name: contact.name, number: contact.number })}
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
