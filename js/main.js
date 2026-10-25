
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
  const skillButtons = document.querySelectorAll(".skill-filter");
  const skillCards = document.querySelectorAll(".skill-card");

  skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.skillFilter;

      skillButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      skillCards.forEach((card) => {
        const matches =
          selected === "all" ||
          card.dataset.skillCategory === selected;

        card.hidden = !matches;
      });
    });
  });
});
