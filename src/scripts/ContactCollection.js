//This component loads existing contacts from storage, and saves new ones.
    //This module interacts with our API - all fetch calls will be defined here
//Each new contact should have an auto-generated identifier. Fetch calls:
    //getAllContacts (GET)
    //postNewContact (POST)

const contactCollection = {
  getAllContacts() {
    return fetch("http://localhost:8088/contact")
    .then(response => response.json())
  }
}

export default contactCollection