/* Optional navigation enhancement; every class and page range is in index.md. */
(() => {
  "use strict";

  // Preserve table semantics when the narrow-screen stylesheet reflows cells.
  document.querySelectorAll(".table-scroll table").forEach((table) => {
    table.setAttribute("role", "table");
    table.setAttribute("aria-label", table.parentElement.getAttribute("aria-label") || "Course information");
    table.querySelectorAll("thead, tbody").forEach((group) => group.setAttribute("role", "rowgroup"));
    table.querySelectorAll("tr").forEach((row) => row.setAttribute("role", "row"));
    table.querySelectorAll("th").forEach((cell) => {
      cell.setAttribute("role", "columnheader");
      cell.setAttribute("scope", "col");
    });
    table.querySelectorAll("td").forEach((cell) => {
      cell.setAttribute("role", "cell");
      // Kramdown may put a non-breaking space in an otherwise empty table cell.
      if (!cell.textContent.trim() && !cell.children.length) cell.replaceChildren();
    });
  });

  const weekNav = document.querySelector(".week-nav");
  const weeks = new Set();
  if (weekNav) {
    document.querySelectorAll(".schedule-table tbody tr").forEach((row) => {
      const week = row.cells[0].textContent.trim();
      if (!/^\d+$/.test(week) || weeks.has(week)) return;
      weeks.add(week);
      row.id = `week-${week}`;
      const link = document.createElement("a");
      link.href = `#${row.id}`;
      link.textContent = `W${week}`;
      link.setAttribute("aria-label", `Go to Week ${week}`);
      weekNav.append(link);
    });
    weekNav.hidden = weeks.size === 0;
  }

  // Follow the actual nav height, including wrapping and enlarged browser text.
  const nav = document.querySelector(".course-nav");
  if (nav) {
    const updateHeight = () => document.documentElement.style.setProperty("--nav-height", `${Math.ceil(nav.getBoundingClientRect().height)}px`);
    updateHeight();
    if ("ResizeObserver" in window) new ResizeObserver(updateHeight).observe(nav);
    else window.addEventListener("resize", updateHeight, { passive: true });
  }
})();
