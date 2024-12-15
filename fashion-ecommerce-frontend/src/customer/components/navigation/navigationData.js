export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/81kOCXyxCnL.jpg',
            imageAlt: 'Pinky outfit for your little princess',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://perfectwhitetee.com/cdn/shop/files/COURNTEY_WHITE_0227_400x.jpg?v=1715278300',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasse' },
              { name: 'Hats', id: 'hat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://www.primermagazine.com/wp-content/uploads/2022/05/todd-syder-weekend-pant-e1653089079207.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://i.etsystatic.com/51115681/r/il/e80d92/5956790714/il_600x600.5956790714_1u60.jpg',
            imageAlt:
              'Over sized Tshirts new collection for boys',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: '#' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: '#' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }
