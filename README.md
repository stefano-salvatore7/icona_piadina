EVO Icona Pasti e Conteggio Ticket

Questo script Tampermonkey/Greasemonkey è progettato per il sistema di gestione delle presenze EVO (usato su https://personale-unibo.hrgpi.it/). Trasforma la visualizzazione della colonna "Pasti" sostituendo il valore "1" con un'icona personalizzata e calcolando automaticamente il totale dei ticket mensili.

(Versione Script: 1.9)
Caratteristiche

    Sostituzione Icona Piadina: Identifica il valore "1" nella colonna Pasti e lo sostituisce con un'icona piadina (50x50px) centrata, rendendo il cartellino più visivo e intuitivo.

    Conteggio Totale Ticket: Scansiona l'intera tabella del mese e calcola la somma dei pasti consumati.

    Intestazione Dinamica: Rinomina l'intestazione della colonna da "Pasti" a "Ticket: n" (dove n è il totale calcolato), mantenendo lo stile originale della tabella.

    Rilevamento Intelligente: Grazie a un sistema di controllo ciclico (setInterval), lo script si attiva solo quando la tabella è effettivamente caricata dal portale, garantendo il funzionamento anche su connessioni lente.

    Apparizione Condizionale: Lo script agisce esclusivamente sulla pagina "Cartellino", evitando interferenze con altre sezioni del portale HR.

Installazione e Configurazione

Per installare lo script e assicurarti che il browser ne permetta l'esecuzione, segui attentamente questi passaggi:
1. Installare l'estensione Tampermonkey

Se non l'hai già fatto, installa l'estensione Tampermonkey nel tuo browser:

    Tampermonkey per Chrome

    Tampermonkey per Edge

    Tampermonkey per Firefox

2. Configurazione del Browser (Fondamentale per l'esecuzione)

I browser moderni bloccano gli script utente per sicurezza. È necessario abilitare le funzioni di sviluppo:
Per Google Chrome:

    Apri Chrome e digita chrome://extensions/ nella barra degli indirizzi, poi premi Invio.

    In alto a destra, attiva la "Modalità sviluppatore" (interruttore).

    Individua Tampermonkey nell'elenco delle estensioni e clicca su "Dettagli".

    Assicurati che l'opzione "Consenti script utente" sia attiva.

    Assicurati che l'opzione "Consenti l'accesso agli URL del file" sia attiva.

Per Microsoft Edge:

    Apri Edge e digita edge://extensions/ nella barra degli indirizzi, poi premi Invio.

    In alto a destra, attiva la "Modalità sviluppatore" (interruttore). Potrebbe comparire un avviso di sicurezza nella parte superiore del browser; è normale quando si usa questa modalità.

    Individua Tampermonkey nell'elenco delle estensioni e clicca su "Dettagli".

    Assicurati che l'opzione "Consenti estensioni da altri archivi" sia attiva.

    Assicurati che l'opzione "Consenti l'accesso agli URL del file" sia attiva.

3. Installazione dello Script per Aggiornamenti Automatici

Per assicurarti che lo script si aggiorni automaticamente quando vengono rilasciate nuove versioni sul repository GitHub:

Clicca qui per installare/aggiornare EVO Icona Pasti e Conteggio Ticket

    Dopo aver cliccato, Tampermonkey ti mostrerà il codice dello script e ti chiederà di "Installa" o "Aggiorna". Conferma l'azione.

4. Verifica Aggiornamenti Automatici

Una volta installato tramite il link RAW, Tampermonkey gestirà gli aggiornamenti in autonomia:

    Clicca sull'icona di Tampermonkey e seleziona "Dashboard".

    Trova "Icona Pasti nel Cartellino" nell'elenco.

    Verifica che la casella "Controlla aggiornamenti" sia spuntata.

Utilizzo

Una volta installato e configurato il browser:

    Naviga alla pagina del Cartellino sul portale EVO.

    Lo script si attiverà automaticamente dopo il caricamento della tabella.

    Vedrai le icone delle piadine al posto dei numeri e il conteggio totale dei ticket nell'intestazione della colonna (es. Ticket: 15).
