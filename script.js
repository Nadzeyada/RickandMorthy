let sourceCards = [];
let navTitles = document.querySelectorAll('.navbar-link');

// link is depends on active navbar category (Clients, Products, Feedback)
async function loadCards(link) {
  try {
    const response = await fetch(link);
    sourceCards = await response.json();
    console.log(sourceCards);
  } catch (error){
    console.error('Problem with fetching JSON', error);
  }
}

function generateCards(){
  let activeTitle = document.querySelector('.portfolio-section__list-item.active .navbar-link');
  let apiLink;
  let newCards = [];

  // Making new cards elements
  for(let i = 0; i < 6; ++i) {
    let card = document.createElement('article');
    card.classList.add('portfolio-section__card');
    newCards.push(card);
  }
  
  // Finding which api should be fetched and the filling the cards elements
  switch(activeTitle.textContent) {
    case 'Clients':
      apiLink = 'https://rickandmortyapi.com/api/character';
      loadCards(apiLink).then( () => {
        for (let i = 0; i < 6; ++i) {
          // Fetching title and image from JSON
          let name = sourceCards.results[i].name;
          let imageLink = sourceCards.results[i].image;

          // Creating elements for DOM
          let cardTitle = document.createElement('h3');
          cardTitle.classList.add('card__title');
          console.log(cardTitle);
          cardTitle.textContent = name;

          let cardImage = document.createElement('img');
          cardImage.classList.add('card__content');
          cardImage.classList.add('image')
          cardImage.src = imageLink;
          cardImage.alt = 'character image';

          // Adding title&image to the new card
          newCards[i].append(cardImage);
          newCards[i].append(cardTitle);
        }
      });
      break;
    case 'Products':
      apiLink = 'https://fakestoreapi.com/products?limit=6';
      loadCards(apiLink).then( () => {
        for (let i = 0; i < 6; ++i) {
          // Fetching title and image from JSON
          let name = sourceCards[i].title;
          let imageLink = sourceCards[i].image;

          // Creating elements for DOM
          let cardTitle = document.createElement('h3');
          cardTitle.classList.add('card__title');
          console.log(cardTitle);
          cardTitle.textContent = name;

          let cardImage = document.createElement('img');
          cardImage.classList.add('card__content');
          cardImage.classList.add('image')
          cardImage.src = imageLink;
          cardImage.alt = 'character image';

          // Adding title&image to the new card
          newCards[i].append(cardImage);
          newCards[i].append(cardTitle);
        }
      });
      break;
    case 'Feedback':
      apiLink = 'https://fakerapi.it/api/v1/texts?_quantity=6&_characters=300';
      loadCards(apiLink).then( () => {
        for (let i = 0; i < 6; ++i) {
          // Fetching title and image from JSON
          let title = sourceCards.data[i].title;
          let content = sourceCards.data[i].content;
          let author = sourceCards.data[i].author;

          // Creating elements for DOM
          let cardTitle = document.createElement('h3');
          cardTitle.classList.add('card__title');
          cardTitle.style.fontWeight = 700;
          cardTitle.textContent = title;

          let cardContentPar = document.createElement('p');
          cardContentPar.classList.add('card__content');
          cardContentPar.classList.add('paragraph');
          cardContentPar.textContent = content;

          let cardContentAuthor = document.createElement('p');
          cardContentAuthor.classList.add('card__content');
          cardContentAuthor.classList.add('author')
          cardContentAuthor.textContent = author;

          // Adding title&image to the new card
          newCards[i].append(cardTitle);
          newCards[i].append(cardContentPar);
          newCards[i].append(cardContentAuthor);
        }
      });
      break;
  }
  
  // Adding new cards elements to the HTML
  let cardsContainer = document.querySelector('.portfolio-section__cards-container');
  for(let i = 0; i < 6; ++i) {
    cardsContainer.append(newCards[i]);
  }
  
  
  console.log(cardsContainer);
  ////// .............................
}

generateCards();

