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
            return 1;
        }else{
            if(this.exist(elem,this.Raiz) === 0){this.Raiz.InsertaBinario (elem); return 1;}
            else {alert("El hijo ya ha sido creado"); return 0;}
        }
    }

    //Busca un elemento en el arbol
    exist = function (value, A){
        if(A == null){
            return 0;
        }
        else{
            if(A.dato === value){
                return 1
            }else if(value>A.dato)
                return this.exist (value, A.Hder);
            else
                return this.exist ( value, A.Hizq);
        }
    }

    countAristas = function (Elem, A) {
        this.i++;

        if ((A == null) | (A.dato == Elem)) {
            let aristas = this.i - 1;
            this.i = 0;
            return Number(aristas);
        }
        else {
            if (Elem > A.dato)
                return this.Busqueda(Elem, A.Hder);

            else
                return this.Busqueda(Elem, A.Hizq);
        }
    };

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
        return Math.abs(this.countAristas(nodeData1,nodeAncester) + this.countAristas(nodeData2,nodeAncester));
    }

}
