function sendEmail() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var subject = document.querySelector('.subject').value;
    var message = document.querySelector('.textarea').value;

    var emailContent = "Name: " + name + "\n" +
                       "Email: " + email + "\n" +
                       "Message: " + message;

    var emailLink = "mailto:moh-mourad@outlook.com" +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(emailContent);

    window.location.href = emailLink;
}