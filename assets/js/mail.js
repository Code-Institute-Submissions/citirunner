

function sendMail(contactForm){
  emailjs.send("gmail","gymdiscount",{
       "from_name": contactForm.name.value,
   "from_email":contactForm.emailaddress.value
  
})
  .then(
       function (response) {
            //   alert("Thank you, your discount is on its way!", response);
             $("#message").text("Thanks your discount is coming!");
           
},

     function(error) {
            // alert("Sorry, There was an error!", error);
             $("#message").text(" Sorry!There was an error");
       }

    );

   return false;  // To block from loading a new page
}