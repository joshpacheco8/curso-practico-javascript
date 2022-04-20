const lista1 =[1,6,5,8,9,6,2,1,5,2,1,5,2,1,5,2,1,2,5,]
    
const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
           lista1Count[elemento] += 1;
        }else{
            
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor){
        
    }
);