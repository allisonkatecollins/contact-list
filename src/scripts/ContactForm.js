//when filled out and a submit button is pressed, adds a new contact to storage
//should import the contactCollection component.
import contactCollection from "./contactCollection"
import contactList from "./contactList"

const contactForm = {

  createAndAppendForm () {
    //1. Build HTML form - use createElement
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add a contact to your contact list"

    //NAME
    let contactNameField = document.createElement("fieldset")

    let contactNameLabel = document.createElement("label")
    contactNameLabel.textContent = "Name"
    contactNameLabel.setAttribute("for", "contact__name")
    let contactNameInput = document.createElement("input")
    contactNameInput.setAttribute("id", "contact__name")

    contactNameField.appendChild(contactNameLabel)
    contactNameField.appendChild(contactNameInput)
  
    //NUMBER
    let contactNumberField = document.createElement("fieldset")

    let contactNumberLabel = document.createElement("label")
    contactNumberLabel.textContent = "Number"
    contactNumberLabel.setAttribute("for", "contact__number")
    let contactNumberInput = document.createElement("input")
    contactNumberInput.setAttribute("id", "contact__number")
    contactNumberInput.setAttribute("name", "contact__number")

    contactNumberField.appendChild(contactNumberLabel)
    contactNumberField.appendChild(contactNumberInput)

    //ADDRESS
    let contactAddressField = document.createElement("fieldset")

    let contactAddressLabel = document.createElement("label")
    contactAddressLabel.textContent = "Address"
    contactAddressLabel.setAttribute("for", "contact__address")
    let contactAddressInput = document.createElement("input")
    contactAddressInput.setAttribute("id", "contact__address")
    contactAddressInput.setAttribute("name", "contact__address")

    contactAddressField.appendChild(contactAddressLabel)
    contactAddressField.appendChild(contactAddressInput)

    //BUTTON
    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Contact"
    submitButton.setAttribute("class", "contact__save")

    //2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewContact)

    //3. Append HTML form to DOM
    //--added article element to index.html with the class "form"
    let contactFormFragment = document.createDocumentFragment()
    contactFormFragment.appendChild(formHeader)
    contactFormFragment.appendChild(contactNameField)
    contactFormFragment.appendChild(contactNumberField)
    contactFormFragment.appendChild(contactAddressField)
    contactFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(contactFormFragment)

  },

  //4. Function that executes when event happens
  //fridgify had event as an argument below but grunt wouldn't run as it wasn't
  //defined elsewhere; removed it and grunt runs now
  handleAddNewContact () {
    //a. get user input
    let inputContactName = document.querySelector("#contact__name").value
    let inputContactNumber = document.querySelector("#contact__number").value
    let inputContactAddress = document.querySelector("#contact__address").value

    //b. create new object with same structure as before - name, number, address
    let newContact = {
      name: inputContactName,
      number: inputContactNumber,
      address: inputContactAddress
    }

    //c. call the method (postNewContact)
    //--fetch request: POST to the API and pass it the object we just created
    //--called contactCollection at top of this module for this step
    contactCollection.postNewContact(newContact)
    //grunt wouldn't run until i console logged response
    .then(response => {
      contactList.listify()
      console.log(response)
    })
  }
}

export default contactForm