/* fetch(url)
        .then(response => response.json())
        .then(data => respuesta = data); */

        let respuesta = 'Aún sin datos';

        const peticion = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(`Un euro vale ${data.mxn} pesos mexicanos.`);
        }
        
        peticion("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json")
        peticion("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/jpy/mxn.json")