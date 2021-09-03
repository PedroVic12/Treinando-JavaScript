function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  let turtle = makeTurtle(width/2, height/2)
  try{
  // ## Seu código ##
  
  // Quadrado
	/*
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
 */



// Loop em JS
// FOR

/* 
for (var i = 0; i < 4; i++ ){
turtle.forward(50)
turtle.right(90)
}
*/


//WHILE
turtle.setWeight(10)

function quadrado(){
	
	var c=0
	while (c<4){
	turtle.forward(100)
	turtle.right(90)
	c++
	}
}

quadrado()
turtle.penUp()
turtle.goto(0,0)
turtle.penDown()
turtle.setColor('#ccc')
quadrado()

//Estrutura de decisao:

//IF
//ELSE

var tamanhoDeImagem = 10 
if (tamanhoDeImagem >= 100){

	console.log('Imagem Grande')
}

	else if(10 < tamanhoDeImagem && tamanhoDeImagem < 100){
		console.log('Imagem adequada')
	}

	else{
		console.log('Imagem pequena')
	}











  // ## Seu Código ##
  } catch (e) { console.log(e) }
  noLoop()
}

function draw() {}
