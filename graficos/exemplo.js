//CRIANDO UM GRÁFICO DE LINHAS
new Morris.Line({
    // ID do elemento onde o gráfico vai aparecer.
    element: 'graficoDeLinha',

    resize: true,
    
    // Dados que preenchem o gráfico
    //Esse bloco é um objeto JSON
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2013', value: 30 },
      { year: '2014', value: 50 }
    ],
    
    //O nome do atributo de registro de dados que contém valores de x
    xkey: 'year',
    
    // Uma lista de nomes de atributos de registro de dados que contêm valores y.
    ykeys: ['value'],
    
    // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
  });

//CRIANDO UM GRÁFICO DE BARRAS
  new Morris.Bar({
    // ID do elemento onde o gráfico vai aparecer.
    element: 'graficoDeBarra',

    resize: true,
    
    // Dados que preenchem o gráfico
    //Esse bloco é um objeto JSON
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2013', value: 30 },
      { year: '2014', value: 50 }
    ],
    
    //O nome do atributo de registro de dados que contém valores de x
    xkey: 'year',
    
    // Uma lista de nomes de atributos de registro de dados que contêm valores y.
    ykeys: ['value'],
    
    // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
  });

//CRIANDO UM GRÁFICO DE AREA
  new Morris.Area({
    // ID do elemento onde o gráfico vai aparecer.
    element: 'graficoDeArea',

    resize: true,
    
    // Dados que preenchem o gráfico
    //Esse bloco é um objeto JSON
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2013', value: 30 },
      { year: '2014', value: 50 }
    ],
    
    //O nome do atributo de registro de dados que contém valores de x
    xkey: 'year',
    
    // Uma lista de nomes de atributos de registro de dados que contêm valores y.
    ykeys: ['value'],
    
    // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
  });

//CRIANDO UM GRÁFICO DE DONUTS
new Morris.Donut({
    // ID do elemento onde o gráfico vai aparecer.
    element: 'graficoDeDonut',

    resize: true,
    
    // Dados que preenchem o gráfico
    //Esse bloco é um objeto JSON
    data: [
        {label: "Dna Florinda", value: 750},
        {label: "Dna Clotilde", value: 820},
        {label: "Seu Madruga", value: 945}
      ],
    
    //O nome do atributo de registro de dados que contém valores de x
    xkey: 'year',
    
    // Uma lista de nomes de atributos de registro de dados que contêm valores y.
    ykeys: ['value'],
    
    // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
    // gráfico.
    labels: ['Value']
  });