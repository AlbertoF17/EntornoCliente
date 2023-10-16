const regexDict = {"[abc]\n[a-c]" : ["Encuentra un match de alguno de esos carácteres."+ 
                   "El guión representa el rango de un carácter a otro. Si el guión está al principio"+
                   "o al final del regex se interpreta como un carácter en sí mismo.", /[hui]/, "hola"],

                   "[^abc]\n[^a-c]" : ["^ niega los carácteres. Encuentra match si no están esos caracteres.", 
                   /[^abc]/, "perro"],

                   "." : ["Encuentra match con cualquier carácter excepto separadores de línea (\n, \r, \u2028 o \u2029).", 
                   /y./, "yes"],

                   "\d" : ["Encuentra match para cualquier dígito. Es igual que hacer [0-9].", 
                   /\d/, "Abcd1234"],

                   "\D" : ["Encuentra match para culquier carácter que no sea un dígito.", 
                   /\D/, "Hola Mundo"],

                   "\w" : ["Encuentra match para cualquier carácter alfanumérico, excepto la _.", /\w/, "Edad_25"],

                   "\W" : ["Encuentra match para cualquier carácter menos si es alfanumérico. Encuentra match en las tildes.", 
                   /\W/, "É%"],

                   "\s" : ["Encuentra match cuando hay un sólo espacio en blanco", 
                   /\s/, "Hola Mundo"],

                   "\S" : ["Encuentra match para cualquier carácter menos un espacio en blanco", 
                   /\s/, "A B"], 

                   "\t" : ["Encuentra match para una tabulación", 
                   /\t/, "A\tB"], 

                   "\r" : ["Encuentra match para un retorno de carro", 
                   /\r/, "A\rB"], 

                   "\n" : ["Encuentra match para un salto de línea", 
                   /\n/, "A\nB"], 
                };
console.log(regexDict["."][1])

for (key in regexDict) {

    const regRow = document.createElement("tr");

        const regex = document.createElement("th");
        const sig = document.createElement("td");
        const ej = document.createElement("td");
        const res = document.createElement("td");

        regex.setAttribute("scope","row");
        regex.textContent = key;
        sig.textContent = regexDict[key][0];
        ej.textContent = regexDict[key][1] + ".test(" + regexDict[key][2] + ")";
        res.textContent = regexDict[key][1].test(regexDict[key][2]);

        regRow.appendChild(regex);
        regRow.appendChild(sig);
        regRow.appendChild(ej);
        regRow.appendChild(res);
    const tBody = document.querySelector("tbody");
    tBody.appendChild(regRow);
};