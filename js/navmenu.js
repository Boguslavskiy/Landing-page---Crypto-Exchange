(function(){
let open = false; // -1 = Close, +1 = Open
let x1 = document.getElementById('hidden-1');
let x2 = document.getElementById('hidden-2');

headerButton.onclick = function() { 
    
    if(open == true){
        x1.className = "languages desktop";
        x2.className = "nav-menu desktop";
    }
    if(open == false){
        x1.className = "languages";
        x2.className = "nav-menu";
    }

    open = !open;
 };

}());