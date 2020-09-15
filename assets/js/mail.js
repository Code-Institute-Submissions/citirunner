const notificationElement = document.querySelector("#message");

function sendMail(contactForm){
  emailjs.send("gmail","gymdiscount",{
       "from_name": contactForm.name.value,
   "from_email":contactForm.emailaddress.value
  
})
  .then(
       function (response) {
            alert("SUCCESS", response);

   }

        },
        function(error) {
            alert("FAILED", error);
       }

    );

   return false;  // To block from loading a new page
}