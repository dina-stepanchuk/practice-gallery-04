const dishes = [
  {
    preview:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400',
    original: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    description: 'Italian Pizza with Mozzarella',
  },
  {
    preview:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
    original:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    description: 'Classic Beef Burger',
  },
  {
    preview:
      'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=400',
    original:
      'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg',
    description: 'Fresh Sushi Set',
  },
  {
    preview:
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
    original:
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
    description: 'Pasta Carbonara',
  },
  {
    preview:
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=400',
    original:
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg',
    description: 'Healthy Avocado Salad',
  },
  {
    preview:
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=400',
    original:
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg',
    description: 'Chocolate Dessert Cake',
  },
];

const container = document.querySelector('.gallery');
const createImageDishes = dishes => {
  return dishes
    .map(dish => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${dish.original}">
    <img
      class="gallery-image"
      src="${dish.preview}"
      data-source="${dish.original}"
      alt="${dish.description}"
    />
  </a>
</li>
`;
    })
    .join('');
};

const clickOnDish = event => {
  event.preventDefault();
  const targetEl = event.target;
  if (!targetEl.classList.contains('gallery-image')) {
    return;
  }
  const imageEl = targetEl;

  const largeImage = imageEl.dataset.source;
  const largeImageAlt = targetEl.alt;
  const instance = basicLightbox.create(
    `
    <div class="modal"><img class="modal-image"
    src="${largeImage}" alt="${largeImageAlt}" /></div>`,
    {
      onShow: instance => {
        instance.element().addEventListener('click', () => instance.close());
      },
    }
  );
  instance.show();
};

container.insertAdjacentHTML('beforeend', createImageDishes(dishes));
container.addEventListener('click', clickOnDish);
