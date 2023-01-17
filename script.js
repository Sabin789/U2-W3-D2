// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001b7ea81c34afa456f87dc53e6f333cd80');

const mainQuery="Ocean"
const secondaryQuery="People"
function getData(){
 fetch(`https://api.pexels.com/v1/search?query=${mainQuery}`,{
    method:"GET",
    headers:{
        "Authorization":"563492ad6f91700001000001b7ea81c34afa456f87dc53e6f333cd80"
    }
 })
 .then((data)=>{
    return data.json()
})
.then((json)=>{
  console.log(json)

// let svg=document.querySelectorAll("svg")
let card=document.querySelectorAll(".col-md-4")

let photos=json.photos
for(i=0;i<photos.length;i++){
 let img=photos[i]
 console.log(img.src.large)
 card[i].innerHTML=`
 <div class="col-md-4">
 <div class="card mb-4 shadow-sm">
 <img src="${img.src.large}" alt="">
   <div class="card-body">
     <p class="card-text">
       This is a wider card with supporting text below as a natural
       lead-in to additional content. This content is a little bit
       longer.
     </p>
     <div
       class="d-flex justify-content-between align-items-center"
     >
       <div class="btn-group">
         <button
           type="button"
           class="btn btn-sm btn-outline-secondary"
         >
           View
         </button>
         <button
           type="button"
           class="btn btn-sm btn-outline-secondary"
         >
           Edit
         </button>
       </div>
       <small class="text-muted">id: ${img.id}</small>
     </div>
   </div>
 </div>
</div>
 `
   
}
})
.catch((err)=>{
    console.log(err)
    alert(err)

})
}
function getData2(){
    fetch(`https://api.pexels.com/v1/search?query=${secondaryQuery}`,{
       method:"GET",
       headers:{
           "Authorization":"563492ad6f91700001000001b7ea81c34afa456f87dc53e6f333cd80"
       }
    })
    .then((data)=>{
       return data.json()
   })
   .then((json)=>{
     console.log(json)
     let card=document.querySelectorAll(".col-md-4")

let photos=json.photos
for(i=0;i<photos.length;i++){
 let img=photos[i]
 console.log(img.src.large)
 card[i].innerHTML=`
 <div class="col-md-4">
 <div class="card mb-4 shadow-sm">
 <img src="${img.src.large}" alt="">
   <div class="card-body">
     <p class="card-text">
       This is a wider card with supporting text below as a natural
       lead-in to additional content. This content is a little bit
       longer.
     </p>
     <div
       class="d-flex justify-content-between align-items-center"
     >
       <div class="btn-group">
         <button
           type="button"
           class="btn btn-sm btn-outline-secondary"
         >
           View
         </button>
         <button
           type="button"
           class="btn btn-sm btn-outline-secondary"
         >
           Edit
         </button>
       </div>
       <small class="text-muted">id: ${img.id}</small>
     </div>
   </div>
 </div>
</div>
 `
   
}
   })
   .catch((err)=>{
       console.log(err)
       alert(err)
   })
   }
 
let val=""
  
   let text=document.getElementById('searchInput')
  let btn=document.getElementById("text")
  text.addEventListener("click",(e)=>{
   val=e.target.innerText
  })
  btn.addEventListener("click",function searchForImg(string=val){
    
    fetch(`https://api.pexels.com/v1/search/?query=${string}`,{
       method:"GET",
       headers:{
           "Authorization":"563492ad6f91700001000001b7ea81c34afa456f87dc53e6f333cd80"
       }
    })
    .then((data)=>{
       return data.json()
   })
   .then((json)=>{
    let card=document.querySelectorAll(".col-md-4")

    let photos=json.photos
    for(i=0;i<photos.length;i++){
     let img=photos[i]
     console.log(img.src.large)
     card[i].innerHTML=`
     <div class="col-md-4">
     <div class="card mb-4 shadow-sm">
     <img src="${img.src.large}" alt="">
       <div class="card-body">
         <p class="card-text">
           This is a wider card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
           longer.
         </p>
         <div
           class="d-flex justify-content-between align-items-center"
         >
           <div class="btn-group">
             <button
               type="button"
               class="btn btn-sm btn-outline-secondary"
             >
               View
             </button>
             <button
               type="button"
               class="btn btn-sm btn-outline-secondary"
             >
               Edit
             </button>
           </div>
           <small class="text-muted">id: ${img.id}</small>
         </div>
       </div>
     </div>
    </div>
     `
       
    }
     
   })
   .catch((err)=>{
       console.log(err)
       alert(err)
   })
   }
  )
let edit=document.querySelectorAll(".btn-sm")


document.addEventListener("DOMContentLoaded", ()=>{ 
    for(i=0;i<edit.length;i++){
               edit[i].innerText="hide"
               edit[i].addEventListener("click",(e)=>{
                e.currentTarget.parentNode.parentNode.parentNode.remove()
               })
          
            }
})





