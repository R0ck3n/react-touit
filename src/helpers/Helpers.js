export class Helpers {
    /**
     * converti une date au format dd/mm/yyyy (par exemple 10/02/1988)
     */
    static dateConverter(ts) {
        const date = new Date(ts);
        // Options pour formater la date
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        // Convertir la date en format dd/mm/yyyy
        return date.toLocaleDateString("fr-FR", options);
    }
}
