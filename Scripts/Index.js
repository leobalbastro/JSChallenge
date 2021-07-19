/* Este Script va a llevar todo lo aprendido en el curso hasta el momento, tanto los talleres como los pequeños modulos,
    se tratará de englobar esto a un nivel negocio (o algo que conenga todo coherentemente y no sea simplemente un lugar
    donde poner los proyectos sin importar la coherencia.*/
    /* Visibilidad de secciones */

    // const ocultar1 = document.getElementById("TallerJS1");
    // const ocultar2 = document.getElementById("TallerJS2");
    console.log(document.getElementById("tabs"))
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";


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

    // getModa