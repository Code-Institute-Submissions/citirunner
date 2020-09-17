

function sendMail(contactForm){
  emailjs.send("gmail","gymdiscount",{
       "from_name": contactForm.name.value,
   "from_email":contactForm.emailaddress.value
  
})
  .then(
       function (response) {
          
             $("#message").text("Thanks your discount is coming!");
           
},

     function(error) {
           
             $("#message").text(" Sorry!There was an error");
       }

    );

   return false;  // To block from loading a new page
}