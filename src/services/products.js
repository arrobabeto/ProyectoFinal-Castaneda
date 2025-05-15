const products = [
    { id: '1', title: 'Classic Leather Watch', category: 'classic', price: 120, stock: 10, description: 'Reloj elegante con correa de cuero clásica.' },
    { id: '2', title: 'Sport Chronograph', category: 'sport', price: 150, stock: 5, description: 'Reloj deportivo con cronógrafo y resistencia al agua.' },
    { id: '3', title: 'Minimalist Silver Watch', category: 'minimalist', price: 100, stock: 8, description: 'Diseño minimalista en caja plateada y correa metálica.' }
  ];
  const delay = ms => new Promise(res=>setTimeout(res,ms));
  export async function getProducts(){await delay(500);return products;}
  export async function getProductsByCategory(cat){await delay(500);return products.filter(p=>p.category===cat);}
  export async function getProductById(id){await delay(500);return products.find(p=>p.id===id);}