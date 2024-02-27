function Teclado(marca, modelo, peso, anoFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.peso = peso;
    this.anoFabricacao = anoFabricacao;
}

Teclado.prototype.informacoes = function () {
    return `A marca do teclado é ${this.marca}, o modelo é ${this.modelo}, o peso é ${this.peso} e o ano de fabricação é ${this.anoFabricacao}`;
};

function TecladoMecanico(marca, modelo, peso, anoFabricacao, tipoSwitch) {
    Teclado.call(this, marca, modelo, peso, anoFabricacao);
    this.tipoSwitch = tipoSwitch;
}

TecladoMecanico.prototype = Object.create(Teclado.prototype);
TecladoMecanico.prototype.constructor = TecladoMecanico;

function TecladoBluetooth(marca, modelo, peso, anoFabricacao, bateriaDuracao) {
    Teclado.call(this, marca, modelo, peso, anoFabricacao);
    this.bateriaDuracao = bateriaDuracao;
}

TecladoBluetooth.prototype = Object.create(Teclado.prototype);
TecladoBluetooth.prototype.constructor = TecladoBluetooth;


const teclado1 = new Teclado("Logitech", "K120", "500g", 2021);
const teclado2 = new TecladoMecanico("Corsair", "K95", "1.2kg", 2020, "Cherry MX Red");
const teclado3 = new TecladoBluetooth("Microsoft", "Surface", "600g", 2022, "20 hours");

console.log(teclado1.informacoes());
console.log(teclado2.informacoes() + ` - Tipo de Switch: ${teclado2.tipoSwitch}`);
console.log(teclado3.informacoes() + ` - Duração da bateria: ${teclado3.bateriaDuracao}`);
