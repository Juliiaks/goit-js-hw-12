import{a as y,S as b,i as d}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function p(o,t){const a="43264950-7d4cd6be2017577f15438949e";return(await y.get("https://pixabay.com/api/",{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const L=new b(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});function f(o){const t=o.map(({webformatURL:a,largeImageURL:r,tags:e,likes:s,views:l,comments:g,downloads:h})=>`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${a}"
      alt="${e}"
    />
  </a>
  <div class="info">
  <p class="field">
  <span class="text">Likes</span>
  <span class="value">${s}</span>
  </p>
  <p class="field">
  <span class="text">Views</span>
  <span class="value">${l}
  </p>
  <p class="field">
  <span class="text">Comments</span>
  <span class="value">${g}</span>
  </p >
  <p class="field">
  <span class="text">Downloads</span>
  <span class="value">${h}</span>
  </p>
  </div>
</li>`).join(" ");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),L.refresh()}const m=document.querySelector(".form");document.querySelector("button");const u=document.querySelector(".loader"),c=document.querySelector(".load-button");document.querySelector("#pictures");let n=1,i=null;m.addEventListener("submit",v);c.addEventListener("click",S);async function v(o){o.preventDefault(),n=1,document.querySelector(".gallery").innerHTML="",u.classList.remove("hide"),i=o.currentTarget.elements.pictures.value.trim(),c.classList.add("hide");try{const t=await p(i,n);if(t.hits.length===0||i===""){d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,close:!1,timeout:5e3});return}console.log(t),f(t.hits),t.total>15&&c.classList.remove("hide")}catch(t){console.log("catch",t)}finally{m.reset(),u.classList.add("hide")}}async function S(){n+=1;try{const o=await p(i,n);f(o.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:t*2,behavior:"smooth"}),Math.ceil(o.totalHits/15)===n)return c.classList.add("hide"),d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",position:"bottomRight",backgroundColor:"#cb73fc",progressBar:!1,close:!1,timeout:5e3})}catch(o){console.log(o.message)}}
//# sourceMappingURL=commonHelpers.js.map
