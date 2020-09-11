//Loading the elements 
$(document).ready(function(){
	
	// select the img element and add click event
	$("img").click(function(){
		//get the src value of image clicked
		 var img=$(this).attr('src');
		 //select img element in modal 
			 $("#show-img").attr('src',img);
			 //show the modal
			 $("#imgmodal").modal('show');
	});
});

