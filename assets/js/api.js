//Função da api que retorna as informações 

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Ntzsbiel/Portfolio/master/assets/img/data/profile.json'
    const fetching = await fetch(url)
    const profileData = await fetching.json()

    profileData.forEach(icon => {
        console.log(icon.logo);  // Verifique se a URL do SVG está correta no console
    })
    return profileData
}
