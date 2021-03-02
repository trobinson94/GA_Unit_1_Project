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
                authors: result.volumeInfo.authors[0],
                publishDate: result.volumeInfo.publishedDate,
                description: result.volumeInfo.description,
                img: result.volumeInfo.imageLinks.thumbnail
            }
       })
    //    console.log(info)
       render(info)
    }, 
    (error) => {
        console.log('Bad request: ', error)
    }
);
}

getData();

function render(info){
    console.log("Data in render function: ", info)
    info.forEach( (result) =>{
        var div = $("<div></div>")
        div.append("<h3>" + result.titles + "</h3>")
        div.append("<img src=" + result.img + ">")
        div.append("<p>" + result.authors + "</p>")
        div.append("<p>" + result.publishDate + "</p>")
        div.append("<p>" + result.description + "</p>")
        
        $("#main").append(div);
    }
    )
}

