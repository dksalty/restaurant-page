export function aboutPageLoad() {

   
    const mainDiv = document.getElementById('content');
    
    mainDiv.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'The Art of the Perfect Flip';
    mainDiv.appendChild(title);
    
    const hamburgerImage = document.createElement('img');
    hamburgerImage.src = 'https://i.imgur.com/8oE5YXC.png'
    hamburgerImage.width = 700;
    mainDiv.appendChild(hamburgerImage)
  
    const hamburgerStory = document.createElement('p')
    hamburgerStory.textContent = "At Big Fry Burgers, we believe a great hamburger isn't just cooked; it's engineered. The process starts long before the patty hits the heat, with a custom-ground blend of chilled brisket and chuck that provides the ideal fat-to-lean ratio. We don't believe in pre-formed, frozen disks; every burger is hand-pressed onto a screaming-hot flat top the moment the order comes in. This immediate sear locks in the natural juices and begins the Maillard reaction—that scientific magic that creates the deeply savory, caramelized crust our regulars crave."
    hamburgerStory.style.fontWeight = 'bold'
    mainDiv.appendChild(hamburgerStory);
    hamburgerStory.classList.add('burgerstory')

    const storyContinued = document.createElement('p')
    storyContinued.textContent = "The true secret, however, lies in the patience of the pitmaster. There is a precise, fleeting moment where the edges of the beef start to lace and the center reaches the perfect tension--that is the 'golden window' for the flip. We wait for that exact second to turn the patty, ensuring the crust is undisturbed and the interior stays buttery and tender. It is a rhythmic dance of high heat and split-second timing, followed by a quick rest to let the flavors settle. We treat every burger like it is the only one we are making that day, because we know that the difference between a good burger and a legendary one is all in the timing of that single, perfect flip."
    storyContinued.style.fontWeight = 'bold'
    mainDiv.appendChild(storyContinued);
    storyContinued.classList.add('burgerstory')
}