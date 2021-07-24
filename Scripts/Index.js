/* Este Script va a llevar todo lo aprendido en el curso hasta el momento, tanto los talleres como los pequeños modulos,
    se tratará de englobar esto a un nivel negocio (o algo que conenga todo coherentemente y no sea simplemente un lugar
    donde poner los proyectos sin importar la coherencia.*/
    /* Visibilidad de secciones */

    const ocultar1 = document.getElementById("TallerJS1");
    const ocultar2 = document.getElementById("TallerJS2");
    const ocultar3 = document.getElementById("TallerJS3");
    // console.log(document.getElementById("tabs"))
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";
    ocultar3.style.display = "none";
    


    /* Funciones Aritmeticas */
    
    function CalcularPerimetroCuadrado(){
        const lado = document.getElementById("Cuadrado__form--input").value;

        document.getElementById("resultadoCuadrado").innerText = `El perimetro del cuadrado es de ${lado*4} cm`;
    }

    function CalcularAreaCuadrado(){
        const lado = document.getElementById("Cuadrado__form--input").value;
        
        document.getElementById("resultadoCuadrado").innerText = `El area del cuadrado es de ${lado*lado} cm`;
    }

    function CalcularAreaTriangulo(){
        const base = document.getElementById("Triangulo__form--input2").value;
        const lado = document.getElementById("Triangulo__form--input1").value;
        const altura = Math.sqrt((lado*lado)-((base*base)/4));

        document.getElementById("resultadoTriangulo").innerText = `El area del triangulos isoceles es: ${(parseInt(base)*parseInt(altura))/2}`
        
        
    }

    function CalcularPerimetroTriangulo(){
        const lado = document.getElementById("Triangulo__form--input1").value;
        const base = document.getElementById("Triangulo__form--input2").value;
        document.getElementById("resultadoTriangulo").innerText = `El perimetro del triangulos isoceles es: ${(parseInt(lado) + parseInt(lado)+parseInt(base))}`
    }
    

    function PerimetroCirculo(){
        const radio = document.getElementById("radio").value;
        const perimetro = (2*Math.PI) * parseInt(radio);
        //2 pi *radio 
        document.getElementById("resultadoCirculo").innerText = `El perimetro del circulo es: ${perimetro.toFixed(2)}`;
    }

    function AreaCirculo(){
        //pi *radio al cuadrado
        const radio = document.getElementById("radio").value;
        const area = Math.PI * (radio*radio);

        document.getElementById("resultadoCirculo").innerText = `El perimetro del circulo es: ${area.toFixed(2)}`;


    }

    //Sistema de Cupones

    function CalcularDescuento(){
        const precio = document.getElementById("precio").value;
        const CUPONES ={
            Gioconda : 33,
            DaVinci : 50,
            Cisco : 25,
            JSChallenge : 45,
        };
        const CUPONES_DEFAULT = "Este no es un cupón valido, se aplicará el precio total sin ningun descuento.";
        const parrafo = document.getElementById("TallerJS2__form--resultado");
        const inputCupon = document.getElementById("cupon").value;
        const operacion = (precio*(100-CUPONES[inputCupon]))/100;
        const resultado = CUPONES[inputCupon] ? `Se ha aplicado un cupón válido, el descuento será de ${CUPONES[inputCupon]}%, El precio total es de: $${operacion}` : CUPONES_DEFAULT + ` Precio total: ${precio}`;
        parrafo.innerText = resultado;
    }

    //TO-DO
    // getPromedio
    function getPromedio(){
        //test split y blabla
        console.log("Comienzo del test de split...");
        const inputTest=document.getElementById("Promedio__form--input").value;
        const array = inputTest.split(",");
        let acumulador =0;
        for (let i = 0; i < array.length; i++) {
            acumulador = acumulador+parseInt(array[i]);
        }
        // console.log();
        const texto = document.getElementById("Promedio__form--result");
        texto.innerText = `El promedio del valor ingresado es de: ${acumulador/array.length} unidades.`;
        //fin del test
    }
        
    // getMedia
    function getMedia(){
        const input = document.getElementById("Media__form--input").value;
        listaInput = input.split(",")
        console.log(listaInput);
        const nuevaLista = listaInput.sort((a, b) => a - b);
        console.log(nuevaLista);
        const mitadLista = parseInt(nuevaLista.length/2);
        console.log(mitadLista);
    
        const esPar = (numerito) => numerito%2==0 ? true : false; 
        console.log(esPar);
        
        const devuelveMedia = (nuevaLista) => esPar(nuevaLista.length) ? (parseInt(nuevaLista[mitadLista-1])+parseInt(nuevaLista[mitadLista])) : nuevaLista[mitadLista];
        console.log(devuelveMedia);
        
        console.log(devuelveMedia(nuevaLista));
        const texto = document.getElementById("Media__form--result");
        texto.innerText = `La media de los valores ingresados es de ${devuelveMedia(nuevaLista)} unidades.`
    }   

    // getModa
    function getModa(){
        const input = document.getElementById("Moda__form--input").value;
        const lista = input.split(",");
        const lista1count ={};
        lista.map(
            function(elemento){
                lista1count[elemento] ? lista1count[elemento] += 1 : lista1count[elemento] = 1 ;
            }
        )
        const listaArray=Object.entries(lista1count).sort(function(valorAcumulado,nuevoValor){
            return (valorAcumulado[1]-nuevoValor[1]);
        });
        
        const moda = listaArray[listaArray.length-1][0];
        // console.log(moda);
        
        const texto = document.getElementById("Moda__form--result");
        texto.innerText = `El valor de moda es ${moda}.`
    }

    //Display Menu Selected Figures
    function ShowSelectedFigure(){
        ocultar2.style.display ="none";
        ocultar3.style.display = "none";
        const figureSelector = document.getElementById("Figures__selector");
        const valueSelector = figureSelector.options[figureSelector.selectedIndex].text;
        const figureCuadrado = document.getElementById("Cuadrado");
        const figureTriangulo = document.getElementById("Triangulo");
        const figureCirculo = document.getElementById("Circulo"); 
        ocultar1.style.display = "flex";

        if (valueSelector == figureCuadrado.id){
            const Cuadrado = document.getElementById("Cuadrado");
            Cuadrado.style.display="flex";
            const Circulo = document.getElementById("Circulo");
            Circulo.style.display ="none";
            const Triangulo = document.getElementById("Triangulo");
            Triangulo.style.display ="none";
        }else if (valueSelector == figureTriangulo.id){
            const Cuadrado = document.getElementById("Cuadrado");
            Cuadrado.style.display="none";
            const Circulo = document.getElementById("Circulo");
            Circulo.style.display ="none";
            const Triangulo = document.getElementById("Triangulo");
            Triangulo.style.display ="flex";
        }else if (valueSelector == figureCirculo.id){
            const Cuadrado = document.getElementById("Cuadrado");
            Cuadrado.style.display="none";
            const Circulo = document.getElementById("Circulo");
            Circulo.style.display ="flex";
            const Triangulo = document.getElementById("Triangulo");
            Triangulo.style.display ="none";
        }
    }
    //Display menu TallerJS2
    function ShowWorkshop2(){
        ocultar1.style.display="none";
        ocultar3.style.display="none";
        ocultar2.style.display="flex";

    }



    //Display Menu Taller3JS
    function ShowSelectedOption(){
        ocultar2.style.display ="none";
        ocultar1.style.display ="none";
        ocultar3.style.display = "flex";
        const menuSelector = document.getElementById("Taller3__selector");
        const optionSelector = menuSelector.options[menuSelector.selectedIndex].text;
        const promedioSelector = document.getElementById("Promedio");
        const mediaSelector = document.getElementById("Media");
        const modaSelector = document.getElementById("Moda");
        console.log(optionSelector);
        console.log(promedioSelector);
        if (optionSelector == promedioSelector.id){
            promedioSelector.style.display = "flex";
            mediaSelector.style.display = "none";
            modaSelector.style.display = "none";
        }else if (optionSelector == mediaSelector.id){
            ocultar3.style.display = "flex";
            promedioSelector.style.display = "none";
            mediaSelector.style.display = "flex";
            modaSelector.style.display = "none";
        }else if (optionSelector == modaSelector.id){
            ocultar3.style.display = "flex";
            promedioSelector.style.display = "none";
            mediaSelector.style.display = "none";
            modaSelector.style.display = "flex";
        }



    }

    //figureSelector.options[figureSelector.selectedIndex].text;