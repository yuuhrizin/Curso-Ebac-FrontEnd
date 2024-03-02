const alunos = [
    {nome: 'Gustavo', nota: 9.8},
    {nome: 'Julia', nota: 3.7},
    {nome: 'Paula', nota: 7.3},
    {nome: 'Carlos', nota: 6.0},
    {nome: 'Paulo', nota: 5.2},
    {nome: 'Wagner', nota: 5.5},
    {nome: 'João', nota: 8.1},
    {nome: 'Jairo', nota: 7.0},
    {nome: 'Carla', nota: 2.5}
];

const aprovacao = (aluno) => aluno.nota >= 6;

console.log(alunos.filter(aprovacao));