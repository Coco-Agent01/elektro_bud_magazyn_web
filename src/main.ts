// stworzenie typu produktu do przechowania inf o nich
type Produkt = {
    ean: string;
    nazwa: string;
    kategoria: string;
    lokalizacja: string;
    ilosc: number;
};
// stworzenie tablicy z nimi do przechowania danych 
const produkty: Produkt[] = [
    {
        ean: "5901234567890",
        nazwa: "Kabel elektryczny",
        kategoria: "Kable",
        lokalizacja: "S1-R2-P3",
        ilosc: 15
    },
    {
        ean: "5909876543210",
        nazwa: "Gniazdko elektryczne",
        kategoria: "Osprzęt",
        lokalizacja: "S2-R1-P2",
        ilosc: 30
    },
    {
        ean: "5901111222233",
        nazwa: "Żarówka LED",
        kategoria: "Oświetlenie",
        lokalizacja: "S1-R3-P1",
        ilosc: 0
    }
];
// pobieranie rzeczy z html 
const szukaj = document.getElementById("szukaj") as HTMLInputElement;
const przycisk = document.getElementById("przycisk") as HTMLButtonElement;
const wynik = document.getElementById("wynik") as HTMLDivElement;
// funkcja służąca do wyszukiwnia 
function wyszukajProdukt(): void {
    const tekst = szukaj.value.trim().toLowerCase();

    const znalezione = produkty.filter(produkt =>
        produkt.ean.includes(tekst) ||
        produkt.nazwa.toLowerCase().includes(tekst)
    );

    wynik.innerHTML = "";

    if (znalezione.length === 0) {
        wynik.textContent = "Nie znaleziono produktu.";
        return;
    }
// wyświetlanie
    znalezione.forEach(produkt => {
        const element = document.createElement("p");

        element.textContent =
            "EAN: " + produkt.ean +
            " | Nazwa: " + produkt.nazwa +
            " | Kategoria: " + produkt.kategoria +
            " | Lokalizacja: " + produkt.lokalizacja +
            " | Ilość: " + produkt.ilosc;

        wynik.appendChild(element);
    });
}
// dodanie event listenera do przycisku
przycisk.addEventListener("click", wyszukajProdukt);
//zródła
//chat gpt do pomocy i przerobienia pliku od pana
//pana github zeby miec plik do przerobienia rzeby nie zaczynać od zera 
//w3schools do poduczenia się typescirpta i ogólnie zrozumienie niektórych rzeczy
// z pełną szczerością się przyznam że ai było troche uzywane i nie wysztko jest zrobione przezemnie ponieważ nie korzystałem zbytio
//nigdy z tego więc użyłem do pomocy 
