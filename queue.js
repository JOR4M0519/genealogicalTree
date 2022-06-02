
class Queue{
    PrimerNodo;
    UltimoNodo;
    Nombre;

    //Constructor construye una lista vacia con un nombre de List
    Cola(){
        this ("Lista");
    }

    //Constructor
    Cola(s){
        Nombre = s;
        PrimerNodo = UltimoNodo =null;
    }

    //Retorna True si Lista Vacía
    VaciaLista() {
        return PrimerNodo == null;
    }

    //Inserta un Elemento al Frente de la Lista
    InsertaInicio (ElemInser){
        if(VaciaLista())
            PrimerNodo = UltimoNodo = new nodeList (ElemInser);
        else
            PrimerNodo = new nodeList (ElemInser, PrimerNodo);
    }

    //Inserta al Final de la Lista
    InsertaFinal(ElemInser){
        if(VaciaLista())
            PrimerNodo = UltimoNodo = new nodeList (ElemInser);
        else
            UltimoNodo=UltimoNodo.siguiente =new nodeList (ElemInser);
    }

    //Eliminar al Inicio
    EliminaInicio(){
        if(VaciaLista())
            console.logln ("No hay elementos");

            // Restablecer  las referencias de PrimerNodo y UltimoNodo
        if(PrimerNodo.equals (UltimoNodo))
            PrimerNodo = UltimoNodo = null;
        else
            PrimerNodo = PrimerNodo.siguiente;
    }

    //Elimina al final
    EliminaFinal (){
        if(VaciaLista())
          console.logln ("No hay elementos");

            // Restablecer  las referencias de PrimerNodo y UltimoNodo
            if (PrimerNodo.equals (UltimoNodo))
                PrimerNodo = UltimoNodo = null;
        else{
            Actual =PrimerNodo;
                while (Actual.siguiente != UltimoNodo)
                    Actual = Actual.siguiente;

                    UltimoNodo =Actual;
                    Actual.siguiente = null;
        }
    }
}
