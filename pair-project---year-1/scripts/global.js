// Navigate to the specified html file.
// page: name of the html file without extension
function navigateTo(page) {
    if(!page) {
        console.error('No location defined.');
        return;
    }
    location.href = `./${page}.html`
}