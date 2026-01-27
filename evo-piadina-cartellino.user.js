// ==UserScript==
// @name          Icona Pasti nel Cartellino - Conteggio Attivo
// @namespace     https://unibo.it/
// @version       1.8
// @description   Sostituisce "1" con l'icona e somma i pasti nell'intestazione (versione stabile)
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// ==/UserScript==

(function () {
    'use strict';

    // URL dell'icona piadina
    const ICON_URL = 'https://raw.githubusercontent.com/stefano-salvatore7/icona_piadina/refs/heads/main/piadina.png';

    // Funzione per sostituire "1" con l'icona e contare i pasti
    function sostituisciPastiEConta() {
        // Trova tutte le righe della tabella
        const righe = document.querySelectorAll('table tr');
        let contatorePasti = 0;

        // --- CICLO SULLE RIGHE PER ICONE E CONTEGGIO ---
        righe.forEach(riga => {
            const celle = riga.querySelectorAll('td.table_td_mese');
            
            // La colonna "Pasti" è all'indice 10
            if (celle.length >= 11) {
                const cellaPasti = celle[10];
                
                // Controlla se il contenuto è "1"
                if (cellaPasti.textContent.trim() === '1') {
                    // Incrementiamo il contatore per il totale
                    contatorePasti++;

                    // Svuota la cella e inserisce l'icona
                    cellaPasti.innerHTML = '';
                    const icona = document.createElement('img');
                    icona.src = ICON_URL;
                    icona.style.width = '50px';
                    icona.style.height = '50px';
                    icona.style.display = 'block';
                    icona.style.margin = '0 auto';
                    icona.alt = 'Pasto';
                    icona.title = 'Pasto consumato';
                    
                    cellaPasti.appendChild(icona);
                }
            }
        });

        // --- AGGIORNAMENTO INTESTAZIONE (RENDERLO EVIDENTE) ---
        const headers = document.querySelectorAll('table th');
        headers.forEach(header => {
            if (header.textContent.trim() === 'Pasti') {
                // Inseriamo il numero totale: lo rendiamo rosso, grassetto e un po' più grande
                header.innerHTML = `<span style="color: #e31a24; font-size: 1.1em; font-weight: bold;">${contatorePasti} Pasti</span>`;
            }
        });
    }

    // Usiamo lo stesso metodo dell'originale per attendere la tabella (sicuro al 100%)
    const waitForTable = setInterval(() => {
        const tabella = document.querySelector('table');
        const cartellinoTitle = document.querySelector('div.title-label');
        const isCartellinoPage = cartellinoTitle && cartellinoTitle.textContent.includes('Cartellino');

        if (isCartellinoPage && tabella) {
            // Quando la tabella è pronta, fermiamo il loop ed eseguiamo la funzione
            clearInterval(waitForTable);
            
            sostituisciPastiEConta();
            
            console.log('✅ Conteggio completato e icone aggiunte!');
        }
    }, 500);
})();
