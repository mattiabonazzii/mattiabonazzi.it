document.addEventListener("DOMContentLoaded", function () {
    // Verifica se l'utente ha già accettato i cookie
    if (document.cookie.indexOf("cookies_accepted=true") === -1) {
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Aggiungi l'evento di clic al bottone "Accetta"
    document.getElementById("accept-cookies").addEventListener("click", function () {
        // Nascondi il banner
        document.getElementById("cookie-banner").style.display = "none";

        // Memorizza la preferenza dell'utente nei cookie
        document.cookie = "cookies_accepted=true; path=/; max-age=" + 60 * 60 * 24 * 365; // Il cookie durerà un anno
    });
});