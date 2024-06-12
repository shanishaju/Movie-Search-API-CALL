Search=async()=>{
   const Moviename= movienm.value
   console.log(Moviename);

   if(Moviename){
    response= await fetch(` https://www.omdbapi.com/?apikey=fa1c9c03&t=${Moviename}`)
    response.json().then((result)=>{
        console.log(result);

        let poster= result.Poster
        console.log(poster);
        
        let title= result.Title
        console.log(title);

        let relased= result.Released
        console.log(relased);

        let director= result.Director
        console.log(director);

        let writer= result.Writer
        console.log(writer);

        let actors= result.Actors
        console.log(actors);

        let language= result.Language
            console.log(language);

        let awards= result.Awards
            console.log(awards);

        let country= result.Country
        console.log(country);
        
        let rating= result.Ratings
        console.log(rating.Source);


anss.innerHTML=`



<div class="card" style="width: 18rem;">
<img src="${poster}" class="card-img-top" alt="..."style="height: 25%;" width="100px" >
<div class="card-body">
  <h5 class="card-title align-items-center text-light">Title: ${title}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-light">Released:  ${relased}</li>
    <li class="list-group-item text-light"> Director: ${director}</li>
    <li class="list-group-item text-light"> Writer: ${writer}</li>
    <li class="list-group-item text-light"> Actors: ${actors}</li>
    <li class="list-group-item text-light"> Language: ${language}</li>
    <li class="list-group-item text-light"> Country: ${country}</li>
    <li class="list-group-item text-light"> Awards:${awards}</li>
    <li class="list-group-item text-light"> Rating : ${rating}</li>


  </ul>

</div>
</div>


`

    //     anss.innerHTML =`
    //         <div class="d-flex " id="anss">

    //     <div class="card shadow" style="width: 18rem;">
    //     <div class="card-body">
    //  <img src="${poster}" class="card-img-top" alt="poster" style="width: 100px;>

    //       <h5 class="card-title">${title}</h5>
    //     </div>
    //     <ul class="list-group list-group-flush">
    //         <li class="list-group-item">${relased}</li>

    //       <li class="list-group-item">${director}</li>
    //       <li class="list-group-item">${writer}</li>
    //       <li class="list-group-item">${actors}</li>
    //       <li class="list-group-item">${language}</li>
    //     </ul>

    //   </div>
    //   <div class="card2 box shadow" style="width: 18rem;">
        
    //     <ul class="list-group list-group-flush">
    //         <li class="list-group-item">${country}</li>
    //         <li class="list-group-item">${awards}</li>
    //         <li class="list-group-item">${rating}</li>
    //     </ul>
    //   </div>
    //     </div>
    // `
    })

   
   

   }
   else{
    alert('Enter a valid name')
   }
}