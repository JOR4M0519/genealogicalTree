
class Queue{
    PrimerNodo;
    UltimoNodo;
    Nombre;

    Cola(){
        this ("Lista");
    }

    Cola(s){
        Nombre = s;
        PrimerNodo = UltimoNodo =null;
    }

    VaciaLista() {
        return PrimerNodo == null;
    }

    InsertaInicio (ElemInser){
        if(VaciaLista())
            PrimerNodo = UltimoNodo = new nodeList (ElemInser);
        else
            PrimerNodo = new nodeList (ElemInser, PrimerNodo);
    }

    InsertaFinal(ElemInser){
        if(VaciaLista())
            PrimerNodo = UltimoNodo = new nodeList (ElemInser);
        else
            UltimoNodo=UltimoNodo.siguiente =new nodeList (ElemInser);
    }


    EliminaInicio(){
        if(VaciaLista())
            console.logln ("No hay elementos");

        if(PrimerNodo.equals (UltimoNodo))
            PrimerNodo = UltimoNodo = null;
        else
            PrimerNodo = PrimerNodo.siguiente;
    }


    EliminaFinal (){
        if(VaciaLista())
          console.logln ("No hay elementos");

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
