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
