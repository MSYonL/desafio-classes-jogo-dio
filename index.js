/**
 * Desafio de Projeto: Escrevendo as classes de um Jogo
 * Objetivo: Criar uma classe genérica para representar heróis e seus ataques.
 */


class Hero {
    // Construtor para inicializar as propriedades do herói.
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    };
    // Método para definir a descrição do ataque conforme o tipo
    getAttackDescription() {
        // Estrutura de decisão usando um objeto para mapear os tipos
        let attackType = {
            "mago": "magia",
            "guerreiro": "espada",
            "artista marcial": "punhos e chutes"
        };
        return attackType[this.type.toLowerCase()] || "Golpe básico." // Retorna a descrição correspondente ou um ataque genérico.
    }
    // método ataque
    attack() {
        let attackDescription = this.getAttackDescription();
        console.log(`O heroí ${this.name} de idade ${this.age} anos, de classe ${this.type} atacou usando ${attackDescription} `);
    };

};

let heroes = [
    new Hero("Theodore", 31, "Mago"),
    new Hero("Randolph", 41, "Guerreiro"),
    new Hero("Lee Seol", 32, "Artista Marcial"),
    new Hero("Veronica", 45, "Maga") // Exemplo de classe fora da lista padrão.
];

heroes.forEach(hero => hero.attack()); // Executando o método de ataque para cada herói.