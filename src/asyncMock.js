const products =[
    {
        id: '1',
        name: ' Iphone 12',
        price: 100,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12 '

    },
    {id: '2', name:'Samsung S21',price: 100,category: 'celular', img: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjputL70_mCAxU4YEgAHd-cCMMYABADGgJjZQ&ase=2&gclid=EAIaIQobChMI6brS-9P5ggMVOGBIAB3fnAjDEAQYAiABEgLOIPD_BwE&sig=AOD64_1SUAOViZOJalq03y8mxaUgRBZ35w&ctype=5&nis=6&adurl&ved=2ahUKEwjm-8b70_mCAxWjLbkGHZGaAk0Qvhd6BAgBEHk', stock: 25,description: 'Descripcion de Samsung S21 '},
    {id: '3', name:'Ipad 8va generacion',price: 100,category: 'tablet', img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png', stock: 25,description: 'Descripcion de Samsung S21 '}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            resolve(products)
        },500)
    }
    )
}

export const getProductsById=(productId) => {
    return new Promise((resolve) => {
        setTimeout (()=> { 
        resolve (products.filter(prod=> prod.id === productId))
    }, 500)
}

    )
}


