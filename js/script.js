$('#hire').click(function(){
  var recruiter_name = document.getElementById('yourname').value;
  var recruiter_mail = document.getElementById('email').value;
  var recruiter_contact = document.getElementById('contact').value;
  var recruiter_website = document.getElementById('website').value;
  var domain_web = document.getElementById('web').checked;
  var domain_other = document.getElementById('core').checked;
  var feedback = document.getElementById('feedback').value;
  var subject = 'I '+recruiter_name+' want to HIRE you';
  var body = 'Recruiter Name : '+recruiter_name+'%0ARecruiter Mail :'+recruiter_mail+
              '%0ARecruiter Website :'+recruiter_website+
              '%0AWeb Development : '+domain_web+'%0ACore works : '+domain_other+
              '%0AYour Feedback : '+feedback;
    window.location.href='mailto:nishantbhushan05@gmail.com?subject='+subject+'&body='+body;
  })
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });