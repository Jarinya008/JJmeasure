var nn=calc();  
weight(n);  
function calc(){
    var n=parseFloat(document.getElementById('n2').value);
    var o1=document.getElementById('oper1').value;
    var o2=document.getElementById('oper2').value;
    var re=0,p=1;    
    if(o1=='ton'&&o2=='kg'){ p=1000; }
    else if(o1=='ton'&&o2=='g'){ p=1000000; }
    else if(o1=='ton'&&o2=='mg'){ p=1000000000; }    
    else if(o1=='ton'&&o2=='pon'){ p=2204.62262; }
    else if(o1=='kg'&&o2=='g'){ p=1000; }     
    else if(o1=='kg'&&o2=='mg'){ p=1000000; }   
    else if(o1=='kg'&&o2=='ton'){ p=0.001; }
    else if(o1=='kg'&&o2=='pon'){ p=2.204623; }        
    else if(o1=='g'&&o2=='ton'){ p=(10**-6); }
    else if(o1=='g'&&o2=='kg'){ p=0.0001; }    
    else if(o1=='g'&&o2=='mg'){ p=1000; }    
    else if(o1=='g'&&o2=='pon'){ p=0.002205; }    
    else if(o1=='mg'&&o2=='ton'){ p=(10**-9); }   
    else if(o1=='mg'&&o2=='kg'){ p=(10**-6); }
    else if(o1=='mg'&&o2=='g'){ p=0.01; }
    else if(o1=='mg'&&o2=='pon'){ p=(2.20462262*(10**-6)); }     
    else if(o1=='pon'&&o2=='ton'){ p=0.000454; }
    else if(o1=='pon'&&o2=='kg'){ p=0.45359237; } 
    else if(o1=='pon'&&o2=='g'){ p=454; } 
    else if(o1=='pon'&&o2=='mg'){ p=453592.37; } 
    else{ re=n;}
    re=n*p;
    document.getElementById('p1').innerHTML=(n+" x "+p+" = "+re);
    return n;
}
function length(){
    var w=parseFloat(document.getElementById('w2').value);
    var ow1=document.getElementById('ow1').value;
    var ow2=document.getElementById('ow2').value;
    var m,result=1;
    if(ow1=='meter'&&ow2=='cen'){ m=100; }
    else if(ow1=='meter'&&ow2=='mil'){ m=1000; }
    else if(ow1=='meter'&&ow2=='kilo'){ m=0.001; }
    else if(ow1=='cen'&&ow2=='meter'){ m=0.01; }
    else if(ow1=='cen'&&ow2=='mil'){ m=10; }
    else if(ow1=='cen'&&ow2=='kilo'){ m=0.00001; }
    else if(ow1=='mil'&&ow2=='meter'){ m=0.001; }   
    else if(ow1=='mil'&&ow2=='cen'){ m=0.1; }
    else if(ow1=='mil'&&ow2=='kilo'){ m=0.000001; }
    else if(ow1=='kilo'&&ow2=='meter'){ m=1000; }
    else if(ow1=='kilo'&&ow2=='cen'){ m=100000; }
    else if(ow1=='kilo'&&ow2=='mil'){ m=1000000; }
    else{ m=1; }
    result=w*m;
    document.getElementById('w1').innerHTML=(w+" x "+m+" = "+result);
} 


