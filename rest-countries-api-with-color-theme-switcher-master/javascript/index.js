const countriesElem = document.querySelector(".countries");



const filterBox = document.querySelector(".filter-box");
const dropDown = document.querySelector(".drop-down-list");
const region = document.querySelectorAll(".region");
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle-box");
const darkMoonMode = document.querySelector(".moon-solid");
const LightMoonMode = document.querySelector(".moon-regular");


const updateCountries = (data) => {
    console.log(data)
    const country = document.createElement("div");
    country.classList.add('country');
    country.innerHTML =
        `
    <div class="flag-box">
        <img src="${data.flags.svg}" alt="">
    </div>
    <div class="country-info">
        <h4 class="countryName">${data.name.common}</h4>
        <p><strong>Population:</strong> ${data.population}</p>
        <p class="regionName"><strong>Region:</strong> ${data.region}</p>
        <p><strong>Capital:</strong> ${data.capital}</p>
    </div>
    
    `
    countriesElem.appendChild(country);
    country.addEventListener("click", () => {
        showCountryDetails(data);
    });
}

let filterDisplay = false;
filterBox.addEventListener("click", () => {
    if (filterDisplay) {
        dropDown.style.display = 'none';
        filterDisplay = false;
    } else {
        dropDown.style.display = 'block';
        filterDisplay = true;
    }
});

region.forEach(element => {
    element.addEventListener("click", () => {
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerHTML)
            if (elem.innerHTML.includes(element.innerHTML) || element.innerHTML == "All") {
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        });
    });
});

search.addEventListener("input", () => {
    Array.from(countryName).forEach(elem => {
        if (elem.innerHTML.toLowerCase().includes(search.value.toLowerCase().trim())) {
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    });
});



const section = document.querySelector(".section");

function showCountryDetails(data) {

    section.classList.toggle("showInfo");
    section.innerHTML = `
    <div class="back-btn">
       <button><img src="Images/arrow-left-solid.svg" alt="">Back</button>
    </div>
    <div class="countryBox">
        <div class="leftSideBox">
            <img src="${data.flags.svg}" alt="">
        </div>
        <div class="rightSideBox">
           <h4>${data.name.official}</h4>
           <div class="innerBox inner">
               <div class="innerLeft">
                   <p><span>Native Name:</span> ${Object.values(data.name.nativeName).map(nativename => nativename.common)}</p>
                   <p><span>Population:</span> ${data.population}</p>
                   <p><span>Region:</span> ${data.region}</p>
                   <p><span>Sub Region:</span> ${data.subregion}</p>
                   <p><span>Capital:</span> ${data.capital}</p>
               </div>

               <div class="innerRight inner">
                   <p><span>Top Level Domain:</span> ${data.tld}</p>
                   <p><span>Currencies:</span> ${Object.values(data.currencies).map(currency => currency.name).sort()}</p>
                   <p><span>Languages:</span> ${Object.values(data.languages).map(language => language).sort()}</p>
               </div>
           </div>
           <div class="border-box">
              <p>Border Countries: <span> ${data.borders}</span></p>
           </div>
       </div>
   </div>
    `
    const back = section.querySelector(".back-btn button");
    back.addEventListener("click", () => {
        section.classList.toggle("showInfo");
    });
}

let isLightMode = false;

toggle.addEventListener("click", () => {
    document.body.classList.toggle("bodyLightMode");
    document.querySelector("header").classList.toggle("lightMode");
    search.classList.toggle("active");
    section.classList.toggle("bodyLightMode");
    if (isLightMode) {
        darkMoonMode.style.display = 'block';
        LightMoonMode.style.display = 'none';
        document.querySelector(".toggle-box p").style.color = 'white';
        search.style.backgroundColor = 'hsl(209, 23%, 22%)';
        document.querySelector(".filter-box").style.backgroundColor = 'hsl(209, 23%, 22%)';
        document.querySelector(".filter-box").style.color = 'white';
        document.querySelector(".drop-down-list").style.backgroundColor = 'hsl(209, 23%, 22%)';
        document.querySelectorAll(".region").forEach(dropDownText => {
            dropDownText.style.color = 'white';
        });
        document.querySelectorAll(".country").forEach(country => {
            country.style.backgroundColor = 'hsl(209, 23%, 22%)';
            country.style.boxShadow = 'none';
        });
        document.querySelectorAll(".country-info h4, .country-info p, .rightSideBox h4, .innerLeft p, .innerRight p").forEach(countryInfo => {
            countryInfo.style.color = 'white';
        });
        document.querySelector("header").style.boxShadow = 'none';
        section.style.backgroundColor = 'hsl(207, 26%, 17%)';
        isLightMode = false;
        section.querySelectorAll(".rightSideBox h4, .innerLeft p, .innerRight p, .border-box p").forEach(innerInfo => {
            innerInfo.style.color = "white";
        });
        section.querySelector(".back-btn button").style.backgroundColor = "hsl(209, 23%, 22%)";
        section.querySelector(".back-btn button").style.color = "white";

    } else {
        darkMoonMode.style.display = 'none';
        LightMoonMode.style.display = 'block';
        document.querySelector(".toggle-box p").style.color = 'hsl(200, 15%, 8%)';
        search.style.backgroundColor = 'white';
        document.querySelector(".filter-box").style.backgroundColor = 'white';
        document.querySelector(".filter-box").style.color = 'hsl(200, 15%, 8%)';
        document.querySelector(".drop-down-list").style.backgroundColor = 'white';
        document.querySelectorAll(".region").forEach(dropDownText => {
            dropDownText.style.color = 'hsl(200, 15%, 8%)';
        });
        document.querySelectorAll(".country").forEach(country => {
            country.style.backgroundColor = 'white';
            country.style.boxShadow = '0px 2px 10px 2px rgba(0, 0, 0, 0.5)';
        });
        document.querySelectorAll(".country-info h4, .country-info p").forEach(countryInfo => {
            countryInfo.style.color = 'hsl(200, 15%, 8%)';
        });
        section.style.backgroundColor = 'hsl(0, 0%, 95%)';
        isLightMode = true;
        section.querySelectorAll(".rightSideBox h4, .innerLeft p, .innerRight p, .border-box p").forEach(innerInfo => {
            innerInfo.style.color = "hsl(200, 15%, 8%)";
        });
        section.querySelector(".back-btn button").style.backgroundColor = "hsl(0, 0%, 98%)";
        section.querySelector(".back-btn button").style.boxShadow = '0px 2px 5px 2px rgba(0, 0, 0, 0.5)';
        section.querySelector(".back-btn button").style.color = "hsl(200, 15%, 8%)";
    }
});


