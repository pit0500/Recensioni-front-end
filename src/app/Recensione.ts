export interface Recensione {
  id: BigInt;
	titolo: string;
	testo: string;
	numeroMiPiace: number;
	numeroNonMiPiace: number;
  scrittaDa: Utente;
  ristorante: Ristorante;
}

export interface Utente {
  username: string;
  nome: string;
  cognome: string;
}

export interface Ristorante {
  id: bigint;
  nome: string;
  descrizione: string;
  ubicazione: string;
}

export interface RistorantePiatto {
  ristorante: Ristorante;
  piatti: Piatto[];
}

export interface Piatto {
  id: bigint;
  nome: string;
  prezzo: number;
  ristoranti: Ristorante[];
}
