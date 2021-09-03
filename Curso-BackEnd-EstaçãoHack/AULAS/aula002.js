// ------------ AULA 1 BACK END---------------


//Variavel LET --> ela vai existir somente dentro do escopo onde ela foi declarada

// 3 escopos: Gloval, função e bloco

function teste_var_let(){
	//escopo da função
	console.log('Escopo dentro da função: '+ anime)

if(true){
			var anime3 = 'Avatar'
		}

		console.log('Escopo dentro da função: ' + anime3)

}


if(true){
	//escopo de bloco
	var anime = 'Dragon ball z'
	let anime2 = 'Pokemon'
	console.log('Escopo dentro do bloco: ' + anime2)
	teste_var_let()
}

// escopo global(todo documento)
console.log('Escopo global: ' + anime)

//-------------------------------------

// Função seta =>

//() => {} mesma coisa que function nome(){}

var soma = (num1, num2) => {
	return num1 + num2
}

console.log(soma(20,10))

//----------------------------
// Array

let semaforo = ['vermelho','amarelo', 'verde']


semaforo.forEach(cor => {
	console.log(cor)
})

//------------------------------------
// objetos
let carro = {
	acessorios: ['calha de chuva', 'alarme'],

	buzinar: () => console.log('bi,bi,bi...')
}

carro.buzinar()


// Deestruturação de Objetos

let { acessorios } = carro

carro.acessorios[0]
//console.log(acessorios[0])

//JSON: a construção do nosso objeto carro foi feita seguindo o p padrao JSON, onde temos uma chave e um respectivo valor
console.log(carro)



