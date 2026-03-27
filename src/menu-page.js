export function menuPageLoad() {
    const mainDiv = document.getElementById('content');
    mainDiv.textContent = '';
    

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    mainDiv.appendChild(menuTitle);

    
    const createMenuItem = (name, price, desc) => {
        const title = document.createElement('h2');
        title.textContent = `${name}  ${price}`;
        title.classList.add('menu-item-title'); 

        const description = document.createElement('p');
        description.textContent = desc;

        mainDiv.appendChild(title);
        mainDiv.appendChild(description);
    };

    
    createMenuItem('The Famous Big Patty', '$8.00', 'Has the same mass as those fast food double or triples in one patty!');
    createMenuItem('The Bacon Melt Toaster', '$10.00', 'Patty with melted cheese and topped with hickory smoked bacon on a toasted bun.');
    createMenuItem('Chili Cheese Fries', '$10.00', 'Our famous Big Fries become the main event when we add our chili cheese recipe!');
    createMenuItem('Sides', '$3.00', 'Famous Big Fries, Mashed Potatoes, Green Beans, Tater Tots, Onion Rings, and ask for our daily special!')
    createMenuItem('Desert', '$4.00', 'Fried Apples, Apple or Cherry pie, Pudding, Cinnamon roll, and ask for our daily special!')
    createMenuItem('Drinks', '$1.50', 'Soda, Lemonade, Tea, Coffee, and ask for alcoholic beverages(prices vary)!')
    const toppings = document.createElement('p');
    toppings.textContent = 'Enjoy these with your choice of toppings!';
    toppings.style.fontWeight = 'bold';
    mainDiv.appendChild(toppings);
}
    
