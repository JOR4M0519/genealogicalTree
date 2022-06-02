class NodeList{
    datos;
    siguiente;
 
     //Construtor  Crea un nodo del tipo Object
    NodosListaA (valor){
        datos = valor;
        siguiente = null;  //siguiente con valor de nulo
     }

    // Constructor Crea un nodo del Tipo Object y al siguiente nodo de la lista
    NodosListaA (valor, signodo){
        datos = valor;
        siguiente = signodo; //siguiente se refiere al siguiente nodo
    }
}
