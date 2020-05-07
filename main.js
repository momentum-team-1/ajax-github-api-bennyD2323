let dataSection = document.querySelector("#target");
let dataSection2 = document.querySelector("#target2")

fetch("https://api.github.com/users/bennyd2323")
    .then (function (response){
        return response.json()
    })
    .then(function (data) {
        let h1El = document.createElement ("p")
        h1El.innerText = data.name
        dataSection.appendChild (h1El)
        console.log (data)
        return data.url
    })
    
    
    .then (url => fetch(url))
    .then(response => response.json())
        .then(function (gitUser) {
        let userDiv = document.createElement("div")
        userDiv.innerHTML = gitUser.login
        dataSection.appendChild (userDiv)
        return gitUser.url
    })
    .then (url => fetch(url))
    .then(response => response.json())
        .then(function (company) {
        let companyDiv = document.createElement("div")
        companyDiv.innerHTML = company.company
        dataSection.appendChild (companyDiv)
        return company.url
    })
    .then (url => fetch(url))
    .then(response => response.json())
        .then(function (website) {
        let websiteDiv = document.createElement("div")
        websiteDiv.innerHTML = website.blog
        dataSection.appendChild (websiteDiv)
        return website.url
    })

    .then (url => fetch(url))
    .then(response => response.json())
        .then(function (photoData) {
        console.log(photoData)
        let photoDiv = document.createElement("div")
        photoDiv.innerHTML = `<img src= ${photoData.avatar_url}>`
        pictarget.appendChild (photoDiv)
        return photoData.url
    })
