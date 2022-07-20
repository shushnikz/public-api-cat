//let url=https://api.thecatapi.com/v1/breeds
//https://jsonplaceholder.typicode.com/comments
//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/photos
//https://api.thecatapi.com/v1/images/search?limit=10

catBreed()

async function catBreed(){
    
    try{
        let data=await fetch("https://api.thecatapi.com/v1/breeds")
        let res=await data.json()
        for(let i=0;i<res.length;i++){
           
            console.log(res[i])
  
        var breedData=document.getElementById('breedData')
        let breed=document.createElement('div')
        breed.setAttribute('class','col')
        breed.innerHTML=`
        
        <div class="card h-100 m-3 disc">
        <div class="card-header text-center"> <h5 class="card-title">${res[i].name}</h5></div>
         <img src="${res[i].image.url}" class="card-img-top image" alt="">
          <div class="card-body text-center">
                 <p class="card-text">Life Span: ${res[i].life_span}</p>
                 <p class="card-text">Origin: ${res[i].origin}</p>
                 <p class="card-text">Temperament: ${res[i].temperament}</p>
                 <p class="card-text">Adaptability: ${res[i].adaptability}</p>
                 <p class="card-text">Child Friendly: ${res[i].child_friendly}</p>
                 <p class="card-text">Breed Id: ${res[i].id}</p>
                 <a class="link" href="${res[i].wikipedia_url}">Wikipedia_Url</a>
                </div>
                <div class="card card-header description">
                <p>Description</p>
                <p>${res[i].description}</p>
              </div>
                </div>
        
        `
        breedData.appendChild(breed)
       

        }
    }
        
     catch(err){
        console.log(`Error found: $(err)`)
     }  
     
}
