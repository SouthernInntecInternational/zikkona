// Portfolio Filter and Data
const portfolioItems = [
    { id: 1, category: "residential", title: "Home Security Upgrade", desc: "Installed roller shutters for a family home in Cape Town.", img: "images/home-security.jpg", alt: "Zikkona roller shutter installation for a family home in Cape Town", link: "#" },
    { id: 2, category: "commercial", title: "Office Security", desc: "Custom shutters for a Johannesburg office.", img: "images/office-shutter.jpg", alt: "Zikkona custom roller shutters for a Johannesburg office", link: "#" },
    { id: 3, category: "residential", title: "Beach House Protection", desc: "Weather-resistant shutters in Durban.", img: "images/beach-house.jpg", alt: "Zikkona weather-resistant roller shutters for a Durban beach house", link: "#" },
    { id: 4, category: "commercial", title: "Retail Store Front", desc: "Secure shutters for a Pretoria store.", img: "images/retail-store.jpg", alt: "Zikkona secure roller shutters for a Pretoria retail store", link: "#" },
    { id: 5, category: "residential", title: "Suburban Home", desc: "Maintenance service in Pretoria.", img: "images/suburban-home.jpg", alt: "Zikkona roller shutter maintenance for a suburban home in Pretoria", link: "#" },
    { id: 6, category: "commercial", title: "Warehouse Security", desc: "Installation for a Cape Town warehouse.", img: "images/warehouse-security.jpg", alt: "Zikkona roller shutter installation for a Cape Town warehouse", link: "#" }
];

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("portfolio-gallery");

    // Populate Portfolio
    portfolioItems.forEach(item => {
        const div = document.createElement("div");
        div.className = `portfolio-item ${item.category}`;
        div.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
            <div class="p-2">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <a href="${item.link}">More Details</a>
            </div>
        `;
        gallery.appendChild(div);
    });

    // Filter Functionality
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            document.querySelectorAll(".portfolio-item").forEach(item => {
                item.style.display = filter === "all" || item.classList.contains(filter) ? "block" : "none";
            });
        });
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("confirmation").style.display = "block";
        setTimeout(() => {
            document.getElementById("confirmation").style.display = "none";
            document.getElementById("contact-form").reset();
        }, 3000);
    });
});