const generatememe = document.querySelector('.memebtn');
const image = document.querySelector('.memeimg');
const memetitle = document.querySelector('.meme_title');
const memeauthor = document.querySelector(".meme-author");

const updateDetails = (url,title,author) =>{
    image.setAttribute("src",url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = author;
}


const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(
        (response) => response.json())
        .then((data)=>{
            updateDetails(data.url,data.title, data.author);
        });
};





generatememe.addEventListener('click', generateMeme);

generateMeme()