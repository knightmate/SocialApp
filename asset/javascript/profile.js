 

 


console.log("ITs the javscript file");
 


//document.getElementById('submitpost').addEventListener('click', post);
 
 var f=document.getElementById('newpostform').addEventListener('submit',function(e){

    var newform=$('#newpostform');
         
    e.preventDefault();

   $.ajax({
  
    type:'post',
    url:'/post',
    data:newform.serialize(),
    success:function(data){

        console.log("data received"+data.data.user);
             let newPost= createpost(data.data.post,data.data.user);

             $('#post-list-container>ul').prepend(newPost);

       }


    });

});


let createpost=function(post, user)
{


  //  console.log(post);
     return $(`<ul>
 

     <li id='post-${post.id}' style="margin-top: 20px;"  > 
     
     ${post.content}<br> by=${user.email}

       <a href="/del/?id=${post.id}"    >  
           <button id="del" style="font-size: larger; color: red;" >*</button>
       </a>

     <div id="comment">
        <form action="comment" method="post" style="margin-left: 10px;">
         <input type="text" name='content' placeholder="AddComment">
         <input type="hidden" name='post' value="${post.id}"  >
         <input type="submit" value="Add Comment">
        </form>
     </div>

    
   </li>


   <ul id=${post.id}>
               
       
  </ul>`
  );


}


//       var xml=new XMLHttpRequest();

//      var s= document.getElementById('newpostform')
//       console.log(s.content);
//       xml.open('post', '/post');
     
//    //   xml.setRequestHeader( "Content-Type", "application/json" );
//       xml.onload=function()
//       {

//         console.log("data recieved"+xml.response);

 


//       };
 
      
//       var newform=$('#newpostform');
//        newform.serialize();
//       xml.send(newform);


 

 



 
 

// function post()
// {
 
 
// console.log("hey hi,its me");

  
 
//     console.log("ohk");
//      var x=new  XMLHttpRequest();

//       x.open('post', "/post");
//       x.onload=function()
//       {

//        console.log("obj deelteed bro");
      

//       };
//       x.send();


// }
 
         

 
