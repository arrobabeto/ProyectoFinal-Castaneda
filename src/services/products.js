const products = [
    { id: '1', title: 'Seiko 5 SNK809', category: 'Seiko', price: 145, stock: 12, description: 'Reloj automático Seiko 5 de estilo militar, con caja de 37mm y correa de nylon.' },
    { id: '2', title: 'Seiko Prospex SRP777', category: 'Seiko', price: 495, stock: 5, description: 'Icono diver reeditado, resistente al agua 200m y movimiento automático 4R36.' },
    { id: '3', title: 'Seiko Presage Cocktail Time', category: 'Seiko', price: 420, stock: 7, description: 'Reloj de vestir con esfera texturizada y movimiento automático 4R35.' },
    
    { id: '4', title: 'Tissot Le Locle Powermatic 80', category: 'Tissot', price: 650, stock: 8, description: 'Clásico suizo con reserva de marcha de 80h y esfera decorada.' },
    { id: '5', title: 'Tissot PRX 40 205', category: 'Tissot', price: 375, stock: 9, description: 'Diseño retro integrado, caja de acero de 40mm y movimiento quartz.' },
    { id: '6', title: 'Tissot Seastar 1000', category: 'Tissot', price: 525, stock: 4, description: 'Diver profesional 300m con bisel unidireccional y movimiento Powermatic 80.' },
    
    { id: '7', title: 'Longines HydroConquest', category: 'Longines', price: 1250, stock: 6, description: 'Reloj de buceo elegante, resistencia 300m y cerámica en bisel.' },
    { id: '8', title: 'Longines Conquest Classic', category: 'Longines', price: 1150, stock: 10, description: 'Clásico moderno con brazalete de acero y esfera plateada.' },
    { id: '9', title: 'Longines Master Collection', category: 'Longines', price: 1750, stock: 3, description: 'Complicación automática con cronógrafo y cristal de zafiro.' }
  ];
  const delay = ms => new Promise(res=>setTimeout(res,ms));
  export async function getProducts(){await delay(500);return products;}
  export async function getProductsByCategory(cat){await delay(500);return products.filter(p=>p.category===cat);}
  export async function getProductById(id){await delay(500);return products.find(p=>p.id===id);}