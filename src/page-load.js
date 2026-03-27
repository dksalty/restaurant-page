export function pageLoad(){
    const mainDiv = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'Welcome to';
    mainDiv.appendChild(title);
    const burgerImage = document.createElement('img');
    burgerImage.src = 'https://i.imgur.com/EzRcOjE.png'
    burgerImage.width = 700;
    
    mainDiv.appendChild(burgerImage)
    const burgerStory = document.createElement('p')
    burgerStory.textContent = 'Our burgers are made with love and attention to the perfect timing on the flip!'
    burgerStory.style.fontSize = '30px'
    burgerStory.style.fontWeight = 'bold'
    mainDiv.appendChild(burgerStory);
    
}   