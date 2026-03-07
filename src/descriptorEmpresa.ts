import Empresa from "./empresa"

export default class Descriptor {
    descrever(empresa: Empresa): void {
        console.log(`Razão social: ${empresa.razaoSocial}`)
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`)
        console.log(`cnpj: ${empresa.cnpj}`)
        console.log(`Endereço Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}\n`)
        
        console.log(`funcionários:`)
        for(let func of empresa.funcionarios) {
            console.log(`Nome: ${func.nome} matrícula: ${func.matricula} cpf: ${func.cpf} Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} numero: ${func.endereco.numero}\n`)
        }
    }
}