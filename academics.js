function openTab(id) {

    // hide all
    document.querySelectorAll(".tab-content").forEach(c => {
        c.classList.remove("active");
    });

    document.querySelectorAll(".tab").forEach(t => {
        t.classList.remove("active");
    });

    // show selected
    document.getElementById(id).classList.add("active");

    // activate button
    event.target.classList.add("active");
}