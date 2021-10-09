export function getLatestCotizacion(){
    const data = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
    return fetch(data)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result;
    })
}