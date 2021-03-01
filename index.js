
document.getElementById('loading').style.display = 'none'

async function searchBooks(url) {
    if (document.getElementById('search').value) {
        url = 'https://www.googleapis.com/books/v1/volumes?q=' + document.getElementById('search').value + '&Results=20';
        document.getElementById('error').innerHTML = ``
    } else {
        document.getElementById('error').innerHTML = `
        <div class="invalid-feedback w-100 d-block">
        Please provide a search phrase. 
      </div>
        `
        return;

    }
    console.log('url', url)
    setLoading(true)
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    let data = await response.json()
    console.log(data.items)
    insertResults(data.items)

    setLoading(false)

}


function setLoading(show) {
    if (show) {
        document.getElementById('loading').style.display = 'block'

    } else {
        document.getElementById('loading').style.display = 'none'

    }
}



function insertResults(items) {

    let r = document.getElementById('results');
    console.log('r', r)
    // clear result

    r.innerHTML = ``

    // insert
    let html = ``
    items.forEach(item => {


        html += createBookNode(item)

    });

    r.innerHTML = html;

}


function createBookNode(item) {

    return `
    <div class="card col-12 col-md-6 col-lg-3">
    ${item.volumeInfo.imageLinks?.thumbnail ? `<img src="${item.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="...">` : ''} 
    
        <div class="card-body">
            <h5 class="card-title">${item.volumeInfo.title ? item.volumeInfo.title : '(No title provided)'}</h5>
            <p class="card-text">${item.volumeInfo.description ? item.volumeInfo.description : '(No description provided)'}</p>
            <p class="card-text text-secondary">Author: ${item.volumeInfo.authors ? item.volumeInfo.authors : '(No authors provided)'}</p>
            <a href="${item.volumeInfo.infoLink}" target="_blank" class="btn btn-primary">View Book</a>
        </div>
    </div>

`
}

function reset() {
    document.getElementById('search').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('error').innerHTML = ``

}

