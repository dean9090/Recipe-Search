const ul = document.querySelector(".results");
const searchResults = document.getElementsByName("search")[0];
const button = document.getElementsByName("button")[0];

let capture = "";

button.addEventListener("click", () =>{
  capture = searchResults.value

  console.log(capture);

  const promise = fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=  ${capture}`)
  .then(response => response.json())
  .then(data => {
      for (var i = 0; i < data.results.length; i++) {

      let dataPoint =   data.results[i];
      // **********List Element**************
      let newLi = document.createElement("li");
      ul.appendChild(newLi);

      // ****************TITLE*************
      let title = document.createElement("p");
      title.textContent = dataPoint.title;
      newLi.appendChild(title);

      // *************Picture**************

      let picture = document.createElement("img");
      if (dataPoint.thumbnail === "") {
         picture.src="http://via.placeholder.com/200x200"
      }else {
        picture.src = dataPoint.thumbnail;
      }
      newLi.appendChild(picture);

      // *******************LINK*************

      let link = document.createElement("a");
      link.href = dataPoint.href;
      link.innerText = "Recipe"
      newLi.appendChild(link);



    }
  })
})











//
