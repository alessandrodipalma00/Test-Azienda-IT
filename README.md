## 📄 1. Offerta Tecnica e Architettura del Progetto

separazione tra contenuti (HTML5), stile (CSS) e comportamento (JS)


### Organizzazione dei File e delle Cartelle
- `/index.html` -> Home Page: Presentazione della missione dell'azienda e panoramica del team e dei giochi.
- `/pages/ceo-curriculum.html` -> Pagina Curriculum: Profilo e competenze del CEO.
- `/pages/pm-curriculum.html` -> Pagina Curriculum: Profilo e competenze del Project Manager.
- `/pages/tl-curriculum.html` -> Pagina Curriculum: Profilo e competenze del Sviluppatore Tecnico.
- `/css/`
  - `style.css` -> Stile globale del sito
- `/js/`
  - `script.js` -> Logica di programmazione per le interazioni dinamiche del portale.
- `/assets/img/` -> Cartella locale contenente le immagini dei giochi da tavolo, i ritratti dei fondatori e i background del sito.

---

## 🔄 2. Relazione sul Riadattamento e Utilizzo dell'IA
### Adattamento della Vecchia Struttura
**Cambio Contenuti:** L'intelligenza artificiale è stata integrata attivamente nello sviluppo, fornendo un supporto fondamentale nella creatività dei contenuti testuali per rendere accattivante l'unione tra IT e giochi da tavolo. Ha inoltre permesso il fix mirato delle media query per garantire la corretta visualizzazione responsive e ha ottimizzato l'organizzazione generale del progetto, strutturando il codice in modo pulito ed efficiente così da mantenere un filo logico chiaro e facilmente accessibile per tutti gli altri developer del team.

## ⚙️ 3. Documentazione Funzionale degli Script (JavaScript)
Le logiche comportamentali del sito sono centralizzate nel file esterno `/js/script.js`, che viene caricato globalmente nelle pagine.

### Funzionalità 1: Menu di Navigazione Mobile (Hamburger Menu)
- **Meccanismo:** Lo script intercetta l'icona del menu su dispositivi mobili e ascolta l'evento di click. 
- **Logica:** Ogni volta che l'utente clicca l'icona, il programma seleziona la lista dei link di navigazione. Tramite il metodo `.classList.toggle()`, aggiunge o rimuove una classe CSS (es. `active`) che cambia la visibilità del menu da nascosto a visibile, garantendo un layout fluido su smartphone.

### Funzionalità 2: Simulatore Lancio Dado Interattivo (`index.html`)
- **Meccanismo:** Lo script seleziona il bottone "Lancia il Dado" nella Home Page tramite il suo ID e si mette in ascolto dell'evento.
- **Logica:** Quando l'utente clicca sul tasto, la funzione intercetta l'azione. Successivamente utilizza la logica `Math.random()` per generare un numero casuale da 1 a 6. Preleva il valore numerico, lo associa a una determinata stringa o immagine del dado e mostra a schermo il risultato in un div dedicato per creare engagement.

        To-Do List

- [x] Creazione delle 4 pagine HTML collegate (`index.html` e le 3 pagine in `/pages/`).
- [ ] Sviluppo degli stili CSS centralizzati e ottimizzati in `style.css`.
- [ ] Creazione della struttura globale della Navbar (Menu) e del Footer.
- [ ] Impaginazione della griglia flessibile e creazione delle card descrittive per l'accesso ai curriculum.
- [ ] Scrittura della logica JavaScript per il funzionamento del menu responsive.
- [ ] Implementazione del controllo JS per il simulatore del lancio dei dadi nella Home.
- [ ] Scrittura di alcuni commenti con spiegazione (HTML, CSS, JS) all'interno del codice.