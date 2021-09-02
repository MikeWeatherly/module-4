const answer = 'password';
let user = '';

while (user != answer) {
    user = prompt("What's the password?");

    if (user == answer) {
        alert('Access Granted!');
    } else {
        alert('Please try again')
    }
}
