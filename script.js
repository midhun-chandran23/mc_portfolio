$(document).ready(function(){
    $("#signup").validate({
       rules:{
            name:{
             required:true
            },

        email:{
            required:true,
            nospace:true,
            email:true
        },
        message:{
            required:true
        }
        
       }
    })
});