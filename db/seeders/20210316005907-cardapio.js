'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cardapios', [
      {
        produto: 'Camarões Empanados',
        preco: 68.50,
        descricao: 'Deliciosos camarões empanados e temperados com nosso molho especial.',
        categoria: '1 - Aperitivos'
      },
      {
        produto: 'Asas de Frango Empanados',
        preco: 59.50,
        descricao: '10 sobreasas de frango empanadas com um blend de temperos à sua escolha.',
        categoria: '1 - Aperitivos'
      },
      {
        produto: 'Batatas Fritas com Queijo',
        preco: 58.50,
        descricao: 'Nossas fritas com uma cobertura irresistível com mix de queijos e bacon.',
        categoria: '1 - Aperitivos'
      },
      {
        produto: 'T-Bone',
        preco: 99.90,
        descricao: 'Cerca de 500g de um corte nobre e macio em formato de T: o encontro delicioso de contra-filet e filet mignon.',
        categoria: '2 - Steaks'
      },
      {
        produto: 'Strip Steak',
        preco: 89.90,
        descricao: '375g do corte nobre do contra-filet, perfeitamente temperado e preparado na chapa.',
        categoria: '2 - Steaks'
      },
      {
        produto: 'Costela de Boi',
        preco: 89.90,
        descricao: '325g da parte mais gostosa da costela bovina, com o bold flavour inconfundível da nossa mistura secreta de temperos.',
        categoria: '2 - Steaks'
      },
      {
        produto: 'Filet Mignon',
        preco: 109.90,
        descricao: 'São três cortes de filet mignon temperados com ervas finas, servidos com molho Merlot.',
        categoria: '2 - Steaks'
      },
      {
        produto: 'Fettuccine Al Chef',
        preco: 57.50,
        descricao: 'Fettuccine com champignons, tomates frescos e cortes de filet mignon. Refogado com um toque de vinho Chardonnay e black pepper.',
        categoria: '3 - Massas'
      },
      {
        produto: 'Fettuccine Primavera',
        preco: 68.50,
        descricao: 'Fettuccine tradicional com legumes e tiras de frango grelhado, refogado com um cremoso molho Alfredo e coberto com queijo parmesão (Grana Padano)',
        categoria: '3 - Massas'
      },
      {
        produto: 'Arroz Maluco',
        preco: 24.90,
        descricao: 'Arroz com lâminas de amêndoas crocantes, champignons, cebolinha, pimentão vermelho, um toque de limão e salsinha.',
        categoria: '4 - Acompanhamentos'
      },
      {
        produto: 'Caesar Salad',
        preco: 24.90,
        descricao: 'Combinação de alface, queijo Grana Padano, croutons e molho Caesar.',
        categoria: '4 - Acompanhamentos'
      },
      {
        produto: 'Batata Recheada',
        preco: 24.90,
        descricao: 'Batata assada recheada com requeijão, manteiga, mix de queijos, bacon e cebolinha.',
        categoria: '4 - Acompanhamentos'
      },
      {
        produto: 'Legumes ao Vapor',
        preco: 24.90,
        descricao: 'Brócolis, couve-flor, cenoura e ervilha torta preparados com manteiga ao vapor.',
        categoria: '4 - Acompanhamentos'
      },
      {
        produto: 'Petit Gateau',
        preco: 30.90,
        descricao: 'Nosso brownie exclusivo e quentinho com sorvete de baunilha e deliciosa calda de chocolate.',
        categoria: '5 - Sobremesas'
      },
      {
        produto: 'Milkshake',
        preco: 20.90,
        descricao: 'O delicioso milkshake, no sabor chocolate ou morango, servido na caneca congelada de 340 ml.',
        categoria: '5 - Sobremesas'
      },
      {
        produto: 'Queijo com Goiabada',
        preco: 15.40,
        descricao: 'Delicioso queijo mineiro com lascas da nossa maravilhosa goiabada cascão.',
        categoria: '5 - Sobremesas'
      },
      {
        produto: 'Sorvete',
        preco: 12.90,
        descricao: 'Sorvete nos sabores creme, chocolate, morango e doce de leite.',
        categoria: '5 - Sobremesas'
      },
      {
        produto: 'Chopp Brahma 340 ml',
        preco: 12.90,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Chopp Brahma 600 ml',
        preco: 19.90,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Refrigerante 500 ml',
        preco: 8.50,
        descricao: 'Coca-Cola, Coca-Cola Zero, Sprite, Fanta Laranja, Guaraná Antarctica e Guaraná Antarctica Zero',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Água 500 ml',
        preco: 6.50,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Água com Gás 500 ml',
        preco: 6.50,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Sucos Naturais',
        preco: 11.50,
        descricao: 'Laranja, Morango, Graviola e Açaí.',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Gin Tônica',
        preco: 26.90,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Aperol Spritz',
        preco: 24.50,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Caipirinha',
        preco: 16.50,
        descricao: '',
        categoria: '6 - Bebidas'
      },
      {
        produto: 'Café Espresso',
        preco: 6.50,
        descricao: '',
        categoria: '6 - Bebidas'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cardapios', null, {});
  }
};
