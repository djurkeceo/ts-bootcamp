# 🏠 Domaći Zadatak #4

Napiši sledeće funkcije koristeći `BlogPost` i `Autor` interfejse iz prethodnog zadatka:


1. Napiši generic funkciju `poslednji<T>` koja vraća poslednji element niza
   Ako je niz prazan, vraća null — tip povratne vrednosti mora to reflektovati

2. Napiši generic funkciju `ukloniDuplikate<T>` koja prima niz i vraća 
   novi niz bez duplikata (istraži kako Set funkcioniše u JS-u)

3. Napiši generic interface `ApiOdgovor<T>` koji modeluje standardni 
   API response objekat:
   - success: boolean
   - data: T (ovo je generic deo — data može biti bilo šta)
   - error?: string

   Zatim napravi dve konkretne upotrebe:
   - ApiOdgovor<BlogPostWithID>  — odgovor koji sadrži jedan post
   - ApiOdgovor<BlogPostWithID[]> — odgovor koji sadrži listu postova

BONUS: Napiši funkciju `kreirajOdgovor<T>(data: T): ApiOdgovor<T>`
       koja prima podatke i vraća uspešan API response objekat