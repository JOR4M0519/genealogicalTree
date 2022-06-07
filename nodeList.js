class NodeList{
    datos;
    siguiente;
 
     //Construtor  Crea un nodo del tipo Object
    NodosListaA (valor){
        datos = valor;
        siguiente = null;  //siguiente con valor de nulo
     }

    NodosListaA (valor, signodo){
        datos = valor;
        siguiente = signodo; 
    }
}
