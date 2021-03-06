const $input = $('input[type="text"]');

let userInput;

$('form').on('submit', getData);


function getData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
    url:'https://www.googleapis.com/books/v1/volumes?q=' + userInput + '&key=AIzaSyAexUlSyYB9EiHD0b69jAjsmnQMfdnw-Bs'
}).then (
    (data) => {
       data;
       const searchData = data.items.slice(0, 11)
       console.log(searchData)
       const info = searchData.map( (result) =>{
            return {
                titles: result.volumeInfo.title,
                authors: result.volumeInfo && result.volumeInfo.authors ? result.volumeInfo.authors[0] : "no author", //Nullish coalescing
                publishDate: result.volumeInfo.publishedDate,
                description: result.volumeInfo.description ?? "No description", //Nullish coalescing
                img: result.volumeInfo && result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/jF7MPNn.jpg", //Nullish coalescing
                genre: result.volumeInfo.categories
            }
       })
       render(info)
    }, 
    (error) => {
        console.log('Bad request: ', error)
    }
);
}

function render(info){
    console.log("Data in render function: ", info)
    $("#results").empty();
    info.forEach( (result) =>{
        var div = $('<div id="books"></div>')
        div.append("<h3>" + result.titles + "</h3>")
        div.append("<img src=" + result.img + ">")
        div.append("<p>Author: " + result.authors + "</p>")
        div.append("<p>Date published: " + result.publishDate + "</p>")
        div.append("<p>Genre: " + result.genre + "</p>" )
        div.append('<p id="description" class="col-9">' + result.description + '</p>')
        
        $("#results").append(div);
        }
    )
}


