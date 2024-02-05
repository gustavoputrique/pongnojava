//Posição e tamanho da bolinha
let xBolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = 12.5;

//Velocidade da bolinha
let VelocidadeDaBolinhaX = 6;
let velocidadeDaBolinhaY = 6;

//Raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

// Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu=false;
//Placar
let meusPontos=0;
let pontosOponente=0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
  colideRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
  
  
  
  
  
  
  
  
  
  //Posição e tamanho da bolinha
2
let xBolinha = 300;
3
let ybolinha = 200;
4
let diametro = 25;
5
let raio = 12.5;
6
​
7
//Velocidade da bolinha
8
let VelocidadeDaBolinhaX = 6;
9
let velocidadeDaBolinhaY = 6;
10
​
11
//Raquete
12
let xRaquete = 5;
13
let yRaquete = 150;
14
let RaqueteComprimento = 10;
15
let RaqueteAltura = 90;
16
​
17
// Raquete Oponente
18
let xRaqueteOponente = 585;
19
let yRaqueteOponente = 150;
20
let velocidadeYOponente;
21
let colidiu=false;
22
//Placar
23
let meusPontos=0;
24
let pontosOponente=0;
25
​
26
function setup() {
27
  createCanvas(600, 400);
28
}
29
​
30
function draw() {
31
  background(0);
32
  mostraBolinha();
33
  movimentoBolinha();
34
  colideBorda();
35
  mostraRaquete();
36
  movimentaRaquete();
37
  colideRaquete();
38
  mostraRaqueteOponente();
39
  movimentaRaqueteOponente();
40
  colisaoRaqueteOponente();
41
  incluirPlacar();
42
  marcaPontos();
43
}
44
//
45
function mostraBolinha() {
46
  circle(xBolinha, ybolinha, diametro);
  mostraBolinha();
  movimentoBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
  colideRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
}
//
function mostraBolinha() {
  circle(xBolinha, ybolinha, diametro);
}
function movimentoBolinha() {
  xBolinha += VelocidadeDaBolinhaX;
  ybolinha += velocidadeDaBolinhaY;
}
function colideBorda() {
  if (xBolinha > width || xBolinha < 0) {
    VelocidadeDaBolinhaX *= -1;
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeDaBolinhaY *= -1;
  }
}
function mostraRaquete() {
  rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
}
function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function colideRaquete() {
  if (
    xBolinha - raio < xRaquete + RaqueteComprimento &&
    ybolinha - raio < yRaquete + RaqueteAltura &&
    ybolinha + raio > yRaquete
  ) {
    VelocidadeDaBolinhaX *= -1;
  }
}
function movimentaRaqueteOponente() {
  velocidadeYOponente= ybolinha - yRaqueteOponente - RaqueteAltura/2;
  yRaqueteOponente += velocidadeYOponente;
}
function colisaoRaqueteOponente(){
 colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura, xBolinha, ybolinha, raio);
if(colidiu){
  VelocidadeDaBolinhaX *= -1;
}
}

function incluirPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
  }
function marcaPontos(){
  if(xBolinha>xRaqueteOponente){
    meusPontos+=1;
    xBolinha=50;
    yBolinha=200;
  }
  if(xBolinha< raio){
    pontosOponente+=1;
    xBolinha=550;
    yBolinha=200;
  }
}








