var lista_cnae = '47.44-0-05 - Comércio varejista de mat9999eriais de construção não especificados anteriormente,47.44-0-04 - Comér44433cio varejista de cal, areia, pedra britada, tijolos e telhas,47.44-0-03 - Comércio var44444ejista de materiais hidráulicos,47.44-0-01 - Comércio varejista de ferragens e ferramentas,47.42-3-00 - Comércio varejista de material elétrico,47.41-5-00 - Comércio varejista de tintas e materiais para pintura,47.32-6-00 - Comércio var12ejista de lubrifican339900777333tes';

var texto1, texto2, texto3, texto4, texto5, texto6, texto7;

texto1 = lista_cnae.match(/47.*? /)[0];
texto1 = texto1.replace(/-/gi,"")
texto1 = texto1.replace(/.4/gi,"4")
texto1 = texto1.replace(/ /gi,"")

texto2 = lista_cnae.match(/,47.*? -/)[0];
texto2 = texto2.replace(/-/gi,"");
texto2 = texto2.replace(/.47/gi,"47");
texto2 = texto2.replace(/.44/gi,"44");
texto2 = texto2.replace(/ /gi,"")

texto3 = lista_cnae.match(/s,47.*? /)[0];
texto3 = texto3.replace(/-/gi,"");
texto3 = texto3.replace(/.4/gi,"4");
texto3 = texto3.replace(/s/, "");
texto3 = texto3.replace(/ /gi,"")

texto4 = lista_cnae.match(/os,47.*? /)[0];
texto4 = texto4.replace(/-/gi,"");
texto4 = texto4.replace(/.4/gi,"4");
texto4 = texto4.replace(/os/, "");
texto4 = texto4.replace(/ /gi,"")

texto5 = lista_cnae.match(/tas,47.*? /)[0];
texto5 = texto5.replace(/-/gi,"");
texto5 = texto5.replace(/.4/gi,"4");
texto5 = texto5.replace(/tas/, "");
texto5 = texto5.replace(/ /gi,"");

texto6 = lista_cnae.match(/o,47.*? /)[0];
texto6 = texto6.replace(/-/gi,"");
texto6 = texto6.replace(/.4/gi,"4");
texto6 = texto6.replace(/o/, "");
texto6 = texto6.replace(/ /gi,"");

texto7 = lista_cnae.match(/a,47.*? /)[0];
texto7 = texto7.replace(/-/gi,"");
texto7 = texto7.replace(/.3/gi,"3");
texto7 = texto7.replace(/a,/, "");
texto7 = texto7.replace(/ /gi,"");



console.log(texto1 + "|" + texto2 + "|" + texto3 + "|" + texto4 + "|" + texto5 + "|" + texto6 + "|" + texto7);

