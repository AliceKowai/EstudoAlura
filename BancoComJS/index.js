import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js";

const diretor =  new Diretor("Alice", 1000, 98743265411);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Gus",  5000, 34567890711);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Tavo", 65432109811, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


