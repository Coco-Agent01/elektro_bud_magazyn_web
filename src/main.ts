type Produkt = {
    ean: string;
    nazwa: string;
    kategoria: string;
    lokalizacja: string;
    ilosc: number;
};

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

const szukaj = document.getElementById("szukaj") as HTMLInputElement;
const przycisk = document.getElementById("przycisk") as HTMLButtonElement;
const wynik = document.getElementById("wynik") as HTMLDivElement;

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

przycisk.addEventListener("click", wyszukajProdukt);

szukaj.addEventListener("keydown", zdarzenie => {
    if (zdarzenie.key === "Enter") {
        wyszukajProdukt();
    }
});
//zródła