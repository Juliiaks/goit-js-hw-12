import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { apiPixabay } from "./js/pixabay-api";
import { addPictures } from "./js/render-functions";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";





const form = document.querySelector(".form");
const searchButton = document.querySelector("button");
const loader = document.querySelector(".loader");


// window.addEventListener("load", () => {
//     loader.classList.add("hide");
//     loader.addEventListener("transitionend", () => {
//         document.body.removeChild("loader");
//     })
// })
   
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
   
    const input = document.querySelector("#pictures");
    const searchWord = input.value.trim();
document.querySelector(".gallery").innerHTML = "";
    if (searchWord === "") {
        console.log("empty");
          iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    messageColor: "#fff",
                    position: "topRight",
                    backgroundColor: "#ef4040",
                    progressBar: false,
                    close: false,
                    timeout: 5000,
          });
        
       return;
    };

     
    loader.classList.remove("hide");
   
    apiPixabay(searchWord)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    messageColor: "#fff",
                    position: "topRight",
                    backgroundColor: "#ef4040",
                    progressBar: false,
                    close: false,
                    timeout: 5000,
            });
           
            }
            console.log(data);
            addPictures(data.hits);
           
        })
        .catch(error => {
            console.log("catch", error);
        })
    .finally(() => {
        form.reset(); 
       loader.classList.add("hide");
    })
         

} 





