
const products = [
    {
      id: '1',
      name: 'Iphone 12',
      price: 400000,
      category: 'celular',
      img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
      stock: 25,
      description: 'Descripcion de Iphone 12',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: 280000,
      category: 'celular',
      img: 'https://s3-sa-east-1.amazonaws.com/saasargentina/7sE0R6pYzBi9TX33JUIR/imagen',
      stock: 20,
      description: 'Descripcion de Samsung S21',
    },
    {
      id: '3',
      name: 'Ipad 8va generacion',
      price: 100000,
      category: 'tablet',
      img: 'https://i5.walmartimages.com/seo/2021-Apple-10-2-inch-iPad-Wi-Fi-64GB-Space-Gray-9th-Generation_7f011036-b9fe-41fa-a034-630ee09c40c8.223ef5b846523de9f00acc7653753201.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
      stock: 15,
      description: 'Descripcion de iPad 8va generacion',
    },
    {
      id: '4',
      name: 'Notebooks',
      price: 250000,
      category: 'Notebooks',
      img: 'https://mla-s1-p.mlstatic.com/649005-MLA42714206772_072020-F.jpg',
      stock: 5,
      description: 'Notebooks',
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };
  