function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire41c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire41c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"fxIoW":"with_button.c9324edc.js","7WMlA":"no-poster_CUT.05bb0fec.jpeg"}'));var a;a=new URL(i("kyEFX").resolve("7WMlA"),import.meta.url).toString();async function s(){try{!function(e){const n=document.querySelector(".content-list");n.innerHTML="";const r=e.results.map((e=>{const n=e.title.toUpperCase();let r=t(a);return e.poster_path&&(r="https://image.tmdb.org/t/p/w500"+e.poster_path),`\n         <li class="card-container" data-id="${e.id}">\n            <img class="image-poster" src="${r}" alt="${e.title}"  />\n            <div class="info"> \n                <p class="movie-data">${n}</p>\n                <p class="movie-data">${e.release_date}</p>\n            </div>\n        </li>`}));n.innerHTML=r.join("")}(await async function(){try{return(await fetch("https://api.themoviedb.org/3//trending/movie/day?api_key=0e67fb79d752f59394a3aa358d9abf8d")).json()}catch(e){console.log(" ERROR ! -> ",e)}}())}catch(e){console.log(" ERROR ! -> ",e.message)}}document.querySelector(".click-btn").addEventListener("click",(()=>{s()}));
//# sourceMappingURL=with_button.c9324edc.js.map