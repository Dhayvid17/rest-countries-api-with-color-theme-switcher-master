const getCountry = async () => {
    const base = await fetch('https://restcountries.com/v3.1/all');
    const response = await base.json();
    // return response;
    response.forEach(element => {
        updateCountries(element)
    });

}
getCountry();