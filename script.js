document.getElementById("monitorizare").addEventListener("dblclick", function () {
    const images = document.querySelectorAll("#monitorizare img");
    let currentIndex = 0;

    function showSlide() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? "inline-block" : "none";
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showSlide, 3000);
    showSlide();
});