function capacity(){
var w=parseFloat(document.getElementById('w2').value);
var ow1=document.getElementById('ow1').value;
var ow2=document.getElementById('ow2').value;
var result=1;
if(ow1=='bits'&&ow2=='Byte'){
    result=w/8;
}
else if(ow1=='bits'&&ow2=='Kilobyte'){
    result=(w/8)/1024;
}
else if(ow1=='bits'&&ow2=='Megabyte'){
    result=(w/8)/(1024**2);
}
else if(ow1=='bits'&&ow2=='Gigabyte'){ 
    result=(w/8)/(1024**3);     
}
else if(ow1=='bits'&&ow2=='Terabyte'){
    result=(w/8)/(1024**4);
}
else if(ow1=='bits'&&ow2=='Petabyte'){
    result=(w/8)/(1024**5);
}
else if(ow1=='bits'&&ow2=='Exabyte'){
    result=(w/8)/(1024**6);
}
else if(ow1=='Byte'&&ow2=='bits'){
    result=w*8;
}
else if(ow1=='Byte'&&ow2=='Kilobyte'){
    result=w/1024;
}
else if(ow1=='Byte'&&ow2=='Megabyte'){
    result=w/(1024**2);
}
else if(ow1=='Byte'&&ow2=='Gigabyte'){
    result=w/(1024**3);
}
else if(ow1=='Byte'&&ow2=='Terabyte'){
    result=w/(1024**4);
}
else if(ow1=='Byte'&&ow2=='Petabyte'){
    result=w/(1024**5);
}
else if(ow1=='Byte'&&ow2=='Exabyte'){
    result=w/(1024**6);
}
else if(ow1=='Kilobyte'&&ow2=='bits'){
    result=w*1024*8;
}
else if(ow1=='Kilobyte'&&ow2=='byte'){
    result=w*1024;
}
else if(ow1=='Kilobyte'&&ow2=='Megabyte'){
    result=w/1024;
}
else if(ow1=='Kilobyte'&&ow2=='Gigabyte'){
    result=w/(1024**2);
}
else if(ow1=='Kilobyte'&&ow2=='Terabyte'){
    result=w/(1024**3);
}
else if(ow1=='Kilobyte'&&ow2=='Petabyte'){
    result=w/(1024**4);
}
else if(ow1=='Kilobyte'&&ow2=='Exabyte'){
    result=w/(1024**5);
}
else if(ow1=='Megabyte'&&ow2=='bits'){
    result=w*(1024**2)*8;
}
else if(ow1=='Megabyte'&&ow2=='byte'){
    result=w*(1024**2);
}
else if(ow1=='Megabyte'&&ow2=='Gigabyte'){
    result=w/1024;
}
else if(ow1=='Megabyte'&&ow2=='Terabyte'){
    result=w/(1024**2);
}
else if(ow1=='Megabyte'&&ow2=='Petabyte'){
    result=w/(1024**3);
}
else if(ow1=='Megabyte'&&ow2=='Exabyte'){
    result=w/(1024**4);
}
else if(ow1=='Gigabyte'&&ow2=='bits'){
    result=w*(1024**3)*8;
}
else if(ow1=='Gigabyte'&&ow2=='byte'){
    result=w*(1024**3);
}
else if(ow1=='Gigabyte'&&ow2=='Kilobyte'){
    result=w*(1024**2);
}
else if(ow1=='Gigabyte'&&ow2=='Megabyte'){
    result=w*1024;
}
else if(ow1=='Gigabyte'&&ow2=='Terabyte'){
    result=w/1024;
}
else if(ow1=='Gigabyte'&&ow2=='Petabyte'){
    result=w/(1024**2);
}
else if(ow1=='Gigabyte'&&ow2=='Exabyte'){
    result=w/(1024**3);
}
else if(ow1=='Terabyte'&&ow2=='bits'){
    result=w*(1024**4)*8;
}
else if(ow1=='Terabyte'&&ow2=='byte'){
    result=w*(1024**4);
}
else if(ow1=='Terabyte'&&ow2=='Kilobyte'){
    result=w*(1024**3);
}
else if(ow1=='Terabyte'&&ow2=='Megabyte'){
    result=w*(1024**2);
}
else if(ow1=='Terabyte'&&ow2=='Gigabyte'){
    result=w*1024;
}
else if(ow1=='Terabyte'&&ow2=='Petabyte'){
    result=w/1024;
}
else if(ow1=='Terabyte'&&ow2=='Exabyte'){
    result=w/(1024**2);
}
else if(ow1=='Petabyte'&&ow2=='bite'){
    result=w*(1024**5)*8;
}
else if(ow1=='Petabyte'&&ow2=='byte'){
    result=w*(1024**5);
}
else if(ow1=='Petabyte'&&ow2=='Kilobyte'){
    result=w*(1024**4);
}
else if(ow1=='Petabyte'&&ow2=='Megabyte'){
    result=w*(1024**3);
}
else if(ow1=='Petabyte'&&ow2=='Gigabyte'){
    result=w*(1024**2);
}
else if(ow1=='Petabyte'&&ow2=='Terabyte'){
    result=w*1024;
}
else if(ow1=='Petabyte'&&ow2=='Exabyte'){
    result=w/1024;
}
else if(ow1=='Exabyte'&&ow2=='bits'){
    result=w*(1024**6)*8;
}
else if(ow1=='Exabyte'&&ow2=='byte'){
    result=w*(1024**6);
}
else if(ow1=='Exabyte'&&ow2=='Kilobyte'){
    result=w*(1024**5);
}
else if(ow1=='Exabyte'&&ow2=='Megabyte'){
    result=w*(1024**4);
}
else if(ow1=='Exabyte'&&ow2=='Gigabyte'){
    result=w*(1024**3);
}
else if(ow1=='Exabyte'&&ow2=='Terabyte'){
    result=w*(1024**2);
}
else if(ow1=='Exabyte'&&ow2=='Petabyte'){
    result=w*1024;
}
else{
    result=m;
}
document.getElementById('w1').innerHTML=(w+" "+document.getElementById('ow1').value+" = "+result+" "+document.getElementById('ow2').value); 

}

