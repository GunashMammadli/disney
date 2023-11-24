function getCharacters(link)
{
    return fetch(link)
        .then(res=>res.json())
}

async function toHtml()
{
    let link = `https://restcountries.com/v3.1/all`;
    let response = await getCharacters(link); 
    fillHTML(response)
}
function fillHTML(datas){
    let result = '';
    const movieList = document.getElementById('movie-card');
    datas.forEach(el=>{
        result += 
        `<div class="card" style="width: 18rem;">
        <img src="${el.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${el.name.common}</h5>
            <p class="card-text">Common.</p>
            <a href="#" class="btn btn-primary">Button</a>
        </div>
    </div>`
    })
    movieList.innerHTML = result;
}
toHtml();