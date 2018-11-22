/*--------------------------------------------------------*/
/*var msg = "Loading...."
window.onload = function(){
    var message = "Done loading";
    var div = document.getElementById('container');
    div.innerHTML = message;
}*/
/*--------------------------------------------------------*/

function cent7(){
	var number = document.getElementById('btn7').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
};
function cent8(){
	var number = document.getElementById('btn8').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent9(){
	var number = document.getElementById('btn9').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent4(){
	var number = document.getElementById('btn4').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent5(){
	var number = document.getElementById('btn5').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent6(){
	var number = document.getElementById('btn6').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent1(){
	var number = document.getElementById('btn1').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent2(){
	var number = document.getElementById('btn2').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent3(){
	var number = document.getElementById('btn3').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function cent0(){
	var number = document.getElementById('btn0').value;
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(number);
    document.getElementById('input').value += permin;
    
};
function Clear(){
	document.getElementById('input').value = "";
    
};
function Orqaga(){
	var input = Number(document.getElementById('input').value);
	var permin = parseFloat(input);
    document.getElementById('input').value -= permin + " ";
};



/*---------------------arifmetika-----------------------------*/
/*---------------------arifmetika-----------------------------*/
var input_qosh;
function qoshish(){
	input_qosh = document.getElementById('input').value;
	document.getElementById('input').value = "";
	/*if(input_qosh.value !== ""){
		var values = document.getElementById('btn_qosh').value;
		document.getElementById('input').value = values;
	}*/

};

var input_kop;
function kopaytir(){
	input_kop = document.getElementById('input').value;
	document.getElementById('input').value = "";
}

var input_ayir;
function ayirma(){
	input_ayir = document.getElementById('input').value;
	document.getElementById('input').value = "";
}
var input_bol;
function bolinma(){
	input_bol = document.getElementById('input').value;
	document.getElementById('input').value = "";
}
/*---------------------natija-----------------------------*/
/*---------------------natija-----------------------------*/
var input_val3;
function natija(){
	input_val3 = document.getElementById('input').value;
	if(input_kop){
	    document.getElementById('input').value = parseFloat(input_val3) * parseFloat(input_kop);
	}
	if(input_qosh){
		document.getElementById('input').value = parseFloat(input_val3) + parseFloat(input_qosh);
	}
	if(input_ayir){
		document.getElementById('input').value =parseFloat(input_ayir) - parseFloat(input_val3);
	}
	if(input_bol){
		document.getElementById('input').value =parseFloat(input_bol) / parseFloat(input_val3);
	}
};
/*---------------------orqaga-----------------------------*/
/*---------------------orqaga-----------------------------*/

function Orqaga(){
	var values = document.getElementById('input').value;	
	if(values.value < 10 && values.value > -10){  
		document.getElementById('input').value = 0;
	}else{
		document.getElementById('input').value.slice(document.getElementById('input')).value.length-1;
	}
	/*value = document.getElementById('input').value;
	result = document.getElementsByClassName('btn').value;
	var result = document.getElementsByClassName('btn').value;
	if(value !== ""){
		var output = value.length - result;	
		document.getElementById('input').value = output;
	};*/
};

/*---------------------ildiz-----------------------------*/
/*---------------------ildiz-----------------------------*/
var input_ildiz;
function ildiz(){
   input_ildiz = document.getElementById('input').value;
   var a = Math.sqrt(parseFloat(input_ildiz));
   document.getElementById('input').value = a;
};
/*---------------------minus-----------------------------*/
/*---------------------minus-----------------------------*/
var d;
function minus(){
	d = document.getElementById('input').value;
	document.getElementById('input').value = "";
	if(d  !== ""){
		document.getElementById('input').value = d*(-1);
	};
};
/*---------------------nuqta-----------------------------*/
/*---------------------nuqta-----------------------------*/
function nuqta(){
	/*var in_val = document.getElementById('input').value;*/
	var in_nuqta = document.getElementById('btn.').value
	 document.getElementById('input').value = in_nuqta;
};


function send(){
	/*var response = prompt("What is the airspeed");
   var result = confirm("you entread " + response + "is that ok!");
   if(result){
   	alert("you said yes!");
   }else{
   	alert("you said no.!");
   }
   */
   var a = Math.sqrt(9);
   alert(a);
}
 
 /*---------------------------------------------*/

function demo(radius){
	    /*var array = [1, 2, 3, 4, 40, 34, 9, 8, 7, 6];
	    var a = 5;
	    for (var i = 0; i < array.length ; i++) {
	    var qoldiq = array[i]%2;
	    var oz;
	    	if(qoldiq == 0){
	            oz = qoldiq;
	            for(var j = 0; j < array.length; j--){
	            	var qoldiq2 = array[j]%2;
	            	if(qoldiq2 == 1 && oz <= qoldiq2){
	                    
	    		console.log( "Your question " + array[i]);
	            	};
	            };
	    	};
	    };*/
	  var area = radius*radius;
	  return area;
};
var ssss = demo(3);
console.log("Area of circle with radius 3: " + ssss);
 
 var ssss = demo(5);
console.log("Area of circle with radius 3: " + ssss);
 
 var ssss = demo(7);
console.log("Area of circle with radius 3: " + ssss);

 /*-------------------------------------------------------------------------------------------------------------------------*/

/*function myArray(){*/
	var myArray =[1, 2, 3, 4];
	/*var newArray = myArray.map( function(x){
		return x+1;
	})
	console.log(newArray);*/
/*}*/

function map(a, f){
	var newArray = [];
	for(var i=0; i < a.length; i++){
		newArray.push(f(a[i]));
	}
    return newArray;
}
function addOne(x){
	return x+1;
}

var newArray2 = map( myArray, addOne);
console.log(newArray2);
