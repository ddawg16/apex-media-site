document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = 'Apex Media inquiry from ' + data.get('name');
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:contact@apexmedia.space?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
