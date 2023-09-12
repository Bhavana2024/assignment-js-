document.addEventListener("DOMContentLoaded", function () {
    const countryInfo = document.querySelector(".country-info");
    const countryInput = document.getElementById("countryInput");
    const fetchButton = document.getElementById("fetchButton");

     function fetchCountryData(countryName) {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => response.json())
            .then((data) => {
                 if (Array.isArray(data) && data.length > 0) {
                    const country = data[0];

                     const html = `
                        <h2>${country.name.common}</h2>
                        <p><strong>Capital:</strong> ${country.capital}</p>
                        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> ${country.region}</p>
                        <p><strong>Subregion:</strong> ${country.subregion}</p>
                        <p><strong>Language(s):</strong> ${Object.values(country.languages).join(", ")}</p>
                        <img src="${country.flags.png}" alt="${country.name.common} Flag">
                    `;

                     countryInfo.innerHTML = html;
                } else {
                     countryInfo.innerHTML = "Please enter correct information.";
                }
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
                countryInfo.innerHTML = "An error occurred while fetching data.";
            });
    }

     fetchButton.addEventListener("click", function () {
        const searchTerm = countryInput.value.trim();

        if (searchTerm !== "") {
            fetchCountryData(searchTerm);
        } else {
            countryInfo.innerHTML = "Please enter a country name.";
        }
    });
});
