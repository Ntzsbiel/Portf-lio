//Função da api que retorna as informações 

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Ntzsbiel/Portfolio/masterassets/img/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}