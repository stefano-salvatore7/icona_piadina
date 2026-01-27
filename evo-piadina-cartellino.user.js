// ==UserScript==
// @name          Icona Pasti nel Cartellino - Conteggio Ticket
// @namespace     https://unibo.it/
// @version       1.9
// @description   Sostituisce "1" con l'icona e rinomina la colonna in "Ticket: n"
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// ==/UserScript==

(function () {
    'use strict';

    // URL dell'icona piadina (quella usata nella tua versione originale)
    const ICON_URL = 'https://raw.githubusercontent.com/stefano-salvatore7/icona_piadina/refs/heads/main/piadina.png';

    // Funzione per sostituire "1" con l'icona e aggiornare l'intestazione
    function gestisciPasti() {
        // Trova tutte le righe della tabella
        const righe = document.querySelectorAll('table tr');
        let totalePasti = 0;

        // --- PARTE 1: Sostituzione icone e calcolo somma ---
        righe.forEach(riga => {
            const celle = riga.querySelectorAll('td.table_td_mese');
            
            // Verifichiamo che la riga abbia la colonna Pasti (indice 10)
            if (celle.length >= 11) {
                const cellaPasti = celle[10];
                
                // Controlla se il valore è "1"
                if (cellaPasti.textContent.trim() === '1') {
                    // Incrementiamo il numero totale per il titolo della colonna
                    totalePasti++;

                    // Sostituzione testo con icona
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

        // --- PARTE 2: Aggiornamento Intestazione ---
        // Cerchiamo la cella di intestazione (th) che contiene il testo "Pasti"
        const intestazioni = document.querySelectorAll('table th');
        intestazioni.forEach(header => {
            if (header.textContent.trim() === 'Pasti') {
                // Rinominiamo la colonna come richiesto, mantenendo lo stile originale
                header.textContent = `Ticket: ${totalePasti}`;
            }
        });
    }

    // Struttura originale di attesa caricamento (setInterval 500ms)
    const waitForTable = setInterval(() => {
        const tabella = document.querySelector('table');
        const cartellinoTitle = document.querySelector('div.title-label');
        const isCartellinoPage = cartellinoTitle && cartellinoTitle.textContent.includes('Cartellino');

        if (isCartellinoPage && tabella) {
            // Quando la tabella è visibile, fermiamo il loop e processiamo i dati
            clearInterval(waitForTable);
            
            gestisciPasti();
            
            console.log(`✅ Script completato: ${totalePasti} ticket rilevati.`);
        }
    }, 500);
})();
