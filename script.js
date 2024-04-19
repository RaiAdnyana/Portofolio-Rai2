const text = document.querySelector(".dua");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Programer";
    }, 0);

    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 8000);
}

textLoad(); // Panggil fungsi untuk pertama kali

setInterval(textLoad, 12000); // Panggil fungsi setiap 12 detik


// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.menu');

function show() {
    menu.classList.toggle('slide');
}
// end

// tombol ke atas
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) { // Jika sudah di-scroll ke bawah
        document.getElementById('scrollToTop').style.display = 'flex';
    } else {
        document.getElementById('scrollToTop').style.display = 'none';
    }
});

