## 📄 1. Offerta Tecnica e Architettura del Progetto

separazione tra contenuti (HTML5), stile (CSS) e comportamento (JS)


### Organizzazione dei File e delle Cartelle
- `/index.html` -> Home Page: Presentazione della missione dell'azienda e panoramica del team e dei giochi.
- `/pages/ceo-curriculum.html` -> Pagina Curriculum: Profilo e competenze del CEO.
- `/pages/pm-curriculum.html` -> Pagina Curriculum: Profilo e competenze del Project Manager.
- `/pages/tl-curriculum.html` -> Pagina Curriculum: Profilo e competenze del Lead Developer.
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

### Funzionalità index.html`
La pagina `index.html` è la home aziendale che presenta la missione del progetto, mostra le tre categorie di giochi principali, introduce il team e include una sezione di contatto con form di registrazione. La struttura prevede una hero section dinamica, una griglia di card, la sezione "Dietro le quinte" e il footer finale.



        To-Do List

- [x] Creazione delle 4 pagine HTML collegate (`index.html` e le 3 pagine in `/pages/`).
- [x] Sviluppo degli stili CSS centralizzati e ottimizzati in `style.css`.
- [x] Creazione della struttura globale della Navbar (Menu) e del Footer.
- [x] Impaginazione della griglia flessibile e creazione delle card descrittive per l'accesso ai curriculum.
- [x] Scrittura di alcuni commenti con spiegazione (HTML, CSS, JS) all'interno del codice.
- [x] Creazione delle pagine con la descrizione dei principal.
