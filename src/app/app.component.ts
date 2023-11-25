import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  
  filmesAcao = [
    { titulo: 'O Pacto', descricao: 'Durante a guerra no Afeganistão, um intérprete arrisca sua vida para carregar um sargento ferido por quilômetros de terreno hostil em busca de um local seguro.', imagem: 'https://m.media-amazon.com/images/I/514LpBQzOfL._AC_UF894,1000_QL80_.jpg' },
    { titulo: '#Alive', descricao: 'Um vírus terrível destrói a cidade, e um homem se tranca no seu apartamento para sobreviver. Desconectado do mundo, ele tenta desesperadamente encontrar uma saída.', imagem: 'https://br.web.img3.acsta.net/pictures/20/05/27/08/29/4788868.jpg' },
    { titulo: 'Lucy', descricao: 'Lucy é obrigada a contrabandear drogas dentro do estômago. Mas o corpo da jovem absorve as substâncias e ela passa a ter superpoderes, como telepatia, telecinesia, a ausência de dor e a capacidade de adquirir conhecimento instantaneamente.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Lucy_%282014_film%29_poster.jpg/225px-Lucy_%282014_film%29_poster.jpg' },
    { titulo: 'Carter', descricao: 'Um homem acorda sem memória. Orientado por uma voz misteriosa vinda de um dispositivo em seu ouvido, ele parte em uma perigosa missão de resgate', imagem: 'https://br.web.img2.acsta.net/pictures/22/07/20/18/54/2288658.jpg' },
    { titulo: 'A bailarina', descricao: 'Sofrendo com a morte da melhor amiga após não conseguir protegê-la, uma antiga guarda-costas vai fazer de tudo para realizar seu último pedido: vingança.', imagem: 'https://t.ctcdn.com.br/Pfrnk7tw9WkBg3tDL01FQxFOc2A=/640x360/smart/i808067.png' },
  ];

  filmesComedia = [
    { titulo: 'Luck', descricao: 'A corajosa e azarada Sam Greenfield se aventura na encantada Terra da Sorte, onde terá que se aliar a criaturas mágicas para mudar seu destino', imagem: 'https://i.ytimg.com/vi/ylXHPR1H5Pc/maxresdefault.jpg' },
    { titulo: 'Leo', descricao: 'Após décadas preso na escola, o lagarto Leo planeja conseguir sua liberdade.', imagem: 'https://i1.sndcdn.com/artworks-F7awldumj8WAdbbX-ZzXf6Q-t500x500.jpg' },
    { titulo: 'Barbie', descricao: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.', imagem: 'https://br.web.img3.acsta.net/pictures/23/06/21/21/10/1335465.jpg' },
    { titulo: 'Gente Grande', descricao: 'A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.', imagem: 'https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg' },
    { titulo: 'A Candidata Honesta', descricao: 'Joo Sang-sook é uma política popular. Apesar de ser uma mentirosa costumaz, está perto de se reeleger. Porém, ela perde a capacidade de mentir, e sua vida política passa por uma reviravolta hilária.', imagem: 'https://media.fstatic.com/pXkmkCzOtKwK9fqWJT77V8p6eKM=/322x478/smart/filters:format(webp)/media/movies/covers/2020/11/BF.22143377.1.jpg' },
    
  ];


  filmesTerror = [
    { titulo: 'A queda', descricao: 'Para as melhores amigas Becky e Hunter, a vida é sobre vencer medos e ultrapassar limites. No entanto, depois de subir 600 metros até o topo de uma torre de rádio remota e abandonada, elas acabam presas lá em cima.', imagem: 'https://br.web.img2.acsta.net/pictures/22/10/04/19/16/5487644.jpg' },
    { titulo: 'Sorria', descricao: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma. Enquanto tenta escapar desse pesadelo, Rose também precisa enfrentar seu passado conturbado para sobreviver.', imagem: 'https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg' },
    { titulo: 'Pearl', descricao: 'Presa em uma fazenda isolada, Pearl deve cuidar de seu pai doente sob a vigilância de sua mãe. Desejando a vida glamouroso que ela viu nos filmes, as tentações e repressões de Pearl colidem.', imagem: 'https://pipocanamadrugada.com.br/site/wp-content/uploads/2023/02/Pearl-capa-725x375.jpg ' },
    { titulo: 'O Hospedeiro', descricao: 'Na beira do rio Han moram Hie-bong e sua família, donos de uma barraca de comida no parque. Seu filho mais velho, Kang-du, tem 40 anos, mas é um tanto imaturo. A filha do meio é arqueira do time olímpico coreano e o filho mais novo está desempregado.', imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/81/22/19961797.jpg' },
    { titulo: 'Invasão Zumbi', descricao: 'A Coreia do Sul decreta estado de emergência após um vírus desconhecido tomar conta do país. Algumas pessoas tentam fugir de zumbis e ficam presas em um trem-bala que está a caminho de Busan, a única cidade que não foi afetada pelo vírus.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/16/10/06/23/09/515438.jpg' },
    
  ];
}