document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {

    card.addEventListener("click", function () {

      // Se la card è già attiva, la chiude
      if (card.classList.contains("active")) {
        card.classList.remove("active");
        return;
      }

      // Chiude tutte le altre card
      cards.forEach(function (c) {
        c.classList.remove("active");
      });

      // Attiva quella cliccata
      card.classList.add("active");
    });

  });
});

