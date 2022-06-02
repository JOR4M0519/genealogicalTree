class NodeBinario{
    dato = null;
    Hizq = null;
    Hder = null;

    //Constructores
    constructor(dato) {
        this.dato = dato;
        let nodeIzq;
        let nodeDer;
    }

    // NodoBinario (int Elem){
    //     dato = Elem;
    //     NodoBinario Hizq;
    //     NodoBinario Hder = null;
    // }

    //Insercion de un elemento
    InsertaBinario (element){
        if(element < this.dato){
            if (this.Hizq == null)
                this.Hizq = new NodeBinario(element);
            else
                this.Hizq.InsertaBinario(element);
        }else{
            if (element > this.dato){
                if (this.Hder == null)
                    this.Hder = new NodeBinario(element);
                else
                    this.Hder.InsertaBinario(element);
            }
        }
    }
}