function temp(){
    var w=parseFloat(document.getElementById('w2').value);
    var ow1=document.getElementById('ow1').value;
    var ow2=document.getElementById('ow2').value;
    var result=1;

    if(ow1=="°C"&&ow2=="°F"){
        result=(1.8*w)+32;
    }
    else if(ow1=="°C"&&ow2=="°N"){
        result=w*33/100;
    }
    else if(ow1=="°C"&&ow2=="°De"){
        result=(100-w)*3/2;
    }
    else if(ow1=="°C"&&ow2=="°K"){
        result=w+274.15;
    }
    else if(ow1=="°C"&&ow2=="°R"){
        result=(w+273.15)*9/5;
    }
    else if(ow1=="°C"&&ow2=="°Ré"){
        result=w*0.8;
    }    
    else if(ow1=="°F"&&ow2=="°C"){  
        result=(w-32)*5/9;
    }
    else if(ow1=="°F"&&ow2=="°N"){
        result=(w-32)*11/60;
    }
    else if(ow1=="°F"&&ow2=="°De"){
        result=(212-w)*5/6;
    } 
    else if(ow1=="°F"&&ow2=="°K"){
        result=(w-459.67)*5/9;
    }   
    else if(ow1=="°F"&&ow2=="°R"){
        result=w+459.67;
    }
    else if(ow1=="°F"&&ow2=="°Ré"){
        result=(w-32)*4/9;
    }  
    else if(ow1=="°N"&&ow2=="°C"){
        result=w*100/33;
    }   
    else if(ow1=="°N"&&ow2=="°F"){
        result=w*60/11+32;
    }  
    else if(ow1=="°N"&&ow2=="°De"){
        result=(33-w)*50/11;
    } 
    else if(ow1=="°N"&&ow2=="°K"){
        result=w*100/33+273.15;
    }
    else if(ow1=="°N"&&ow2=="°R"){
        result=w*60/11+491.67;
    }   
    else if(ow1=="°N"&&ow2=="°Ré"){
        result=w*80/33;
    }  
    else if(ow1=="°De"&&ow2=="°C"){
        result=(w-32)/1.8;
    } 
    else if(ow1=="°De"&&ow2=="°F"){
        result=(w*1.8)+32;
    }  
    else if(ow1=="°De"&&ow2=="°N"){
        result=w*33/100;
    }   
    else if(ow1=="°De"&&ow2=="°K"){
        result=w+273.15;
    }      
    else if(ow1=="°De"&&ow2=="°R"){
        result=(w+459.67)*5/9;
    }     
    else if(ow1=="°De"&&ow2=="°Ré"){
        result=80-w*8/15;
    }    
    else if(ow1=="°K"&&ow2=="°C"){
        result=w-273.15;
    }   
    else if(ow1=="°K"&&ow2=="°F"){
        result=(w-273.15)*1.8+32;
    } 
    else if(ow1=="°K"&&ow2=="°N"){
        result=(w-273.15)*0.33;
    }  
    else if(ow1=="°K"&&ow2=="°De"){
        result=(373.15-w)*3/2;
    }   
    else if(ow1=="°K"&&ow2=="°R"){
        result=(w-273.15)*1.8;
    }      
    else if(ow1=="°K"&&ow2=="°Ré"){
        result=(w-273.15)*0.8;
    }   
    else if(ow1=="°R"&&ow2=="°C"){
        result=(w-491.67)*5/9;
    }    
    else if(ow1=="°R"&&ow2=="°F"){
        result=w-459.67;
    }
    else if(ow1=="°R"&&ow2=="°N"){
        result=(w-491.67)*11/60;
    }  
    else if(ow1=="°R"&&ow2=="°De"){
        result=(671.67-w)*5/6;
    } 
    else if(ow1=="°R"&&ow2=="°K"){
        result=w*5/9;
    } 
    else if(ow1=="°R"&&ow2=="°Ré"){
        result=(w-491.67)*4/9;
    }
    else if(ow1=="°Ré"&&ow2=="°C"){
        result=w*5/4;
    }
    else if(ow1=="°Ré"&&ow2=="°F"){
        result=w*9/4+32;
    }   
    else if(ow1=="°Ré"&&ow2=="°K"){
        result=w*5/4+273.15;
    }  
    else if(ow1=="°Ré"&&ow2=="°R"){
        result=w*9/4+491.67;
    } 
    else if(ow1=="°Ré"&&ow2=="°De"){
        result=(80-w)*15/8;
    } 
    else if(ow1=="°Ré"&&ow2=="°N"){
        result=w*33/80;
    }    
    else{
        result=w;
    } 
    document.getElementById('w1').innerHTML=(w+" "+document.getElementById('ow1').value+" = "+result+" "+document.getElementById('ow2').value); 
}

