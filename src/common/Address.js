

class Address{
    constructor(firstName, lastName, email, phoneNumbers, description) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email=email;
    this.phoneNumbers=phoneNumbers;
    this.description=description;
    }

}
 
// now we export the class, so other modules can create Address objects
export default Address;