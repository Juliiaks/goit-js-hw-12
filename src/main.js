import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { apiPixabay } from "./js/pixabay-api";
import { addPictures } from "./js/render-functions";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";





const form = document.querySelector(".form");
const searchButton = document.querySelector("button");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-button");
let page = 1;
 let searchWord = null;

// window.addEventListener("load", () => {
//     loader.classList.add("hide");
//     loader.addEventListener("transitionend", () => {
//         document.body.removeChild("loader");
//     })
// })
   
form.addEventListener("submit", handleSubmit);
loadBtn.addEventListener("click", onBtnClick);

async function handleSubmit(event) {
    event.preventDefault();
   
    const input = document.querySelector("#pictures");
   

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
   
searchWord = event.currentTarget.elements["pictures"].value.trim();
    try {
        
     const data = await apiPixabay(searchWord, page)
    
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

          if (data.hits.length > 15) {
        loadBtn.remove('hide');
      }
        
    } catch (error) {
         console.log("catch", error);
    } finally {
        form.reset(); 
       loader.classList.add("hide");
    }
         
} 



async function onBtnClick() {
    // loader.classList.remove("hide");
    page += 1;
    try {
        const data = await apiPixabay(searchWord, page)
         addPictures(data.hits);

           
            const { height: cardHeight } = document.querySelector(".gallery")
                .firstElementChild.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth"
            });
        
            const lastPage = Math.ceil(data.total / 15);
            if (lastPage === page) {
                // loadBtn.classList.add("hide")
                return iziToast.show({
                    message: `We're sorry, but you've reached the end of search results.`,
                    messageColor: "#fff",
                    position: "topRight",
                    backgroundColor: "light blue",
                    progressBar: false,
                    close: false,
                    timeout: 5000,
            });
            }
        
      
    } catch (error) {
        console.log(error.message);
    } finally {
       
     loader.classList.add("hide");   
    }
   

}





