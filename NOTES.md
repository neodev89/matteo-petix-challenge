# Inizio progetto

## Decisioni tecniche

In questo progetto ho deciso di usare uno stack tecnologico a me molto familiare.
L'applicativo, infatti, è stato creato con l'ultima versione di Next (v16) App Router.
Next.js è di per se un framework potente con un metodo nativo per la gestione dei cookies e un'ottima predisposizione naturale alla gestione dei metadata e della SEO.

Al progetto sono state aggiunte, inoltre, librerie:

1) Material UI per gestire componenti già ottimizzati nella UI,
2) Tanstack Query e axios per il fetching strutturato delle API client,
3) Zod per il controllo e la validazione di un oggetto e l'inferimento del type corretto,
4) React hook form per la gestione dei moduli,
5) Tailwind per uno styling moderno.

Tutte le dipendenze e il progetto sono stati installati attraverso il pacchetto 'pnpm'

## Inizio temporale

15/09:
• ore 09:54 inizializzazione repository e installazione
dipendenze (Zod, React hook form, zodResolver, Tanstack Query) fino alle ore 10:15
• ore 20:08 continuo a costruire componenti per la creazione del file system
fine lavoro del giorno ore 21:00

16/09:
• ore 08:00 inizio secondo giorno: oggi mi occuperò di creare le routes dinamiche e i componenti per la visualizzazione di ogni singolo articolo.
Creazione delle Cars che daranno vita al Blog e styling annesso.
Fine mattinata ore 11:30
• inizio pomeridiano ore 17:00: e terminato alle 21:05

17/09
• Inizio mattutino: ore 07:00 e fine ore 12:30
• Inizio pomeridiano ore 17:00 e fine ore 20:30

18/09
• Inizio e fine: ore 07:00-13:00 e ore 16:00-19:30

19/09
• Inizio e fine: ore 10:30-13:30 e ore 16:00-20:00

20/09
• Inizio e fine: ore 09:30-13:00 e ore 14:30-17:00 con termine attività

## Ragionamento, logica e struttura

In questo capitolo del file tenterò di esporre i processi mentali e logici che hanno portato
alla restituzione dell'App così come la si vede.

• Ragionamento:
    - L'idea era rispettare le specifiche dettate nella guida, esponendo nell'html
        i dati ottenuti dalla API sfruttando la potenza dei Server Components.
    - L'App doveva essere prestante, riducendo latenze di caricamento, con particolare attenzione
        alla pratica comune di gestire errori e loading interni ogni qualvolta fosse necessario
        effettuare un refetch o una nuova chiamata API.
    - Avere un'App esteticamente gradevole, usando la combo Next.js e Tailwind, assieme a Material UI per la gestione di
        quei componenti che danno alle dashboard un effetto più esteticamente ordinato.
    - Evitare re-rendering continui applicando soluzioni moderne che non influivano sulle prestazioni ma consentivano,
        al contempo, performance pratiche e reattive.
    - Costruire un'App fortemente tipizzata sfruttando la forza di Zod, creando schemi efficaci per parsare gli oggetti restituiti dalle
        API e validarli, fornendo in automatico anche type coerenti agli schemi implementati.

• Logiche:
    - Esecuzione di Mode dark e light lato Tailwind, non ho sfruttato nessuna opzione lato codice per evitare componenti client che
        avrebbero appesantito le prestazioni aumentando il tempo di caricamento.
    - Separazione delle logiche di fetching, che sono state assegnate al file (page.tsx di ogni route directory) contenente il Server
        Component mentre la restituzione dei dati con le logiche di gestione di loading ed error lasciate ai file ("nome-file".tsx
        interno ad ogni route directory) contenente il Client Component.
    - Creazione di "@utility" Tailwind per la costruzione di classi personalizzate e riusabili
        che non avrebbero, peraltro, generato lunghe righe di codice su ogni tag JSX.


