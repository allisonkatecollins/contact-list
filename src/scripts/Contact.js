//displays a person's name, phone number, and address

//This component will take this...
    //contactBuilder()
    // {
    //     name:
    //     number:
    //     address:
    // }
    //...and convert it to HTML:
    // <article>
    //     <h3>[name]</h3>
    //     <p>[number]</p>
    //     <p>[address]</p>
    // </article>

    //Given a single food object, this component builds out the HTML and returns it
    //This HTML is then returned to the point from where this method was called
const contact = {
  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article")

    let contactName = document.createElement("h3")
    contactName.textContent = contactObject.name
  
    let contactNumber = document.createElement("p")
    contactNumber.textContent = contactObject.number

    let contactAddress = document.createElement("p")
    contactAddress.textContent = contactObject.address

    contactArticle.appendChild(contactName)
    contactArticle.appendChild(contactNumber)
    contactArticle.appendChild(contactAddress)

    return contactArticle
  }
}

export default contact