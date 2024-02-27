document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/yuuhLKT')
    .then(response => response.json())
    .then(data => {
        const profileAvatar = document.querySelector('.profile-holder')
        profileAvatar.innerHTML = `<img class="profile-avatar" src="${data.avatar_url}" alt="Profile Avatar">`

        const profileName = document.querySelector('.profile-name')
        profileName.innerHTML = data.name
        
        const profileUsername = document.querySelector('.profile-username')
        profileUsername.innerHTML = `@${data.login}`
        
        const repositories = document.querySelector('.repo')
        repositories.innerHTML = `<h4>Repositórios</h4> ${data.public_repos}`
        
        const seguidores = document.querySelector('.seguidores')
        seguidores.innerHTML = `<h4>Seguidores</h4> ${data.followers}`

        const seguindo = document.querySelector('.seguindo')
        seguindo.innerHTML = `<h4>Seguindo</h4> ${data.following}`
    })
})