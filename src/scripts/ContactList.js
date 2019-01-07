//displays all contacts
//import the contact.js component and the contactCollection.js component

// 1. send fetch to getAllContacts()
        //This is the fetch call to the API (contactCollection module holds the API)
    // 2. loop over [] contactBuilder for each item
        //(NOTE: contactBuilder is the function in contact.js)
    //3. Append to DOM

import contactCollection from "./contactCollection";
import contact from "./contact"

const contactList = {
  listify(){
    contactCollection.getAllContacts()
    .then(allContacts => {
      let contactDocFragment = document.createDocumentFragment();
      allContacts.forEach(contactItem => {
        let contactHTML = contact.contactBuilder(contactItem)
        contactDocFragment.appendChild(contactHTML)
      })

      let outputArticle = document.querySelector(".output")
      outputArticle.appendChild(contactDocFragment)

    })
  }
}

export default contactList