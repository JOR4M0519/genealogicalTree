var Node = function(x,y,r, ctx, data) {
    this.leftNode = null; 
    this.rightNode = null;
    
    // Dibuja el nodo-hijo
    this.draw = function() {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.arc(x, y, r, 0, 2*Math.PI); 
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.closePath();
      ctx.font = '25px arial';
      ctx.fillText(data, x+Math.PI-12, y-Math.PI+12);
    };
    
    this.getData = function() { return data; }; 
    this.getX = function() { return x; };
    this.getY = function() { return y; };
    this.getRadius = function() { return r; };
    
    // Coordenadas hijo izq
    this.leftCoordinate = function() {
      return {cx: (x - (3*r)), cy: (y + (3*r))}
    };
    // Coordenadas hijo izq        
    this.rightCoordinate = function() {
      return {cx: (x + (3*r)), cy: (y+(3*r))}
    };
  };
  
  // Dibujar arista
  var Line = function() {
    // Takes 
    // x,y      - starting x,y coordinate
    // toX, toY - ending x,y coordinate
    this.draw = function(x, y, toX, toY, r, ctx) {
      var moveToX = x;
      var moveToY = y + r;
      var lineToX = toX;
      var lineToY = toY - r;
      ctx.beginPath();
      ctx.moveTo(moveToX, moveToY);
      ctx.lineTo(lineToX, lineToY);
      ctx.strokeStyle = "#ffffff";
      ctx.stroke(); 
    };
  };
  
  // árbol canva
  var BTree = function() {
    var c = document.getElementById('my-canvas');
    var ctx = c.getContext('2d');

    ctx.canvas.width  = document.getElementById("my-canvas").offsetWidth;
    ctx.canvas.height = document.getElementById("my-canvas").offsetHeight;

    var line = new Line();
    this.root = null;
       
    // Raiz
    this.getRoot = function() { return this.root; };
    
    // Añadir Hijo
    this.add = function( data) {

      
      if(this.root) {
        this.recursiveAddNode(this.root, null, null, data);  
      } else {

      // Añadir como raiz si no hay 
        let widthCanva = document.getElementById("my-canvas").offsetWidth/2;
        this.root = this.addAndDisplayNode(widthCanva, 50, 30, ctx, data);
        return;
      } 
    };
  
    // Encontrar donde poner el nodo
    this.recursiveAddNode = function(node, prevNode, coordinateCallback, data) {
      if(!node) {
        
        var xy = coordinateCallback();
        var newNode = this.addAndDisplayNode(xy.cx, xy.cy, 30, ctx, data);
        line.draw(prevNode.getX(), prevNode.getY(), xy.cx, xy.cy, prevNode.getRadius(), ctx)
        return newNode; 
      } 
      else {
        if(data <= node.getData()) {
          node.left = this.recursiveAddNode(node.left, node, node.leftCoordinate, data);
        } 
        else {
          node.right = this.recursiveAddNode(node.right, node, node.rightCoordinate, data);
        }
        return node;
      }
    };
    
    
    this.addAndDisplayNode = function(x, y, r, ctx, data) {
      var node = new Node(x, y, r, ctx, data);
      node.draw();
      return node;
    };
  };
  
  var addToTree = function(value) {
    input = document.getElementById('tree-input');
    value = parseInt(input.value);
    if(value){
        if(tree.InsertaNodo(value) === 1){
          btree.add(value);
        }
    }else{
      alert("Wrong input");
    }
    input.value = "";
  };
  
function getDataNodes(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var result = document.getElementById("result");

    try{

        value1 = value1.value;
        value2 = value2.value;
    }catch(error){
        alert("Error en la digitación de información")
        return;
    }
    return [value1,value2];
}

function FindDistance (){

    const [value1,value2] = getDataNodes();

    let nodeAncester = tree.SimilarFatherNode(value1,value2,tree.Raiz);
    if(nodeAncester == null){
        result.innerHTML = `Alguno de los hijos no existe`; 
        return;    
    }
    let distance = tree.DistanceNodes(value1,value2,nodeAncester);

    result.innerHTML = `La distancia entre los hijos: </br>
    [${value1}] <-> [${value2}] es = ${distance}`; 
}

function FindAncester(){
    const [value1,value2] = getDataNodes();
    
    let nodeAncester = tree.SimilarFatherNode(value1,value2,tree.Raiz);
    if(nodeAncester == null){
        result.innerHTML = `Alguno de los hijos no existe`; 
        return;    
    }

    result.innerHTML = `El ancestro de los hijos: </br>
    [${value1}] <-> [${value2}] es = ${nodeAncester.dato}`; 

}

  var btree = new BTree();