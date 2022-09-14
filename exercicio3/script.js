/*# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
```*/
const maioresPais =  ["Russia", "Canada","China","EUA","Brasil"];

for(pais of maioresPais) {
    console.log(`${maioresPais.indexOf(pais) + 1} - ${pais}`);
                                 // aqui no pais poderia sero (i) tambem .
}