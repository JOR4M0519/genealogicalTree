class Tree {
    Raiz;
    i=0;

    //Constructor
    Tree(){
        Raiz = null;
    }

    //Insercion de un elemento en el arbol
    InsertaNodo(elem){
        if(this.Raiz == null){
            this.Raiz = new NodeBinario(elem);
        }else{
            this.Raiz.InsertaBinario (elem);}
    }

    //Preorden Recursivo del arbol
    Preorden (Nodo){
        if(Nodo == null)
            return;
        else{
            console.log (Nodo.dato + " ");
            this.Preorden (Nodo.Hizq);
            this.Preorden (Nodo.Hder);
        }
    }

    //PostOrden recursivo del arbol
    PostOrden (Nodo){
        if(Nodo == null)
            return;
        else{
            this.PostOrden (Nodo.Hizq);
            this.PostOrden (Nodo.Hder);
            
            var result = document.getElementById("result");
            result.textContent += Nodo.dato+" - "; 
            
        }
    }

    //Inorden Recursivo del arbol
    Inorden (Nodo){
        if(Nodo === null){
            return;
        }else{
            this.Inorden (Nodo.Hizq);
            console.log(Nodo.dato + " ");
            this.Inorden(Nodo.Hder);
        }
    }


    //Busca un elemento en el arbol
    Busqueda = function (Elem, A){
        this.i++;

        if((A == null) | (A.dato == Elem)){
            let aristas = this.i-1;
            this.i=0;
            return Number(aristas);
        }
        else{
            if(Elem>A.dato)
                return this.Busqueda (Elem, A.Hder);
            else
                return this.Busqueda ( Elem, A.Hizq);
        }
    }

    SimilarFatherNode(child1, child2, A){

        if(A == null){   
            return null;
        }else if(child1 < A.dato && child2 < A.dato){
            return this.SimilarFatherNode(child1, child2, A.Hizq);
        }else if(child1 > A.dato && child2 > A.dato){
            return this.SimilarFatherNode(child1, child2, A.Hder);
        }else{
            return A;
        }
    }

    DistanceNodes(nodeData1,nodeData2,nodeAncester){
        return Math.abs(this.Busqueda(nodeData1,nodeAncester) + this.Busqueda(nodeData2,nodeAncester));
    }

}
