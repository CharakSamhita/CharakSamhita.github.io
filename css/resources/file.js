
function dAdd() {
    //
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iSystem").value);
    
    node.appendChild(textnode);
    
    document.getElementById("System").appendChild(node);
    //
    
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iSymptom").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Symptom").appendChild(node);
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iInput").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Input").appendChild(node);
    
    //
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iDuration").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Duration").appendChild(node);
     
}
function dOpt() {
    var sys = document.getElementById("iSystem").value;
    switch (sys) {
        case Digestive:
            break;
        case Respiratory:
            break;
        case Carddiovascular:
            break;
        case Nervous:
            break;
        case Endocrine:
            break;
        case Musculoskeletal:
            break;
        case Gynacological:
            break;
        case Skin:
            break;
        case Sexual:
            break;
        case other:            
            break;
        
    }
}
