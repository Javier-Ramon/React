
const products = [
    {
      id: '1',
      name: 'Iphone 12',
      price: 400000,
      category: 'celular',
      img: 'https://f.fcdn.app/imgs/473a24/www.covercompany.com.uy/coveuy/3ab0/original/catalogo/2-4463_11383_1/460x460/iphone-15-5g-256gb-6gb-ram-6-1-chip-a16-bionic-oled-super-retina-xdr-blue.jpg',
      stock: 25,
      description: 'Descripcion de Iphone 12',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: 280000,
      category: 'celular',
      img: 'https://f.fcdn.app/imgs/4e48db/www.market.com.uy/markuy/a02d/original/catalogo/ER046_1/460x460/celular-samsung-s21-5g-reacondicionado-v01.jpg',
      stock: 20,
      description: 'Descripcion de Samsung S21',
    },
    {
      id: '3',
      name: 'Ipad 8va generacion',
      price: 100000,
      category: 'tablet',
      img: 'https://cdn.awsli.com.br/600x450/2111/2111611/produto/169627594/6e20c9e1d3.jpg',
      stock: 15,
      description: 'Descripcion de iPad 8va generacion',
    },
    {
      id: '4',
      name: 'Ipad 8va generacion',
      price: 100000,
      category: 'tablet',
      img: 'https://http2.mlstatic.com/D_NQ_NP_755411-MLA46974955962_082021-O.webp',
      stock: 15,
      description: 'Descripcion de iPad 8va generacion',
    },
    {
      id: '5',
      name: 'Notebooks',
      price: 250000,
      category: 'Notebooks',
      img: 'https://f.fcdn.app/imgs/ff6b7c/www.market.com.uy/markuy/a137/original/catalogo/N023_1/460x460/notebook-comstar-n4020-128gb-v01.jpg',
      stock: 5,
      description: 'Notebooks',
    },
    {
      id: '6',
      name: 'Notebooks',
      price: 250000,
      category: 'Notebooks',
      img: 'https://f.fcdn.app/imgs/bf348b/www.compupel.com.uy/coeluy/0a0d/original/catalogo/101251610125161/460x460/notebook-hp-14-fq0080nr-dualcore-ram-4gb-disco-solido-64gb-128gb-memoria-adicionales-pantalla-tactil-led-hd-14-win10-notebook-hp-14-fq0080nr-dualcore-ram-4gb-disco-solido-64gb-128gb-memoria-adicionales-pantalla-tactil-led-hd-14-win10.jpg',
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

  export const getProductosById = (ProductosId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === ProductosId))
        }, 1000)
    })
}
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };
  