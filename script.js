function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value.replace(',', '.'));
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        USD: {
            EUR: 0.92,
            GBP: 1.25,
            MXN: 16.91,
            BRL: 5.11,
            ARS: 878.88,
            JPY: 114.56
        },
        EUR: {
            USD: 1.07,
            GBP: 0.86,
            MXN: 25.14,
            BRL: 5.076,
            ARS: 155.86,
            JPY: 153.81
        },
        GBP: {
            USD: 1.25,
            EUR: 1.16,
            MXN: 31.64,
            BRL: 7.62,
            ARS: 196.43,
            JPY: 171.03
        },
        MXN: {
            USD: 0.059,
            EUR: 0.040,
            GBP: 0.032,
            BRL: 0.20,
            ARS: 5.13,
            JPY: 4.46
        },
        BRL: {
            USD: 0.19,
            EUR: 0.17,
            GBP: 0.13,
            MXN: 4.94,
            ARS: 126.99,
            JPY: 110.73
        },
        ARS: {
            USD: 0.00114,
            EUR: 0.0064,
            GBP: 0.0051,
            MXN: 0.19,
            BRL: 0.0079,
            JPY: 0.0069
        },
        JPY: {
            USD: 0.0087,
            EUR: 0.0074,
            GBP: 0.0058,
            MXN: 0.22,
            BRL: 0.0090,
            ARS: 145.16
        }
    };

    let convertedAmount;
    let conversionDetail;
    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
        conversionDetail = `${amount.toLocaleString('es-ES')} ${fromCurrency} es igual a ${convertedAmount.toLocaleString('es-ES')} ${toCurrency}.`;
    } else {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        conversionDetail = `${amount.toLocaleString('es-ES')} ${fromCurrency} es equivalente a ${convertedAmount.toLocaleString('es-ES', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${toCurrency}.`;
    }

    // Formatear el resultado con puntos y comas
    let formattedAmount = convertedAmount.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    let resultLargeElement = document.getElementById('resultLarge');
    let resultSmallElement = document.getElementById('resultSmall');

    resultLargeElement.textContent = `${formattedAmount} ${toCurrency}`;
    resultSmallElement.textContent = `Detallado: ${conversionDetail}`;
}


document.addEventListener("DOMContentLoaded", function() {
    let fromSelect = document.getElementById("fromCurrency");
    let toSelect = document.getElementById("toCurrency");
    let fromFlag = document.getElementById("fromFlag");
    let toFlag = document.getElementById("toFlag");

    // Función para cambiar las banderas según la opción seleccionada
    function updateFlag(select, flag) {
        let selectedOption = select.options[select.selectedIndex];
        let selectedIcon = selectedOption.getAttribute("data-icon");
        flag.className = "flag-icon " + selectedIcon;
    }

    // Al cargar la página, mostrar las banderas correspondientes a la opción seleccionada
    updateFlag(fromSelect, fromFlag);
    updateFlag(toSelect, toFlag);

    // Cuando se cambia una opción, actualizar la bandera
    fromSelect.addEventListener("change", function() {
        updateFlag(fromSelect, fromFlag);
    });

    toSelect.addEventListener("change", function() {
        updateFlag(toSelect, toFlag);
    });

    // Función para intercambiar las divisas
    function swapCurrencies() {
        let temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        updateFlag(fromSelect, fromFlag);
        updateFlag(toSelect, toFlag);
    }

    // Agregar evento al botón de intercambio
    let swapButton = document.getElementById('swapButton');
    swapButton.addEventListener('click', swapCurrencies);
});




       /*temperatura*/
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp').value.replace(',', '.'));
    const fromTemp = document.getElementById('fromTemp').value;
    const toTemp = document.getElementById('toTemp').value;

    let result;

    if (fromTemp === 'Celsius') {
        if (toTemp === 'Fahrenheit') {
            result = (temp * 9/5) + 32;
        } else if (toTemp === 'Kelvin') {
            result = temp + 273.15;
        } else {
            result = temp;
        }
    } else if (fromTemp === 'Fahrenheit') {
        if (toTemp === 'Celsius') {
            result = (temp - 32) * 5/9;
        } else if (toTemp === 'Kelvin') {
            result = (temp - 32) * 5/9 + 273.15;
        } else {
            result = temp;
        }
    } else if (fromTemp === 'Kelvin') {
        if (toTemp === 'Celsius') {
            result = temp - 273.15;
        } else if (toTemp === 'Fahrenheit') {
            result = (temp - 273.15) * 9/5 + 32;
        } else {
            result = temp;
        }
    }

    // Formatear el resultado con dos decimales y separadores de miles si es necesario
    let formattedResult = result.toLocaleString('es', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    document.getElementById('tempResult').innerText = `${formattedResult} ${toTemp}`;
}

