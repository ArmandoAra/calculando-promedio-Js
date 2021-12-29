const lista1 = [
    100,
    200,
    500,
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

    if (lista.length % 2 == 0){
        var listaMitad = [];
        listaMitad[0] = lista[mitadLista - 1];
        listaMitad[1] = lista[mitadLista];
        return calcularMediaAritmetica(listaMitad);
    }else{
        const sortedList = lista.sort(); 
        mitadLista = Math.floor(mitadLista);
        console.log(sortedList);     
        return sortedList[mitadLista];
    }
}

