// Fungsi menu dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownMenu.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Tutup dropdown saat mengklik di luar
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
