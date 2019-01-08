//displays all contacts
//import the contact.js component and the contactCollection.js component

// 1. send fetch to getAllContacts()
        //This is the fetch call to the API (contactCollection module holds the API)
    // 2. loop over [] contactBuilder for each item
        //(NOTE: contactBuilder is the function in contact.js)
    //3. Append to DOM

import contactCollection from "./contactCollection"
import contact from "./contact"

const contactList = {
  listify(){
    //1. Get data
    //the getAllContacts method will do a fetch and return a promise
    //--return data from API
    contactCollection.getAllContacts()
    //.then here refers to fetch call in contactCollection.js
    .then(allContacts => {
      let contactDocFragment = document.createDocumentFragment();
      
      //2. iterate over data and build HTML for each item
      allContacts.forEach(contactItem => {
        let contactHTML = contact.contactBuilder(contactItem)
        contactDocFragment.appendChild(contactHTML)
      })

      //3. Append HTML to the DOM
      let outputArticle = document.querySelector(".output")

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(contactDocFragment)

    })
  }
}

export default contactList