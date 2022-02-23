/* eslint-disable @typescript-eslint/no-explicit-any */
import { Factory, Seeder } from "typeorm-seeding"
import { Connection, createQueryBuilder } from "typeorm"
import { Book } from "../entity/Book"
import { Review } from "../entity/Review"

export default class CreateBooksSeeds implements Seeder {

  public async run(_: Factory, connection: Connection): Promise<any> {
    const rows = await connection.getRepository(Book).count()
    
    if (rows <= 0) {
      await createQueryBuilder()
        .insert()
        .into(Book)
        .values([
          {
            id: 1,
            title: "Ponto De Impacto",
            author: "Dan Brown",
            publication_year: "2014",
            availability: true,
            publisher: "Arqueiro",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12100005/1006695716.jpg?v=637142215648330000"
          },
          {
            id: 2,
            title: "O Código da Vinci",
            author: "Dan Brown",
            publication_year: "2004",
            availability: true,
            publisher: "Arqueiro",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12099830/1006693584.jpg?v=637142215144970000"
          },
          {
            id: 3,
            title: "Harry Potter e A Pedra Filosofal 1 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: true,
            publisher: "Rocco",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12110250/1007739147.jpg?v=637142252496370000"
          },
          {
            id: 4,
            title: "Harry Potter e A Câmara Secreta 2 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: false,
            publisher: "Rocco",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12110251/1008325486.jpg?v=637142252498230000"
          },
          {
            id: 5,
            title: "Harry Potter e O Prisioneiro De Azkaban 3 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: true,
            publisher: "Rocco",
            url: "https://images-na.ssl-images-amazon.com/images/I/41kT95iZ81L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
          },
          {
            id: 6,
            title: "Harry Potter e O Cálice De Fogo 4 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: false,
            publisher: "Rocco",
            url: "https://images-na.ssl-images-amazon.com/images/I/51DDABrpU5L._SX346_BO1,204,203,200_.jpg"
          },
          {
            id: 7,
            title: "Harry Potter e A Ordem da Fênix 5 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: true,
            publisher: "Rocco",
            url: "https://images-na.ssl-images-amazon.com/images/I/41SknlxiqHL._SX346_BO1,204,203,200_.jpg"
          },
          {
            id: 8,
            title: "Harry Potter e O Enigma do Príncipe 6 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: true,
            publisher: "Rocco",
            url: "https://images-na.ssl-images-amazon.com/images/I/51msVf94L2L._SX346_BO1,204,203,200_.jpg"
          },
          {
            id: 9,
            title: "Harry Potter e As Relíquias da Morte 7 - Capa Dura",
            author: "J. K. Rowling",
            publication_year: "2017",
            availability: false,
            publisher: "Rocco",
            url: "https://images-na.ssl-images-amazon.com/images/I/51PoQ61oq-L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
          },
          {
            id: 10,
            title: "1984",
            author: "George Orwell",
            publication_year: "2009",
            availability: true,
            publisher: "Companhia Das Letras",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101548/1008972955.jpg?v=637142220125430000"
          },
          {
            id: 11,
            title: "A Revolução Dos Bichos",
            author: "George Orwell",
            publication_year: "2007",
            availability: true,
            publisher: "Companhia Das Letras",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/31749271/1011194375.jpg?v=637477702636000000"
          },
          {
            id: 12,
            title: "Drácula - Edição De Luxo",
            author: "Bram Stoker",
            publication_year: "2011",
            availability: false,
            publisher: "Pandorga",
            url: "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788537816196/dracula-edicao-bolso-de-luxo.jpg"
          },
          {
            id: 13,
            title: "A Culpa É Das Estrelas",
            author: "John Green",
            publication_year: "2014",
            availability: true,
            publisher: "Intrinseca",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103022/1006803643.jpg?v=637142225200500000"
          },
          {
            id: 14,
            title: "A Cinco Passos De Você",
            author: "Rachael Lippincott",
            publication_year: "2019",
            availability: false,
            publisher: "Globo Alt",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12114306/1006736459.jpg?v=637142267552630000"
          },
          {
            id: 15,
            title: "Deltora Quest - Vol. 1 - As Florestas do Silêncio*",
            author: "Emily Rodda",
            publication_year: "2014",
            availability: true,
            publisher: "Fundamento",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12104808/1009203415.jpg?v=637142231577470000"
          },
          {
            id: 16,
            title: "Eu Sou o Número Quatro - Vol. 1 - Série Os Legados de Lorien",
            author: "  Pittacus Lore",
            publication_year: "2011",
            availability: true,
            publisher: "Intrinseca",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12102231/1006803080.jpg?v=637142222233500000"
          },
          {
            id: 17,
            title: "As Crônicas De Nárnia - Volume Único",
            author: "Clive Staples Lewis",
            publication_year: "2009",
            availability: false,
            publisher: "Wmf Martins Fontes",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101382/1009410142.jpg?v=637142219587830000"
          },
          {
            id: 18,
            title: "Felicidade - Modos De Usar",
            author: "Mario Sergio Cortella",
            publication_year: "2019",
            availability: true,
            publisher: "Planeta do Brasil",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12704918/1010086493.jpg?v=637154233963100000"
          },
          {
            id: 19,
            title: "Rápido e Devagar - Duas Formas de Pensar",
            author: "Daniel Kahneman",
            publication_year: "2012",
            availability: true,
            publisher: "Objetiva",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103040/1008970880.jpg?v=637142225254930000"
          },
          {
            id: 20,
            title: "Atitude Mental Positiva",
            author: "Napoleon Hill",
            publication_year: "2015",
            availability: true,
            publisher: "Citadel",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12105749/1008901283.jpg?v=637142235421900000"
          },
          {
            id: 21,
            title: "O Poder da Ação",
            author: "Paulo Vieira",
            publication_year: "2015",
            availability: false,
            publisher: "Gente",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/31772028/1011207567.jpg?v=637521005200270000"
          },
          {
            id: 22,
            title: "Crepúsculo - Livro 1",
            author: "Stephenie Meyer",
            publication_year: "2008",
            availability: true,
            publisher: "Intrinseca",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101115/1006788625.jpg?v=637142218757700000"
          },
          {
            id: 23,
            title: "Maze Runner - Correr ou Morrer",
            author: "James Dashner",
            publication_year: "2010",
            availability: true,
            publisher: "Plataforma 21",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/31762146/1011245784.jpg?v=637487382669400000"
          },
          {
            id: 24,
            title: "Moby Dick",
            author: "Herman Melville",
            publication_year: "1968",
            availability: false,
            publisher: "Collectible Classics",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/297227/1005257536.jpg?v=636967223633530000"
          },
          {
            id: 25,
            title: "Sherlock Holmes em : Um Estudo em Vermelho",
            author: "Arthur Conan Doyle",
            publication_year: "1998",
            availability: true,
            publisher: "L&PM",
            url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12053569/1009568419.jpg?v=637141922835470000"
          }
        ])
        .execute().then(
          async ( )=>{
            await createQueryBuilder()
              .insert()
              .into(Review)
              .values([
                {
                  book: { id: 1},
                  comment: "Como Dan Brown consegue sempre segurar as pessoas em cada novo capítulo de suas histórias, nesse livro ele não economiza esforços. Agora só me falta ler \"Fortaleza Digital\", dentro todos os outros cinco títulos do autor, a história que mais me encantou pelo desenrolar do enredo, foi esse livro. O autor te faz entrar na história e se sentir um personagem vívido da trama. Fiquei en-can-ta-da com o disfecho, e pela segunda vez, surpresa ao perceber que, o que eu achava que aconteceria no desfecho da trama, não chegava NEM PERTO do que o Dan Brown tinha escolhido para fechar com chave de ouro. Um livro maravilho que fará com que, qualquer um que comece a lê-lo, não pare ate a última palavra do epílogo. Como sempre, super recomendado a leitura. Sou fã do autor, e pra mim, na atualidade, ele está se concretizando como um ícone, exemplo e ponto de referência quando o assunto é uma boa leitura. Vale a pena entrar nessa história.",
                  date: "22/08/2016",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 1},
                  comment: "Uma leitura dinâmica e uma história com riqueza de elementos interconectados. É, sem dúvida, um dos melhores suspenses!\n" +
                       "Num comparativo, quase empata com O Código Da Vinci. É melhor que Fortaleza Digital e, disparado, melhor que O Símbolo Perdido.",
                  date: "15/11/2017",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 2},
                  comment: "O livro é fantástico, te prende do começo ao fim e te deixa com uma pitadinha de querer mais. Os detalhes que o autor coloca em suas palavras é de surpreender, uma linguagem tranquila de fácil compreensão, contudo, apresenta muitas palavras ricas e que enriquecem o seu vocabulário. O que mais me surpreendeu neste livro, como já disse, são os detalhes, como ele explica as histórias que compõe a trama, te da vontade de pesquisar as sociedades que são citadas e desmistificadas durante o decorrer da leitura. Dan Brown, considero uns dos melhores escritores dessa geração e gerações futuras. \r\n" +
                       "\n" +
                       "Super recomendo a leitura, tanto para quem não tem o habito de leitura, quanto para aqueles fanáticos que não conseguem passar um dia ser ler.",
                  date: "04/04/2017",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 2},
                  comment: "Não é atoa que ele é um sucesso de público e crítica, o livro é espetacular, li o livro após ter visto o filme e digo, vale muito a pena ler o livro, pois o filme suprimiu várias partes do livro e algumas coisas podem ter ficado sem explicação. A obra é espetacular, o autor é fantástico, enfim, não tem erro.",
                  date: "23/02/2016",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 3},
                  comment: "-CAPA E CONTRACAPA:\n" +
                       "Prós: A capa possui uma linda ilustração, tendo um easter egg (a coruja sobre os galhos que formam um raio referente à cicatriz de Harry). A capa dura é fosca e tem um toque aveludado, o que a torna confortável de se tocar, e o título é em metálico dourado. A lombada é basicamente no mesmo estilo que a capa.\n" +
                       "Contras: Pelo fato de a capa ter um toque aveludado, ela marca facilmente manchas de suor e oleosidade, que não saem com tanta facilidade. Além disso, a contracapa não possui nenhuma ilustração extra, apenas a sinopse da história. Deve-se ter cuidado com os títulos também porque eles podem acabar se desgastando e sumindo.\n" +
                       "\n" +
                       "-FOLHAS:\n" +
                       "Prós: A folha é do tipo papel pólen bold, ou seja, aquele papel amarelado meio áspero. As folhas estão em uma grossura pouco fina perfeitamente ajustada para que, junto à asperidade, torne-se um papel muito gostoso e confortável ao toque. Além disso, as folhas não são coladas na capa, e sim costuradas, o que faz com que elas dificilmente se soltem. \n" +
                       "Contras: não há nenhuma ilustração no início dos capítulos (o que não é tão agravante na verdade, já que nem mesmo a versão britânica original possui). As letras estão num tamanho levemente menor que o normal (o que pra mim não causa nenhum incômodo, porém algumas pessoas não gostam).\n" +
                       "\n" +
                       "-HISTÓRIA:\n" +
                       "Bom, não há muito o que eu possa dizer sobre a história. É simplesmente perfeita e envolve o leitor dentro de seu universo. É rica em detalhes e possui muitas reviravoltas pelas quais você jamais esperaria. Totalmente recomendável, pode confiar nela de olhos fechados.\n" +
                       "\n" +
                       "CONCLUSÃO:\n" +
                       "É uma das melhores edições de Harry Potter que há no Brasil. Apresentei os seus contras, porém em minha perspectiva eles não são muito relevantes, e os prós fazem valer a pena comprá-la. Além de maravilhosa, é bastante duradoura. Então, basicamente aconselho que comprem-na. :D",
                  date: "24/10/2018",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 3},
                  comment: "Comparada às demais edições esta possui uma maior qualidade e durabilidade.\n" +
                       "\n" +
                       "O único ponto fraco é que a capa junta bastante marca de dedos, principalmente para quem tem pele oleosa. Porém, nada que um pano seco e macio não limpe.\n" +
                       "Quanto à qualidade das paginas (algo que vi ser objetivo de reclamação de alguns) não tenho nenhum comentário de grande relevância para fazer. As páginas são em folhas amareladas, e em minha opinião, não demonstram fragilidade.",
                  date: "17/12/2017",
                  rating: "5",
                  title: "Achei incrível."
                },
                {
                  book: { id: 4},
                  comment: "Sempre fui um fã da saga Harry Potter, porém, apenas dos filmes. Sempre tive vontade de ler os livros, mas confesso que nunca tinha ido atrás, pois as edições anteriores não me agradavam pois não possuíam uma boa fonte e folha amarelas(que ajudam muito na leitura, pois folhas brancas cansam a vista). Porém essa edição superou todas as expectativas!! Todos os livros possuem artes extremamente lindas e recheadas de easter eggs, capa dura(o que torna as edições mais bonitas na estante) e o principal: folhas amarelas!! Quando bati o olho nessa edições em uma loja física, eu precisei comprar!! Mas comprei pelo site, pois, como sempre a Saraiva possuí ótimos descontos e a entrega é sempre muito rápida!! Recomendo muito para quem quiser conhecer essa saga maravilhosa!! <3",
                  date: "29/09/2017",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 4},
                  comment: "Esse rapaz se tornou um mártir do pensamento, se comporta como um revolucionário. ",
                  date: "25/09/2017",
                  rating: "5",
                  title: "Gostei muito."
                },
                {
                  book: { id: 5},
                  comment: "Sempre fui um fã da saga Harry Potter, porém, apenas dos filmes. Sempre tive vontade de ler os livros, mas confesso que nunca tinha ido atrás, pois as edições anteriores não me agradavam pois não possuíam uma boa fonte e folha amarelas(que ajudam muito na leitura, pois folhas brancas cansam a vista). Porém essa edição superou todas as expectativas!! Todos os livros possuem artes extremamente lindas e recheadas de easter eggs, capa dura(o que torna as edições mais bonitas na estante) e o principal: folhas amarelas!! Quando bati o olho nessa edições em uma loja física, eu precisei comprar!! Mas comprei pelo site, pois, como sempre a Saraiva possuí ótimos descontos e a entrega é sempre muito rápida!! Recomendo muito para quem quiser conhecer essa saga maravilhosa!! <3",
                  date: "29/09/2017",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 5},
                  comment: "Prisioneiro de Azkaban é com toda a certeza do universo o meu livro preferido de Harry Potter, tem tanta coisa, fala sobre os marotos e tira muitas duvidas dos fãs, fora que na maioria das vezes é o que tem a capa mais bonita(na minha opinião, claro). ",
                  date: "06/10/2017",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 6},
                  comment: "Achei ele impressionante. Eu passei o final de semana lendo sem parar. É fácil perder noção do tempo.",
                  date: "16/07/2019",
                  rating: "5",
                  title: "Gostei muito."
                },
                {
                  book: { id: 7},
                  comment: "Um dos livros mais impressionantes que já li. Ficava mais envolvido a cada página.",
                  date: "27/10/2019",
                  rating: "5",
                  title: "Gostei muito."
                },
                {
                  book: { id: 8},
                  comment: "Esse livro é incrível, a história é incrível. O livro Conta com um excelente acabamento, sem dúvida é a melhor edição. Com relação ao envio a Saraiva está de parabéns.",
                  date: "29/12/2017",
                  rating: "5",
                  title: "Recomendo para quem não conhece."
                },
                {
                  book: { id: 8},
                  comment: " muito bom",
                  date: "03/10/2017",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 9},
                  comment: "A história é muito emocionante. Com certeza o melhor livro da serie.",
                  date: "26/09/2017",
                  rating: "5",
                  title: "Gostei muito."
                },
                {
                  book: { id: 9},
                  comment: "Its de best book I ever read, the best of the 7. The story is wonderful, the characters are even more. Do you feel insiste the book, just lover!! The price ir really high, but here is the best price ever!! You will love it ",
                  date: "12/06/2019",
                  rating: "5",
                  title: "Achei incrível."
                },
                {
                  book: { id: 10},
                  comment: "Perturbador e instigante.",
                  date: "13/06/2020",
                  rating: "5",
                  title: "Gosto desse estilo."
                },
                {
                  book: { id: 10},
                  comment: "Nada como 1984 para nos abrir os olhos para a atualidade. O livro é muito bom, desde que o entendamos. Lê-lo implica conectar cada fato com o presente e com o que há por vir.",
                  date: "28/04/2020",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 11},
                  comment: "Um dos melhores livros que eu já li. Apesar de ser um livro escrito em um determinado contexto sócio-político, parece mais atual que nunca.\r\n" +
                       "Definitivamente um livro para fazer pensar e avaliar a atual situação da sociedade com outros olhos.",
                  date: "07/04/2016",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 11},
                  comment: "Um dos melhores livros que eu já li. Apesar de ser um livro escrito em um determinado contexto sócio-político, parece mais atual que nunca.\r\n" +
                       "Definitivamente um livro para fazer pensar e avaliar a atual situação da sociedade com outros olhos.",
                  date: "07/04/2016",
                  rating: "5",
                  title: "Não esperava menos."
                },
                {
                  book: { id: 12},
                  comment: "A edição é sem dúvida MUITO bonita e bem produzida esteticamente. Para quem coleciona e nem se importa tanto com o conteúdo, vale 100% a pena. É daqueles livros que ficam lindos na estante.\n" +
                       "\n" +
                       "No entanto, NÃO posso recomendar essa edição por dois motivos:\n" +
                       "\n" +
                       "O primeiro é que há muitos desvios gramaticais. Há pelo menos uma meia dúzia em cada capítulo, que te tiram da imersão na história e incomodam, pela quantidade e frequência com que aparecem. Orações incompletas, pontuação mal colocada, alguns erros de escrita mesmo. Parece que não passaram uma revisão no texto e, se o fizeram, não foi muito atenciosa.\n" +
                       "\n" +
                       "O segundo motivo é que a tradução parece estranha. Comparei com uma edição digital pela Editora Zahar e notei algumas diferenças. Por exemplo: na tradução da Pandorga, em um certo trecho diz-se tenho certeza que não foi um sonho porque meu relógio estava sem corda. Na edição da Zahar, o personagem acrescenta logo depois que eu sempre dou corda toda noite. Porque esse detalhe foi omitido na edição da Pandorga? Não sei dizer, mas preferi a edição da Zahar.\n" +
                       "\n" +
                       "Por essas duas razões, creio que quem comprar com a intenção de realmente ler a obra, especialmente se for pela primeira vez, irá se decepcionar. Para colecionadores, vale totalmente a pena.",
                  date: "21/04/2020",
                  rating: "3",
                  title: "Não esperava menos."
                },
                {
                  book: { id: 12},
                  comment: "Repleto de erros gramaticais que tornam a experiência completamente frustrante. A história é incrível e muito envolvente, mas a editora, sem dúvidas, é uma vergonha. Não recomendo essa edição. Existem outras até mais baratas e que realmente entregam um conteúdo de qualidade em todos os aspectos.",
                  date: "04/01/2021",
                  rating: "3",
                  title: "Gostei muito."
                },
                {
                  book: { id: 13},
                  comment: "Nunca me cansarei de ler algo tão incrível quanto A Culpa É Das Estrelas! Quanto mais lia, mais me apegava aos personagens, que sentimento mais gostoso. Recomendo demais.",
                  date: "08/03/2018",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 13},
                  comment: "Adorei o livro, nos faz pensar que nada nessa vida é impossível e para o amor não existe idade, saúde física ou mental! Maravilhoso e surpreendente!",
                  date: "05/03/2014",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 14},
                  comment: "História linda e escrita que cativa! Nos faz lembrar do bom e velho A Culpa é das Estrelas, primeiro romance que li!",
                  date: "13/06/2019",
                  rating: "5",
                  title: "Gosto desse estilo."
                },
                {
                  book: { id: 14},
                  comment: "História linda e escrita que cativa! Nos faz lembrar do bom e velho A Culpa é das Estrelas, primeiro romance que li!",
                  date: "13/06/2019",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 15},
                  comment: "De aparência não parece dos melhores. Mas acalme-se! Nunca julgue um livro pela capa! Eu li o volume 1 e me apaixonei pelo drama criado pela autora! Simplesmente fantástico. Uma literatura juvenil divertida. Esse livro irá te prender a tarde inteira! Uma leitura fácil de compreender e rápida de ler. Uma história sensacional. Recomendo muito!",
                  date: "01/08/2016",
                  rating: "5",
                  title: "Recomendo para quem não conhece."
                },
                {
                  book: { id: 15},
                  comment: "Li as 4 primeiras edições e a história realmente me prendeu. Recomendo",
                  date: "03/01/2018",
                  rating: "4",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 16},
                  comment: "Você é aquela pessoa que já viu o filme, mas achou a história fraca? Ou, quem sabe, viu a história é gostou pra caramba, mas sente que faltou algo? Então o livro é perfeito pra você!\n" +
                       "\n" +
                       "Está ouvindo falar do livro agora? Gosta de ação, sci-fi e heróis? Mesmo que não tenham exatamente herói, essa história também é perfeita pra você!\n" +
                       "\n" +
                       "Eu recomendo esse livro pra qualquer pessoa que eu conheça, essa saga é maravilhosa, mas pra algumas pessoas (como foi pra mim) a primeira parte do livro pode ser um pouco cansativa, porque não ainda estamos conhecendo os personagens.",
                  date: "07/03/2018",
                  rating: "5",
                  title: "Achei incrível."
                },
                {
                  book: { id: 16},
                  comment: "Livro incrível, historia envolvente e muito bem feita. Recomendo a todos!",
                  date: "15/01/2018",
                  rating: "5",
                  title: "Recomendo para quem não conhece."
                },
                {
                  book: { id: 17},
                  comment: "Chegou hoje, novinho, lindo, cheiroso... Que capa linda *o*\r\n" +
                       "Folheando algumas páginas, como posso descrever?\r\n" +
                       "O livro Crônicas De Nárnia é incomparável... Desconto incrível sobre um produto de qualidade indiscutível...\r\n" +
                       "Obrigado a Saraiva e TransFolha, 100% recomendável...",
                  date: "18/10/2016",
                  rating: "5",
                  title: "Vontade de ler repetidamente."
                },
                {
                  book: { id: 17},
                  comment: "O tamanho do livro pode assustar um pouco, mas depois que a leitura Inicia, não dá vontade de parar. \n" +
                       "Perfeito em todos os detalhes, história cativante e cheia de significado.",
                  date: "04/07/2018",
                  rating: "5",
                  title: "Gosto desse estilo."
                },
                {
                  book: { id: 18},
                  comment: "Maravilhoso. Leitura rápida, fluida e que mostra visões diferentes sobre a felicidade. Vale a pena! Te coloca para refletir ..",
                  date: "20/01/2021",
                  rating: "5",
                  title: "Gosto desse estilo."
                },
                {
                  book: { id: 18},
                  comment: "Livro inteligentíssimo, culto e com uma linguagem fácil de aplicar-mos no dia-a-dia",
                  date: "03/08/2019",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 19},
                  comment: "Comprei na época em que estava escrevendo minha monografia e, apesar de ser o primeiro contato com a economia comportamental, pude entender e aprender com clareza os conceitos. É um livro maravilhoso, não só para economistas, mas para todos aqueles que querem conhecer sua própria forma de pensar, para, assim, poderem tomar decisões mais conscientes e racionais. Super recomendo!!!",
                  date: "25/01/2018",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 19},
                  comment: "Não é livro pra mente limitada. Precisa ter uma boa noção e paixão por psicologia. A escrita nos faz imergir nas águas da razão e emoção. Super recomendado.",
                  date: "09/11/2017",
                  rating: "5",
                  title: "Recomendo para quem não conhece."
                },
                {
                  book: { id: 20},
                  comment: "ótimo estimulante mental.",
                  date: "10/04/2019",
                  rating: "5",
                  title: "Terminei em uma semana."
                },
                {
                  book: { id: 20},
                  comment: "Vale a pena ler",
                  date: "19/06/2019",
                  rating: "5",
                  title: "Gosto desse estilo."
                },
                {
                  book: { id: 21},
                  comment: "Livro excelente. A única coisa em que creio que o autor peca, é usar demais os simbolismos da sua religião pessoal. \r\n" +
                       "\r\n" +
                       "Os conceitos apresentados são simplesmente o que há de melhor no aprimoramento humano, mas como um espírita, um umbandista, um ateu ou até um muçulmano poderiam ler a obra sem por em xeque apenas o ponto de vista e exemplos cristão-evangélicos?\r\n" +
                       "\r\n" +
                       " Nada contra a crença pessoal de cada um, mas um trabalho tão amplo e fundamentado como o deste livro pode cair no campo das crendices, mesmo o autor sendo phD e professor reconhecido em vários países.",
                  date: "19/02/2016",
                  rating: "5",
                  title: "Não esperava menos."
                },
                {
                  book: { id: 21},
                  comment: "Gostei muito , muda nossas crenças e conceitos de vida .",
                  date: "02/08/2018",
                  rating: "5",
                  title: "Vontade de ler repetidamente."
                },
                {
                  book: { id: 22},
                  comment: "Fui a loja física perto da minha cidade. Eu já li esse livro e amo, sem contar que o atendimento foi ótimo, cinco estrelas.",
                  date: "29/03/2020",
                  rating: "5",
                  title: "Achei incrível."
                },
                {
                  book: { id: 22},
                  comment: "Livro simplesmente maravilhoso!!\n" +
                       "O filme já é incrível e o livro consegue ser ainda melhor, a história prende o leitor do início ao fim. Não é atoa que li ele em tão pouco tempo.",
                  date: "03/07/2019",
                  rating: "5",
                  title: "Dificil parar de ler."
                },
                {
                  book: { id: 23},
                  comment: "Decidi ler após ver o filme e o livro é muito bom! Tem vários detalhes fantásticos que não são contados no filme.\r\n" +
                       "\r\n" +
                       "Sobre o livro, caso alguém tenha dúvida, ele tem ORELHA :)",
                  date: "03/06/2015",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 23},
                  comment: "Gente, comprei este livro na Saraiva Online já faz um mês, e só agora estou indo deixar meus comentários sobre o mesmo: Correr ou morrer é um dos melhores livros de ficção cientifica/distopia da atualidade. È uma leitura fantástica. O leitor é apresentado á um mundo pós-apocalíptico incrível onde esta acontecendo diversas coisas misteriosas! O livro tem muito, mas muito mistério, e as respostas vão sendo reveladas bem lentamente. O final deste livro é SENSACIONAL! Muito bem escrito, bolado e a trama é mesmo fabulosa. Vale muito á pena ler! Eu recomendo a compra na Saraiva Online, veja que sempre tem promoções de livros e os preços estão sempre acessíveis! Vale á pena.",
                  date: "04/08/2014",
                  rating: "5",
                  title: "Não esperava menos."
                },
                {
                  book: { id: 24},
                  comment: "Um livro cheio de aventura e com uma descrição feito pelo autor de arrasar. É um livro feito para quem gosta de uma boa navegação e uma boa fantasia realística.",
                  date: "14/10/2016",
                  rating: "5",
                  title: "Mais um lançamento de sucesso."
                },
                {
                  book: { id: 25},
                  comment: "Nessa primeira aventura de Sherlock Holmes e Dr. Watson, encontramos uma história que nos empolga do início ao fim. Com sua análise, Dr. Watson fala a respeito do trabalho minucioso de investigação que seu companheiro de quarto realiza para desvendar neste primeiro caso da dupla. É um livro incrível para quem quer conhecer como funciona o raciocínio dedutivo e quem quer adentrar no mundo da literatura policial.",
                  date: "27/06/2017",
                  rating: "5",
                  title: "Não esperava menos."
                },
                {
                  book: { id: 25},
                  comment: "Sherlock Holmes é o tipo de personagem que te deixa impressionado e esse livro mostra como ele é incrível!!!",
                  date: "22/08/2016",
                  rating: "5",
                  title: "Gosto desse estilo."
                }
              ])
              .execute()
          }
        )
    }
  }
}