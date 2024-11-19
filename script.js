// Redirect to the exercise when a card is clicked
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const term = card.getAttribute("data-term");
            sessionStorage.setItem("term", term);
            window.location.href = "spiel.html";
        });
    });

    // For the exercise page
    if (window.location.pathname.includes("spiel.html")) {
        const term = sessionStorage.getItem("term");
        document.getElementById("term-title").textContent = term;

        const draggables = document.querySelectorAll(".draggable");
        const dropzones = document.querySelectorAll(".dropzone");

        draggables.forEach(draggable => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging");
            });

            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging");
            });
        });

        dropzones.forEach(dropzone => {
            dropzone.addEventListener("dragover", e => {
                e.preventDefault();
                const dragging = document.querySelector(".dragging");
                dropzone.appendChild(dragging);
            });
        });
    }
});
