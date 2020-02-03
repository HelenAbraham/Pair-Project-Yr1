
// Create comment on the comments section
function sendComment() {
    let name = $('#name')    
    let comment = $('#comment')

    // Simple validation
    if(name[0].value == "") {
        console.error('No name given');
        return;
    }
    else if (comment[0].value == "") {
        console.error('No comment given');
        return;
    }
    // JQuery DOM manipulation
    let $commentingArea = $('#comments-area')
    let date = new Date();
    let $comment = $('<div class=comment></div>')
    let $feedbacker = $(`<h3 class=feedbacker>${name[0].value}</h3>`)
    let $date = $(`<p class=date>${date}</p>`)
    let $feedback = $(`<p class=feedback>${comment[0].value}</p>`)

    $comment.append($feedbacker)
    $comment.append($date)
    $comment.append($feedback)
    $commentingArea.append($comment)
    console.log('Hi'); // :)
    
}