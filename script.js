function orderWhatsApp(product, price) {
    let phone = "919876543210";
    let message =
        "Hello Unik Embroidery 👋\n" +
        "🧵 Product: " + product + "\n" +
        "💰 Price: ₹" + price + "\n" +
        "Please share more details.";

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

function filterProducts() {
    let search = document.getElementById("searchInput").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let cards = document.querySelectorAll(".shop-grid .card");

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        let cardCategory = card.getAttribute("data-category");

        let matchSearch = title.includes(search);
        let matchCategory = category === "all" || category === cardCategory;

        card.style.display = (matchSearch && matchCategory) ? "block" : "none";
    });
}
