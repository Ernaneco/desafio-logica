class heroi {
    constructor(nome, idade, tipo) {
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    // Método atacar
    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}
let newMago = new heroi("Gandalf", "Velho", "mago");
let newGuerreiro = new heroi("Aragorn", "Adulto", "guerreiro");

newMago.atacar();
newGuerreiro.atacar();