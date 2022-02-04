// export default function getCountries() {
//     return fetch('https://restcountries.com/v2/all')
//         .then(res => res.json())
// }


export const getCountries = async() => {
    const res = await fetch('https://restcountries.com/v2/all');
    return res.json()
};