function swapTemperatureUnits() {
    const fromTemp = document.getElementById('fromTemp').value;
    const toTemp = document.getElementById('toTemp').value;

    // Intercambiar las unidades de temperatura
    document.getElementById('fromTemp').value = toTemp;
    document.getElementById('toTemp').value = fromTemp;
}

       
    /*js para el ticker*/
    document.addEventListener('DOMContentLoaded', function() {
        const news = [
          "🗞️ Noticias: El presidente anuncia medidas económicas para impulsar el crecimiento.",
          "🔴 Última Hora: Equipo local gana el campeonato de fútbol por segundo año consecutivo.",
          "🚨 Aviso: Se esperan fuertes lluvias en la región, toma precauciones.",
          "🌍 Social: Organizaciones no gubernamentales se unen para ayudar a comunidades afectadas por desastres naturales.",
          "📣 Política: Nuevo proyecto de ley busca mejorar el acceso a la educación pública.",
          "🏀 Deportes: Jugador estrella anuncia su retiro del baloncesto profesional.",
          "📢 Aviso: Corte de tráfico en la calle principal debido a trabajos de reparación.",
          "🎭 Social: Teatro local presenta nueva obra basada en hechos históricos.",
          "🇺🇳 Política: Cumbre internacional aborda temas de cambio climático y sostenibilidad.",
          "🥇 Deportes: Atleta nacional rompe récord mundial en natación.",
          "🚓 Policial: Autoridades capturan a banda criminal dedicada al robo de joyerías en la ciudad.",
          "🌏 Mundo: Tensiones aumentan entre países vecinos por disputa territorial en la frontera.",
          "🎬 Cine: Director aclamado anuncia nueva película con un elenco de estrellas internacionales.",
          "🎮 Videojuegos: Se revelan detalles del esperado lanzamiento de la nueva consola de próxima generación.",
          "🎤 Farándula: Cantante famoso cancela gira mundial debido a problemas de salud.",
          "🚓 Policial: Policía desarticula red de tráfico de drogas en operación sorpresa.",
          "🌏 Mundo: Nuevo informe advierte sobre creciente crisis de refugiados en Europa.",
          "🎬 Cine: Película independiente gana premio en festival internacional de cine.",
          "🎮 Videojuegos: Se filtran imágenes del próximo gran juego de mundo abierto que genera gran expectativa.",
          "🎤 Farándula: Actor revela detalles de su nuevo proyecto teatral en una entrevista exclusiva.",
          "🚓 Policial: Robo millonario en joyería de lujo despierta preocupación en la comunidad.",
          "🌏 Mundo: Acuerdo histórico entre potencias mundiales para la reducción de armas nucleares.",
          "🎬 Cine: Se anuncia reboot de clásico del cine con una versión moderna y emocionante.",
          "🎮 Videojuegos: Torneo de eSports bate récord de audiencia en plataforma de streaming.",
          "🎤 Farándula: Modelo internacional causa sensación al lanzar su línea de moda sostenible.",
          "🚓 Policial: Policía investiga misteriosa desaparición de importante empresario local.",
          "🌏 Mundo: Crisis humanitaria en país devastado por desastre natural conmueve al mundo.",
          "🎬 Cine: Revelan tráiler de esperada película de superhéroes con efectos visuales impresionantes.",
          "🎮 Videojuegos: Desarrolladores lanzan expansión gratuita para popular juego de mundo virtual.",
          "🎤 Farándula: Cantante revela colaboración sorpresa con artista emergente en próximo sencillo.",
          "🔴 Última Hora: Ya no quedan matrículas con el nombre de Bort, repito, SE AGOTARON LAS MATRÍCULAS DE BORT!",
        ];
        const ticker = document.querySelector('.ticker');

        // Función para obtener una selección aleatoria de noticias
        function getRandomNews(newsArray, numNews) {
            const shuffled = newsArray.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numNews);
        }
    
        // Obtener 7 noticias aleatorias
        const allNews = getRandomNews(news, 7);
    
        // Función para agregar noticias al ticker
        function addNewsToTicker() {
            ticker.innerHTML = ''; // Limpiar el ticker antes de agregar noticias
            allNews.forEach((news, index) => {
                const tickerItem = document.createElement('div');
                tickerItem.classList.add('ticker__item');
                tickerItem.textContent = news;
                ticker.appendChild(tickerItem);
            });
    
            // Calcular el ancho total del ticker
            const tickerItems = ticker.querySelectorAll('.ticker__item');
            let tickerWidth = 0;
            tickerItems.forEach(item => {
                tickerWidth += item.clientWidth;
            });
    
            // Calcular la duración de la animación basada en el ancho y la velocidad
            const tickerSpeed = 100; // Velocidad ajustada a 100
            const animationDuration = tickerWidth / tickerSpeed;
    
            // Aplicar duración de la animación
            ticker.style.animation = `ticker ${animationDuration}s linear infinite`;
        }
    
        // Llamar a la función para agregar noticias al cargar
        addNewsToTicker();
    
        // Detener la animación cuando el mouse está sobre el ticker
        ticker.addEventListener('mouseenter', function() {
            ticker.style.animationPlayState = 'paused';
        });
    
        // Reanudar la animación cuando el mouse sale del ticker
        ticker.addEventListener('mouseleave', function() {
            ticker.style.animationPlayState = 'running';
        });
    
        // Reiniciar ticker al finalizar una iteración de una noticia
        ticker.addEventListener('animationend', function(e) {
            const firstItem = ticker.querySelector('.ticker__item');
            ticker.appendChild(firstItem);
            ticker.style.animation = 'none'; // Detener la animación
            void ticker.offsetWidth; // Truco para reiniciar la animación
            ticker.style.animation = `ticker ${animationDuration}s linear infinite`; // Reanudar la animación
        });
    });



    /*Username */

    document.addEventListener("DOMContentLoaded", function() {
        // Verificar si ya hay un nombre de usuario en el localStorage
        const savedUsername = localStorage.getItem('username');
    
        // Función para mostrar una ventana emergente y guardar el nombre de usuario si no está guardado
        function showUsernamePrompt() {
            const username = prompt("Ingresa tu nombre de usuario:");
            if (username) {
                // Guardar el nombre de usuario en el localStorage
                localStorage.setItem('username', username);
                // Actualizar el nombre de usuario en el encabezado
                updateUsername(username);
            }
        }
    
        // Función para actualizar el nombre de usuario en el encabezado
        function updateUsername(username) {
            const usernameElement = document.querySelector('.username');
            usernameElement.textContent = `👤 ${username}`;
        }
    
        // Verificar si el nombre de usuario ya está establecido en el localStorage
        if (!savedUsername) {
            // Si no hay un nombre de usuario guardado, mostrar la ventana emergente para ingresarlo
            showUsernamePrompt();
        } else {
            // Si hay un nombre de usuario guardado, actualizar el encabezado con él
            updateUsername(savedUsername);
        }
    });
    






    /*tiempo */
    function swapWorkTimeUnits() {
        // Intercambiar las unidades de entrada y salida
        var fromUnit = document.getElementById("fromWorkTime").value;
        var toUnit = document.getElementById("toWorkTime").value;
        document.getElementById("fromWorkTime").value = toUnit;
        document.getElementById("toWorkTime").value = fromUnit;
    }
    
    function convertWorkTime() {
        // Obtener los valores de entrada
        var workHours = parseFloat(document.getElementById("workHours").value);
        var fromUnit = document.getElementById("fromWorkTime").value;
        var toUnit = document.getElementById("toWorkTime").value;
        
        // Realizar la conversión
        var result;
        var resultDetail;
        if (fromUnit === "Horas" && toUnit === "Dias") {
            result = workHours / 24;
            resultDetail = workHours + " horas equivalen a " + result.toFixed(2) + " días.";
        } else if (fromUnit === "Horas" && toUnit === "Semanas") {
            result = workHours / (24 * 7);
            resultDetail = workHours + " horas equivalen a aproximadamente " + result.toFixed(2) + " semanas.";
        } else if (fromUnit === "Dias" && toUnit === "Horas") {
            result = workHours * 24;
            resultDetail = workHours + " días equivalen a " + result.toFixed(2) + " horas.";
        } else if (fromUnit === "Dias" && toUnit === "Semanas") {
            result = workHours / 7;
            resultDetail = workHours + " días equivalen a aproximadamente " + result.toFixed(2) + " semanas.";
        } else if (fromUnit === "Semanas" && toUnit === "Horas") {
            result = workHours * 24 * 7;
            resultDetail = workHours + " semanas equivalen a " + result.toFixed(2) + " horas.";
        } else if (fromUnit === "Semanas" && toUnit === "Dias") {
            result = workHours * 7;
            resultDetail = workHours + " semanas equivalen a " + result.toFixed(2) + " días.";
        } else {
            // Si las unidades son iguales, mostrar el mismo valor
            result = workHours;
            resultDetail = "Las unidades de entrada y salida son iguales, por lo que el valor permanece igual: " + result.toFixed(2) + " " + toUnit + ".";
        }
        
        // Mostrar el resultado en la página
        document.getElementById("workTimeResult").innerHTML = result.toFixed(2) + " " + toUnit;
    
        // Mostrar el detalle del resultado en la página
        document.getElementById("workTimeResultDetail").innerHTML = resultDetail;
    }
    