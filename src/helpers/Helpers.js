export class Helpers {
    /**
     * converti une date au format dd/mm/yyyy hh:mm:ss (par exemple 10/02/1988 14:30:45)
     */
    static dateConverter(ts) {
        const date = new Date(ts);
        // Options pour formater la date
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        // Convertir la date en format dd/mm/yyyy hh:mm:ss
        return date.toLocaleDateString("fr-FR", options);
    }
}
