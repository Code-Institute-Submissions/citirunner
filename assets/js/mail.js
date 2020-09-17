

function sendMail(contactForm){
  emailjs.send("gmail","gymdiscount",{
       "from_name": contactForm.name.value,
   "from_email":contactForm.emailaddress.value
  
})
  .then(
       function (response) {
              alert("Thank you, your discount is on its way!", response);
            
           
},

     function(error) {
            alert("Sorry, There was an error!", error);
       }

    );

   return false;  // To block from loading a new page
}