// ==UserScript==
// @name          Icona Pasti nel Cartellino
// @namespace     https://unibo.it/
// @version       1.2
// @description   Mostra un'icona taco quando nella colonna "Pasti" c'è il valore "1"
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// ==/UserScript==

(function () {
    'use strict';

    // URL dell'icona taco
    const ICON_URL = 'https://github.com/stefano-salvatore7/icona_piadina/blob/main/piadina.png';

    // Funzione per sostituire "1" con l'icona nella colonna Pasti
    function sostituisciPastiConIcona() {
        // Trova tutte le righe della tabella
        const righe = document.querySelectorAll('table tr');

        righe.forEach(riga => {
            const celle = riga.querySelectorAll('td.table_td_mese');
            
            // La colonna "Pasti" è l'undicesima colonna (indice 10)
            // Struttura: Data(0), Timbrature(1), Assenze(2), Richieste(3), Orario(4), 
            //            Dovuto(5), Lavorato(6), Saldo(7), Credito Prog.(8), Fles. negativa(9), Pasti(10)
            if (celle.length >= 11) {
                const cellaPasti = celle[10];
                
                // Controlla se il contenuto è "1"
                if (cellaPasti.textContent.trim() === '1') {
                    // Svuota la cella
                    cellaPasti.innerHTML = '';
                    
                    // Crea l'immagine
                    const icona = document.createElement('img');
                    icona.src = ICON_URL;
                    icona.style.width = '50px';
                    icona.style.height = '50px';
                    icona.style.display = 'block';
                    icona.style.margin = '0 auto';
                    icona.alt = 'Pasto';
                    icona.title = 'Pasto consumato';
                    
                    // Inserisci l'icona nella cella
                    cellaPasti.appendChild(icona);
                }
            }
        });
    }

    // Attendi che la pagina sia caricata
    const waitForTable = setInterval(() => {
        const tabella = document.querySelector('table');
        const cartellinoTitle = document.querySelector('div.title-label');
        const isCartellinoPage = cartellinoTitle && cartellinoTitle.textContent.includes('Cartellino');

        if (isCartellinoPage && tabella) {
            clearInterval(waitForTable);
            
            // Esegui la sostituzione
            sostituisciPastiConIcona();
            
            console.log('✅ Icone pasti aggiunte con successo!');
        }
    }, 500);
})();
