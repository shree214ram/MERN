const findIndex = this.state.sortStae.findIndex(obj=> {
    console.log(obj.Field,'obj.Field');
    console.log(event.sort.Field,'event.sort.Field');
    return obj.Field === event.sort.Field
})
https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript


function isValidEmail(input,domain){
 alert(new RegExp("(?=.*@)(?!.*"+domain+").*").test(input));
}
isValidEmail("hi@gmail.com","example");

-----KAMINI WORKJAVASCRIPT VALIDATION---
    function solution() {
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const company_name = document.getElementById("company_name").value;
    const phone = document.getElementById("phone").value;
    const type_person = document.getElementById("type_person").checked;
    const type_company = document.getElementById("type_company").checked;
    if (type_person) {
        if (first_name === "" || first_name === null) {
            console.log("please enter a correct first name");
            return false;
        }
        if (last_name === "" || last_name === null) {
            console.log("please enter a correct last name");
            return false;
        }
        var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


        if (email === "" || email === null) {
            console.log("please enter a email");
            return false;
        }
        else {
            if (email !== "" && email !== null && email.match(validEmail)) {
                console.log("valid email");
            }
            else {
                console.log("please enter a valid email");
                return false;
            }
        }
    }

    ///For company Checked
    if (type_company) {
        if (company_name === "" || company_name === null) {
            console.log("please enter a correct company name");
            return false;
        }
        if (phone === "" || phone === null) {
            console.log("please enter a  Phone number");
            return false;
        } else {
            if (phone.length < 11) {
                console.log("please enter a correct Phone number");
                return false;
            }

        }

    }

    return true;
}

