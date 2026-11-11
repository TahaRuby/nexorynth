/* =====================================
   NEXORYNTH — DASHBOARD CONTROLLER
===================================== */

const dashboard = document.querySelector(".dashboard");

const sidebarToggle = document.getElementById("sidebarToggle");


/* Sidebar Toggle */

if (dashboard && sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        const isCollapsed = dashboard.classList.toggle(
            "sidebar-collapsed"
        );

        sidebarToggle.setAttribute(
            "aria-expanded",
            String(!isCollapsed)
        );

        sidebarToggle.setAttribute(
            "aria-label",
            isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        );

    });

}