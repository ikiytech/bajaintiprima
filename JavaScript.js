document.addEventListener('DOMContentLoaded', function () {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const itemsPerPage = 4;
    let currentPage = 1;

    function renderProducts(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productContainer = document.getElementById('product-container');

        // Hapus produk yang ada
        productContainer.innerHTML = '';

        // Tampilkan produk yang sesuai dengan halaman
        products.slice(startIndex, endIndex).forEach(product => {
            productContainer.appendChild(product);
        });

        // Update nomor halaman
        document.getElementById('pageNumber').textContent = page;
        // Atur state button prev/next
        document.getElementById('prevPage').disabled = page === 1;
        document.getElementById('nextPage').disabled = endIndex >= products.length;
    }

    document.getElementById('prevPage').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderProducts(currentPage);
        }
    });

    document.getElementById('nextPage').addEventListener('click', function () {
        if (currentPage * itemsPerPage < products.length) {
            currentPage++;
            renderProducts(currentPage);
        }
    });

    // Tampilkan halaman pertama saat load
    renderProducts(currentPage);
});
