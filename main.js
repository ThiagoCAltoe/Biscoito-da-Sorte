const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let sorteS = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "A friend to all is a friend to none (Um amigo de todos é um amigo de ninguém) - Taylor Swift",
  "Love's a game, wanna play? (O amor é um jogo, quer jogar?) - Taylor Swift",
  "And if you never bleed, you're never gonna grow (E se você nunca sangrar, você nunca vai crescer) - Taylor Swift",
  "People throw rocks at things that shine (As pessoas atiram pedras em coisas que brilham) - Taylor Swift",
  "I could build a castle out of all the bricks they threw at me (Eu poderia construir um castelo com todos os tijolos que eles jogaram em mim) - Taylor Swift",
  "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind. (Não importa o que aconteça na vida, seja bom para as pessoas. Ser bom para as pessoas é um maravilhoso legado para deixar para trás.) - Taylor Swift",
  "If one thing had been different Would everything be different today? (Se uma coisa tivesse sido diferente, Será que tudo seria diferente hoje?) - Taylor Swift",
  "scary news is, you're on your own now. But the cool news is, you're on your own now (A notícia assustadora é que você está por sua conta agora, mas a boa notícia é que você está por sua conta agora) - Taylor Swift",
  "Never be so kind. You forget to be clever. Never be so clever. you forget to be kind. (Nunca seja tão gentil. Você se esquece de ser inteligente. Nunca seja tão inteligente. Você se esquece de ser gentil.) - Taylor Swift",
  "A friend to all is a friend to none (Um amigo de todos é um amigo de ninguém) - Taylor Swift",
  "Love's a game, wanna play? (O amor é um jogo, quer jogar?) - Taylor Swift",
  "And if you never bleed, you're never gonna grow (E se você nunca sangrar, você nunca vai crescer) - Taylor Swift",
  "People throw rocks at things that shine (As pessoas atiram pedras em coisas que brilham) - Taylor Swift",
  "I could build a castle out of all the bricks they threw at me (Eu poderia construir um castelo com todos os tijolos que eles jogaram em mim) - Taylor Swift",
  "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind. (Não importa o que aconteça na vida, seja bom para as pessoas. Ser bom para as pessoas é um maravilhoso legado para deixar para trás.) - Taylor Swift",
  "If one thing had been different Would everything be different today? (Se uma coisa tivesse sido diferente, Será que tudo seria diferente hoje?) - Taylor Swift",
  "scary news is, you're on your own now. But the cool news is, you're on your own now (A notícia assustadora é que você está por sua conta agora, mas a boa notícia é que você está por sua conta agora) - Taylor Swift",
  "Never be so kind. You forget to be clever. Never be so clever. you forget to be kind. (Nunca seja tão gentil. Você se esquece de ser inteligente. Nunca seja tão inteligente. Você se esquece de ser gentil.) - Taylor Swift",
  "A friend to all is a friend to none (Um amigo de todos é um amigo de ninguém) - Taylor Swift",
  "Love's a game, wanna play? (O amor é um jogo, quer jogar?) - Taylor Swift",
  "And if you never bleed, you're never gonna grow (E se você nunca sangrar, você nunca vai crescer) - Taylor Swift",
  "People throw rocks at things that shine (As pessoas atiram pedras em coisas que brilham) - Taylor Swift",
  "I could build a castle out of all the bricks they threw at me (Eu poderia construir um castelo com todos os tijolos que eles jogaram em mim) - Taylor Swift",
  "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind. (Não importa o que aconteça na vida, seja bom para as pessoas. Ser bom para as pessoas é um maravilhoso legado para deixar para trás.) - Taylor Swift",
  "If one thing had been different Would everything be different today? (Se uma coisa tivesse sido diferente, Será que tudo seria diferente hoje?) - Taylor Swift",
  "scary news is, you're on your own now. But the cool news is, you're on your own now (A notícia assustadora é que você está por sua conta agora, mas a boa notícia é que você está por sua conta agora) - Taylor Swift",
  "Never be so kind. You forget to be clever. Never be so clever. you forget to be kind. (Nunca seja tão gentil. Você se esquece de ser inteligente. Nunca seja tão inteligente. Você se esquece de ser gentil.) - Taylor Swift",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Acredite em si mesmo e todos acreditarão em você.",
  "A vida é uma aventura ousada ou nada.",
  "Acredite que você merece e o universo lhe dará.",
  "O primeiro passo para o sucesso é acreditar que você pode.",
  "A persistência é o segredo do êxito.",
  "Não deixe que o medo de falhar o impeça de tentar.",
  "Cada novo dia é uma oportunidade para recomeçar.",
  "Você é mais forte do que imagina.",
  "Grandes conquistas começam com pequenos passos.",
  "Seja a mudança que você deseja ver no mundo.",
  "Nunca é tarde demais para seguir seus sonhos.",
  "Acredite no poder dos seus sonhos e eles se tornarão realidade.",
  "Seja a pessoa que você gostaria de ter ao seu lado.",
  "O sucesso é alcançado através da determinação e da perseverança.",
  "Quanto maior o desafio, maior a oportunidade de crescimento.",
  "Seja gentil consigo mesmo durante o processo de autodescoberta.",
  "Cada obstáculo é uma oportunidade disfarçada.",
  "O fracasso não é o fim, é apenas uma lição para o próximo passo.",
  "Mantenha-se focado em seus objetivos, mesmo quando a jornada parecer difícil.",
  "A felicidade não é encontrada fora de você, mas dentro de você.",
  "Transforme seus obstáculos em trampolins para o sucesso.",
  "Cada dia é uma nova chance de fazer a diferença.",
  "Seja grato pelo que você tem enquanto trabalha pelo que você quer.",
  "Você é o autor da sua própria história. Escreva-a com coragem e determinação.",
  "A jornada pode ser difícil, mas a recompensa valerá a pena.",
  "Mantenha-se firme em sua visão, mesmo quando enfrentar dúvidas.",
  "A mudança começa quando você decide que é hora de algo novo.",
  "Não deixe que as opiniões dos outros o definam. Você é único e valioso.",
  "Celebre suas pequenas vitórias ao longo do caminho.",
  "Você é mais capaz do que imagina. Acredite em si mesmo.",
  "Cada passo na direção certa é um progresso.",
  "Mantenha-se firme em sua determinação, mesmo quando enfrentar adversidades.",
  "O sucesso não é uma linha reta, mas uma série de altos e baixos.",
  "Você é mais forte do que seus medos.",
  "Acredite no poder dos seus sonhos e trabalhe duro para alcançá-los.",
  "A vida é uma jornada. Aproveite o passeio.",
  "Não deixe que o desânimo o impeça de alcançar seus objetivos.",
  "Cada desafio é uma oportunidade para crescer e aprender.",
  "Seja corajoso o suficiente para seguir o caminho menos percorrido.",
  "Acredite que você pode e você está no meio do caminho.",
  "Não subestime o poder da persistência e da determinação.",
  "Acredite em si mesmo, mesmo quando ninguém mais acredita.",
  "O segredo do sucesso está em começar.",
  "Cada novo dia é uma página em branco. Escreva sua história com determinação.",
  "Não permita que o passado defina seu futuro. Você tem o poder de mudar.",
  "Seja paciente consigo mesmo enquanto trabalha em direção aos seus objetivos.",
  "Você é mais resiliente do que imagina. Supere seus desafios com coragem.",
  "Acredite no poder da sua voz e use-a para fazer a diferença.",
  "Cada fracasso é uma oportunidade para aprender e crescer.",
  "Mantenha-se focado em seus objetivos, mesmo quando enfrentar distrações.",
  "Nunca é tarde demais para começar de novo.",
  "A vida é cheia de altos e baixos. Aprenda a surfar nas ondas da mudança.",
  "Seja gentil consigo mesmo durante os tempos difíceis. Você está fazendo o melhor que pode.",
  "Acredite no seu potencial e trabalhe duro para alcançá-lo.",
  "Você é mais capaz do que imagina. Acredite em si mesmo e siga em frente.",
  "Não deixe que o medo o impeça de alcançar seus sonhos.",
  "Acredite na beleza dos seus sonhos e trabalhe duro para realizá-los.",
  "A persistência é a chave para superar qualquer desafio.",
  "Não permita que os obstáculos o impeçam de alcançar seus objetivos.",
  "Você é mais forte do que seus medos e mais corajoso do que imagina.",
  "Acredite que você pode e você está no caminho certo.",
  "Seja paciente consigo mesmo durante o processo de autodesenvolvimento.",
  "Acredite na sua capacidade de superar qualquer obstáculo.",
  "Seja corajoso o suficiente para seguir seus sonhos, mesmo quando parecer assustador.",
  "Cada novo dia é uma oportunidade para começar de novo.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "Não espere o futuro mudar sua vida, porque o futuro é a consequência do presente.",
  "Nada é impossível para quem pratica a perseverança.",
  "A vida é curta demais para que nós desperdicemos uma parte preciosa fingindo.",
  "Você sempre será a sua melhor companhia!",
  "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "Você perde 100% dos tiros que não dá.",
  "Não conte os dias, faça os dias contarem.",
  "Inspiração existe, mas tem que te encontrar trabalhando.",
  "Não espere por uma crise para descobrir o que é importante em sua vida.",
  "Você pode estar desapontado se falhar, mas você está condenado se não tentar.",
  "Lembre-se de que a felicidade é uma maneira de viajar, não um destino.",
  "O sucesso geralmente vem para aqueles que estão muito ocupados para procurar por ele.",
  "Não sei qual é a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos.",
  "Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.",
  "Eu não falhei. Eu apenas encontrei 10.000 maneiras que não funcionam.",
  "A ação é a chave fundamental para todo o sucesso.",
  "Não espere. O tempo nunca será o certo.",
  "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que está fazendo, você será bem sucedido.",
  "Eu não meço o sucesso de um homem pelo quão alto ele sobe, mas pelo quão alto ele salta quando atinge o fundo.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Eu acho que é possível para uma pessoa mudar o curso da sua vida. Eu acho que uma pessoa determinada pode mudar sua vida para melhor. E eu acho que uma pessoa com coragem é uma força da natureza.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
  "O sucesso não consiste em não errar, mas em nunca cometer o mesmo equívoco duas vezes.",
  "A persistência é o caminho do êxito.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "A paciência na adversidade é sinal de um coração sensível.",
  "A sorte favorece a mente bem preparada.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "Vencer é 90 por cento suor e 10 por cento de engenho.",
  "O amor está sempre mais próximo do que você imagina.",
  "Você é do tamanho do seu sonho.",
  "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
  "O conhecimento é a única virtude e a ignorância é o único vício.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Deixe de lado as preocupações e seja feliz.",
  "A vontade das pessoas é a melhor das leis.",
  "Nós somos o que pensamos.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
  "Motivação não é sinônimo de transformação, mas um passo em sua direção.",
  "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",
  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "Acredite em milagres, mas não dependa deles.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
];

let randomNumber = Math.floor(Math.random() * sorteS.length);

// Eventos //
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

function handleTryClick() {
  toggleScreen();
  screen2.querySelector("p").innerText = sorteS[randomNumber];
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.floor(Math.random() * sorteS.length);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
