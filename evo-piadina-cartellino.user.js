// ==UserScript==
// @name          Icona Pasti nel Cartellino - Evidenziato
// @namespace     https://unibo.it/
// @version       1.7
// @description   Sostituisce "1" con l'icona e rende il totale nell'intestazione molto evidente
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// ==/UserScript==

(function () {
    'use strict';

    // URL dell'icona piadina
    const ICON_URL = 'https://raw.githubusercontent.com/stefano-salvatore7/icona_piadina/refs/heads/main/piadina.png';

    /**
     * Funzione che elabora la tabella, conta i pasti e formatta l'intestazione
     */
    function elaboraPasti() {
        // Recupero di tutte le righe della tabella
        const righe = document.querySelectorAll('table tr');
        let totalePasti = 0;

        // --- PARTE 1: Ciclo sulle righe per icone e conteggio ---
        righe.forEach(riga => {
            const celle = riga.querySelectorAll('td.table_td_mese');
            
            // La colonna "Pasti" è all'indice 10
            if (celle.length >= 11) {
                const cellaPasti = celle[10];
                const valore = cellaPasti.textContent.trim();
                
                if (valore === '1') {
                    totalePasti++;
                    
                    // Svuota la cella e inserisce l'immagine
                    cellaPasti.innerHTML = '';
                    const icona = document.createElement('img');
                    icona.src = ICON_URL;
                    icona.style.width = '45px';
                    icona.style.height = '45px';
                    icona.style.display = 'block';
                    icona.style.margin = '0 auto';
                    
                    cellaPasti.appendChild(icona);
                }
            }
        });

        // --- PARTE 2: Formattazione Evidente dell'Intestazione ---
        const intestazioni = document.querySelectorAll('table th');
        intestazioni.forEach(header => {
            // Cerchiamo la colonna chiamata "Pasti"
            if (header.textContent.trim().includes('Pasti')) {
                
                // Creiamo un elemento "badge" per rendere il numero molto visibile
                // Usiamo un template literal per inserire il numero totale
                header.innerHTML = `
                    <div style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center;
                        gap: 2px;
                    ">
                        <span style="font-size: 0.8em; opacity: 0.8;">TOTALE</span>
                        <span style="
                            background-color: #d32f2f; 
                            color: white; 
                            padding: 2px 10px; 
                            border-radius: 12px; 
                            font-size: 1.2em; 
                            font-weight: bold;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        ">
                            ${totalePasti} Pasti
                        </span>
                    </div>
                `;
                
                // Rimuoviamo eventuali padding interni per far stare tutto nel titolo
                header.style.padding = '5px 2px';
            }
        });

        console.log(`[Script] Elaborazione conclusa: ${totalePasti} pasti evidenziati.`);
    }

    /**
     * Esecuzione al caricamento completo della pagina
     */
    window.addEventListener('load', function() {
        // Controllo se siamo nella pagina del Cartellino
        const cartellinoTitle = document.querySelector('div.title-label');
        if (cartellinoTitle && cartellinoTitle.textContent.includes('Cartellino')) {
            elaboraPasti();
        }
    });

})();
