function display(value) {
    document.getElementById("result").value += value;
    }

    function clearscreen(){
        document.getElementById('result').value="";
        }

 function equal(){
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
 }

 