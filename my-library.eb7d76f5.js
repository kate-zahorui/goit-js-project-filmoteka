!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("1kXJT"),o=a("iU1Pc");function l(e){return e.map((function(e){var t=e.poster_path,n=e.title,a=e.genres,i=e.release_date,o=e.vote_average,l=e.id,r=a.map((function(e){return e.name}));return r.length>2&&(r="".concat(r[0],", ").concat(r[1],", Other")),'<li class="list__item" id="'.concat(l,'">\n        <img class="list__img" src="https://image.tmdb.org/t/p/original/').concat(t,'" alt="').concat(n,'"></img>\n        <div class="list__text">\n        <h2 class="list__title">').concat(n,'</h2>\n        <p class="list__genre">').concat(r," | ").concat(i.slice(0,4),'&nbsp&nbsp\n        <span class="list__vote">').concat(o.toFixed(1),"</span></p>\n        </div>\n      </li>")})).join("")}a("ku63a");var r=a("jcFG7"),c=document.querySelector(".js-library"),s=document.querySelector(".js-watched"),d=document.querySelector(".js-queue"),u=document.getElementById("tui-pagination-container");s.addEventListener("click",m),d.addEventListener("click",m);var f=i.default.load("watched");f=f||[];var p,g,v=i.default.load("queue");function m(e){"string"!=typeof e&&(e=e.target.name),"queue"===e?(s.classList.remove("active"),d.classList.add("active")):(s.classList.add("active"),d.classList.remove("active")),i.default.save("library-state",e),function(e){g=window.innerWidth>=1280?9:window.innerWidth>=768?8:4;i.default.load(e)?(p=(0,r.default)(i.default.load(e).length,g),u.removeAttribute("style"),p.on("afterMove",(function(t){c.innerHTML=l(i.default.load(e).slice(t.page*g-g,t.page*g))})),p.movePageTo(1)):(console.log("Чистота"),u.setAttribute("style","display: none"),c.innerHTML="",o.Notify.info("Your library is empty. You can add something"))}(e)}v=v||[];a("5xtVg");var y=(i=a("1kXJT")).default.load("library-state");y=y||[],console.log("libraryState = ",y),m(y)}();
//# sourceMappingURL=my-library.eb7d76f5.js.map
