//This component loads existing contacts from storage, and saves new ones.
    //This module interacts with our API - all fetch calls will be defined here
//Each new contact should have an auto-generated identifier. Fetch calls:
    //getAllContacts (GET)
    //postNewContact (POST)

const contactCollection = {
  getAllContacts() {
    return fetch("http://localhost:8088/contacts")
    .then(response => response.json())
  },

  postNewContact(newContactToSave) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    })
  }
}


export default contactCollection