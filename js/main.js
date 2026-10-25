
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen =
      toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    links.classList.toggle("open", !isOpen);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      links.classList.remove("open");
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const shouldShow =
          selectedFilter === "all" ||
          categories.includes(selectedFilter);

        card.hidden = !shouldShow;
      });
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector("#skills");
  if (!skillSection) return;

  const buttons = skillSection.querySelectorAll(".skill-filter");
  const cards = skillSection.querySelectorAll(".skill-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.skillFilter;

      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      cards.forEach((card) => {
        const category = card.dataset.skillCategory;
        card.hidden =
          selectedCategory !== "all" &&
          category !== selectedCategory;
      });
    });
  });
});
