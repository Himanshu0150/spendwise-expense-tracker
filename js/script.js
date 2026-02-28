function showSection(section, clickedItem) {

    // 1️⃣ Hide all sections
    document.getElementById("dashboardSection").style.display = "none";
    document.getElementById("transactionsSection").style.display = "none";

    // 2️⃣ Show selected section
    document.getElementById(section + "Section").style.display = "block";

    // 3️⃣ Remove active class from all menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => item.classList.remove("active"));

    // 4️⃣ Add active class to clicked item
    clickedItem.classList.add("active");
}