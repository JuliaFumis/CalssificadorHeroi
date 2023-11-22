let nome = prompt("Digite o nome do Heroi: ")
let xp = prompt("Digite a experiencia do seu Heroi: ")
let lvl, lvlRank

if (xp <= 1000) {
    lvl = "Ferro"
} else if (xp <= 2000) {
    lvl = "Bronze"
} else if (xp<= 5000) {
    lvl= "Prata"
} else if (xp<= 7000) {
    lvl= "Ouro"
} else if (xp<=8000) {
    lvl= "Platina"
} else if (xp<=9000) {
    lvl= "Ascendente"
} else if (xp<=10000) {
    lvl= "Imortal"
} else {
    lvl= "Radiante"
}
    console.log (` O herói de nome ${nome} está no nível ${lvl}`)

let vitorias = prompt("Digite a quantidade de vitorias")
let derrotas = prompt("Digite a quantidade de derrotas")

const saldoRankeadas = (vitorias, derrotas) => {
    return vitorias - derrotas
}

let saldoRanks = saldoRankeadas(vitorias, derrotas)

if (saldoRanks <= 10) {
    lvlRank = "Ferro"
} else if (saldoRanks <= 20) {
    lvlRank = "Bronze"
} else if (saldoRanks <= 50) {
    lvlRank = "Prata"
} else if (saldoRanks <= 80) {
    lvlRank = "Ouro"
} else if (saldoRanks <= 90) {
    lvlRank = "Diamante"
} else if (saldoRanks <= 100) {
    lvlRank = "Lendario"
} else  {
    lvlRank = "Imortal"
} 

console.log(`O Heroi tem de saldo ${saldoRanks} esta no nivel de ${lvlRank}`)