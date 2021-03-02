// $.ajax({
//     url:'https://id.twitch.tv/oauth2/token?client_id=98tuf3a3km6hzlkpz6ch2rmtkp2nw2&client_secret=mg4pt9gjggxfc8e0nmj7p70i9ogczc&grant_type=client_credentials'
// }).then (
//     (data) => {
//         console.log(data);
//     }, 
//     (error) => {
//         console.log('Bad request: ', error)
//     }
// );

// $.ajax({
//     url: "https://api.igdb.com/v4",
//     method: "post",
//     headers: {
//         "Client-ID": "98tuf3a3km6hzlkpz6ch2rmtkp2nw2",
//         Authorization: "Bearer prau3ol6mg5glgek8m89ec2s9q5i3i"
//     }
//   })
//   .then (
//         (data) => {
//             console.log(data);
//         }, 
//         (error) => {
//             console.log('Bad request: ', error)
//         }
//     );


//This works, but still recieved a CORS error. Will revisit after unit 3. Need to create a proxy server
// $.ajax({
//     url: "https://id.twitch.tv/oauth2/token?client_id=98tuf3a3km6hzlkpz6ch2rmtkp2nw2&client_secret=0ozk5hx1dzb66dcix28k8471u76ko8&grant_type=client_credentials",
//     method: "post"
//   })
//   .then (
//         (data) => {
//             const token = data.access_token;
//             $.ajax({
//                 url: 'https://api.igdb.com/v4/games',
//                 headers: {
//                             "Client-ID": "98tuf3a3km6hzlkpz6ch2rmtkp2nw2",
//                             Authorization: `Bearer ${token}`
//                         },
//                 method: "post"
//             }).then (
//                 (games) => {
//                     console.log(games)
//                 }
//             )
//         }, 
//         (error) => {
//             console.log('Bad request: ', error)
//         }
//     );

// const $titile = $('#title');
// const $author = $('#author');
// const $date = $('#date')

// $.ajax({
//     url:'https://www.googleapis.com/books/v1/volumes?q=specials&key=AIzaSyAexUlSyYB9EiHD0b69jAjsmnQMfdnw-Bs'
// }).then (
//     (data) => {
//        $titile.text(data.items[2].volumeInfo.title)
//        $author.text(data.items[2].volumeInfo.authors)
//        $date.text(data.items[2].volumeInfo.publishedDate)
//     }, 
//     (error) => {
//         console.log('Bad request: ', error)
//     }
// );


function getData() {
    $.ajax({
    url:'https://www.googleapis.com/books/v1/volumes?q=specials&key=AIzaSyAexUlSyYB9EiHD0b69jAjsmnQMfdnw-Bs'
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
                description: result.volumeInfo.description
            }
       })
       console.log(info)
       render(info)
    }, 
    (error) => {
        console.log('Bad request: ', error)
    }
);
}

const $title = $('.title');
const $author = $('#author');
const $date = $('#date');

getData();

function render(info){
    console.log("Data in render function: ", info)
    info.forEach( (result) =>{
        // console.log(result)
        console.log(result.titles)
        $title.text(result.titles)
    }
    )
    // $title.text(data.items[0].volumeInfo.title)
    // $author.text(data.items[0].volumeInfo.authors)
    // $date.text(data.items[0].volumeInfo.publishedDate)
}




