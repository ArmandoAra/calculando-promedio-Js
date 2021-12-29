const lista1 = [
    100,
    200,
    500,
    200,
    200,
    34,
    42,
    893,
    500000,
];



function calcularMediaAritmetica(lista){
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    );

    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}


function calcularMediana(lista){
    var mitadLista = lista.length / 2;

    if (lista.length % 2 === 0){
        var listaMitad = [];
        listaMitad[0] = lista[mitadLista - 1];
        listaMitad[1] = lista[mitadLista];
        return calcularMediaAritmetica(listaMitad);
    }else{
        const sortedList = lista.sort((a, b) => a - b); 
        mitadLista = Math.floor(mitadLista);
        console.log(sortedList);     
        return sortedList[mitadLista];
    }
}

function calcularModa(lista){
    //Crea un objeto
    let listaCount = {};
    // Cuenta cuanta cantidad de cada elemento hay en la lista y lo agrega al objeto
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else{
            listaCount[elemento] = 1;
            };
        }
    )
    // Convierte denuevo el objeto en un array ordenandolo de menor a mayor dependiendo de la cantidad que se haya repetido
    const lista1Array = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    // Escogemos el ultimo elemento del array
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}