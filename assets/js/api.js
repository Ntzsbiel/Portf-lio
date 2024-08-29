//Função da api que retorna as informações 

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Ntzsbiel/Portfolio/master/assets/img/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}