/* let a,b,c;
    
        a=parseFloat(prompt('Introduzca lado1'));
        b=parseFloat(prompt('Introduzca lado2'));
        c=parseFloat(prompt('Introduzca lado3'));
        document.write('<br> Triangulo: '+a+' , '+b+' , '+c);
        if(a==b && b==c) {
            document.write(' El triangulo es equilatero ');
            
        } else if(a==b || b==c || a==c) {
            document.write(' El triangulo es isosceles ');
          
        } else if((){ 
            document.write(' El triangulo es escaleno ');
         
        }
    
 */

function algoritmo()
        {
            let a, b, c, discriminante, x1;
            let x2;
            a = parseFloat (document.formulario1.a.value);
            b = parseFloat (document.formulario1.b.value);
            c = parseFloat (document.formulario1.c.value);
            discriminante=b*b-4.0*a*c;
            
            if((a||b||c)>1000){
                alert("No hay como numeros mayores a  1000")
                window.document.onload();
            }
            
            if(discriminante<0)
            {
                discriminante=-discriminante;
                alert('Soluciones imaginarias');
            }
            else
                alert('Soluciones reales');
            if(a!=0)
            {
                x1=(-b+Math.sqrt(discriminante))/2.0/a;



                x2=(-b-Math.sqrt(discriminante))/2.0/a;
            }
            else
            {
                x1=0;
                x2=0;
                alert('No es una ecuacion cuadrantica');
            }
            document.formulario1.discriminante.value = discriminante;
            document.formulario1.x1.value = x1;
            document.formulario1.x2.value = x2;
 }

 algoritmo();