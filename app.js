const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
   const mostrar=countries.filter(iso => iso.iso3 == isoCode)
    return mostrar
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName( isoCode, language){
    //Complete with your code
    const iso=countries.filter(iso => iso.iso3 == isoCode)   
    //return (iso)
    const mostrarlang=countries.filter(lang => lang.translations[language])
    return (mostrarlang, iso)

    
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    const mostrar=countries.filter(subreg => subreg.subregion == subregion)
    return mostrar
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName( 'ARG','ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();