function litt(){
      var w=parseFloat(document.getElementById('w2').value);
      var ow1=document.getElementById('ow1').value;
      var ow2=document.getElementById('ow2').value;
      var result;
      if(ow1 == "liter" && ow2 == "milliliter"){
        result = w * 1000;
      }
      else if(ow1 == "liter" && ow2 == "gallon"){
        result = w * 0.264172;
      }
      else if(ow1 == "liter" && ow2 == "cup"){
        result = w * 4.22675;
      }
      else if(ow1 == "liter" && ow2 == "ounce"){
        result = w * 33.814;
      }
      else if(ow1 == "liter" && ow2 == "pint"){
        result = w * 2.11338;
      }
      else if(ow1 == "liter" && ow2 == "quart"){
        result = w * 1.05669;
      }

      else if(ow1 == "milliliter" && ow2 == "liter"){
        result = w / 1000;
      }
      else if(ow1 == "milliliter" && ow2 == "gallon"){
        result = w / 3785.412;
      }
      else if(ow1 == "milliliter" && ow2 == "cup"){
        result = w / 236.588;
      }
      else if(ow1 == "milliliter" && ow2 == "ounce"){
        result = w * 0.03381402;
      }
      else if(ow1 == "milliliter" && ow2 == "pint"){
        result = w * 0.00211338;
      }
      else if(ow1 == "milliliter" && ow2 == "quart"){
        result = w * 0.00010566924;
      }

      else if(ow1 == "gallon" && ow2 == "liter"){
        result = w * 3.78541;
      }
      else if(ow1 == "gallon" && ow2 == "milliliter"){
        result = w * 3785.41;
      }
      else if(ow1 == "gallon" && ow2 == "cup"){
        result = w * 16;
      }
      else if(ow1 == "gallon" && ow2 == "ounce"){
        result = w * 128;
      }
      else if(ow1 == "gallon" && ow2 == "pint"){
        result = w * 8;
      }
      else if(ow1 == "gallon" && ow2 == "quart"){
        result = w * 4;
      }

      else if(ow1 == "cup" && ow2 == "liter"){
        result = w * 0.236588;
      }
      else if(ow1 == "cup" && ow2 == "milliliter"){
        result = w * 236.5882365;
      }
      else if(ow1 == "cup" && ow2 == "gallon"){
        result = w / 16;
      }
      else if(ow1 == "cup" && ow2 == "ounce"){
        result = w * 8;
      }
      else if(ow1 == "cup" && ow2 == "pint"){
        result = w / 2;
      }
      else if(ow1 == "cup" && ow2 == "quart"){
        result = w * 0.25;
      }

      else if(ow1 == "ounce" && ow2 == "liter"){
        result = w * 0.0295735;
      }
      else if(ow1 == "ounce" && ow2 == "milliliter"){
        result = w * 29.5735;
      }
      else if(ow1 == "ounce" && ow2 == "gallon"){
        result = w / 128;
      }
      else if(ow1 == "ounce" && ow2 == "cup"){
        result = w * 0.125;
      }
      else if(ow1 == "ounce" && ow2 == "pint"){
        result = w / 16;
      }
      else if(ow1 == "ounce" && ow2 == "quart"){
        result = w * 0.03125;
      }

      else if(ow1 == "pint" && ow2 == "liter"){
        result = w * 0.4731765;
      }
      else if(ow1 == "pint" && ow2 == "milliliter"){
        result = w * 473.176;
      }
      else if(ow1 == "pint" && ow2 == "gallon"){
        result = w * 0.125;
      }
      else if(ow1 == "pint" && ow2 == "cup"){
        result = w * 2;
      }
      else if(ow1 == "pint" && ow2 == "ounce"){
        result = w * 16;
      }
      else if(ow1 == "pint" && ow2 == "quart"){
        result = w * 0.5;
      }  
      
      else if(ow1 == "quart" && ow2 == "liter"){
        result = w * 0.94635295;
      }
      else if(ow1 == "quart" && ow2 == "milliliter"){
        result = w * 946.353;
      }
      else if(ow1 == "quart" && ow2 == "gallon"){
        result = w * 0.25;
      }
      else if(ow1 == "quart" && ow2 == "cup"){
        result = w * 4;
      }
      else if(ow1 == "quart" && ow2 == "ounce"){
        result = w * 32;
      }
      else if(ow1 == "quart" && ow2 == "pint"){
        result = w * 2;
      }
      else{
        result = w;
      }
      document.getElementById('w1').innerHTML=(w+" "+document.getElementById('ow1').value+" = "+result+" "+document.getElementById('ow2').value);
}

