document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('myform');
  const sendmessage = document.getElementById('send');
  const errormessage = document.getElementById('error');

  errormessage.style.display = 'none'
  sendmessage.style.display = 'none'

  form.addEventListener('submit', function(event){
    event.preventDefault();

    errormessage.style.display = 'none'
    sendmessage.style.display = 'none'

    const email = document.getElementById('mail').value.trim();
    const title = document.getElementById('title').value.trim();
    const message = document.getElementById('message').value.trim();

    if( email === '' || title === '' || message === '' ) {
      errormessage.style.display = 'block';
      return;
    }

    // one @, no spaces, and a dot in the domain part
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validEmail) {
      errormessage.style.display = 'block';
      return;
    }

    // there is no backend, so open the visitor's email app with everything filled in
    const body = message + '\n\n' + email;
    window.location.href = 'mailto:zyu.wang@outlook.com'
      + '?subject=' + encodeURIComponent(title)
      + '&body=' + encodeURIComponent(body);

    sendmessage.style.display = 'block';
  });
});
