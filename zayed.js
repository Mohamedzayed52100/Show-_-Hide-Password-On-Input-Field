var myinput = document.getElementById('password'),
    mybutton = document.getElementById('button');



mybutton.onclick = function() {


    if (myinput.getAttribute('type') == 'password') {
        myinput.setAttribute('type', 'text');

    } else if (myinput.getAttribute('type') == 'text') {
        myinput.setAttribute('type', 'password');

    }
}