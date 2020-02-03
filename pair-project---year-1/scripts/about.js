function validateFormData() {
    let valid = true;
    $('.error').remove(); // remove previous error messages

    let form = document.forms['form'];

    let fname = form['fname']
    let lname = form['lname']
    
    if(hasNumber(fname.value)) {
        valid = false;
        $('<div class="message error">First name cannot contain numbers.</div>')
            .insertAfter(fname)
    }
    if(hasNumber(lname.value)) {
        valid = false;
        $('<div class="message error">Last name cannot contain numbers.</div>')
            .insertAfter(lname)
    }
    

    if(valid) form.submit(); // call submit action on form
    
}
// text: String to test
// returns: False - text has no numbers in it / text is undefined
//          True - text has numbers in it
function hasNumber(text) {
    if(!text) return false;

    return /\d/.test(text); // Regex criteria test on text.
}