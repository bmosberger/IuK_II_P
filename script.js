            function calc(){
                
            
                        
            // eingabe wird in var eingabe gespeichert, bei operations zeichen gesplitet und position des operationszeichen wird in jeweiliger var gespeichert     
            var lösung = 0;   
            var eingabe = document.getElementById("berechnungsfenster").value;
            var rechnung = eingabe.split(/[+*^/-]/);
            var addition = eingabe.search(/[+]/);
            var subtraktion = eingabe.search(/[-]/);
            var multiplikation = eingabe.search(/[*]/);
            var exponent = eingabe.indexOf("^");
            var division = eingabe.search(/[/]/);

            if(eingabe.startsWith("sqrt")){

	           var länge = eingabe.length -6;
	           var wurzel = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.sqrt(wurzel);
            
            //  Rechnung wird gemäs operationszeichen ausgeführt und in var lösung gespeichert    
            } else if(addition>0){

	           lösung = parseFloat(rechnung[0])+parseFloat(rechnung[1])

            } else if(subtraktion>0){

	           lösung = parseFloat(rechnung[0])-parseFloat(rechnung[1])

            } else if(multiplikation>0){

	           lösung = parseFloat(rechnung[0])*parseFloat(rechnung[1])

            } else if(division>0) {

	           lösung = parseFloat(rechnung[0])/parseFloat(rechnung[1])

            } else if(exponent>0) {

	           var base = parseInt(rechnung[0]);
	           var ex = parseInt(rechnung[1]);
	           lösung = Math.pow(base,ex);

            } else if (eingabe.startsWith("e")){

	           var länge = eingabe.length -3;
	           var eHoch = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.exp(eHoch);
            } else if (eingabe.startsWith("sin")){

	           var länge = eingabe.length -5;
	           var sinus = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.sin(sinus*(Math.PI/180));

            } else if (eingabe.startsWith("cos")){

	           var länge = eingabe.length -5;
	           var cosinus = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.cos(cosinus*(Math.PI/180));

            } else if (eingabe.startsWith("tan")){

	           var länge = eingabe.length -5;
	           var tangens = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.tan(tangens*(Math.PI/180));

            }else if (eingabe.startsWith("ln")){

	           var länge = eingabe.length -4;
	           var logarithmus = eingabe.substr(eingabe.search(/[(]/)+1,länge); 
	           lösung = Math.log(logarithmus);
            }
            
            var lösunground = Math.round(lösung*100)/100;    
                
            // lösung wird in anzeigefenster ausgegeben       
            document.getElementById("anzeigefenster").value = lösunground;
            }
            
            // Funktion welche das Eingabefeld und das Anzeigefenster leert
            function reset(){
            document.getElementById("berechnungsfenster").value = "";
            document.getElementById("anzeigefenster").value = "";
            }
            
            // Ergebnis wird in den jeweiligen zwischenspeicher geladen
            function toCache1(){
            document.getElementById("zwischenspeicher1").value = document.getElementById("anzeigefenster").value;
            }

            function toCache2(){
            document.getElementById("zwischenspeicher2").value = document.getElementById("anzeigefenster").value;
            }

            function toCache3(){
            document.getElementById("zwischenspeicher3").value = document.getElementById("anzeigefenster").value;
            }

            // Zwischenspiecher in Eingabefenster schreiben
            function loadCache1(){
            document.getElementById("berechnungsfenster").value += document.getElementById("zwischenspeicher1").value;
            }

            function loadCache2(){
            document.getElementById("berechnungsfenster").value += document.getElementById("zwischenspeicher2").value;
            }

            function loadCache3(){
            document.getElementById("berechnungsfenster").value += document.getElementById("zwischenspeicher3").value;
            }

            // Jeweiliger zwischenspeicher wird gelert
            function clear1(){
            document.getElementById("zwischenspeicher1").value = "";
            }

            function clear2(){
            document.getElementById("zwischenspeicher2").value = "";
            }

            function clear3(){
            document.getElementById("zwischenspeicher3").value = "";
            }