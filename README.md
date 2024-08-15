BAJA INTI PRIMA
    
Teknologi yang Digunakan

    HTML5: Struktur dasar dari halaman web.
    Tailwind CSS: Digunakan untuk styling yang cepat dan responsif.
    JavaScript: Untuk interaksi dinamis seperti toggle menu pada tampilan mobile dan auto-scrolling pada carousel produk.

Untuk menjalankan situs web ini secara lokal:

    git clone https://github.com/ikiytech/baja-intiprima.git
    Buka file index.html di browser Anda.
    Pastikan Anda memiliki koneksi internet untuk memuat Tailwind CSS dari CDN.

Final Source : https://bajaintiprima.com/

This HTML code represents the structure and styling for a web page created for BAJA INTI PRIMA, a company offering construction steel and building materials. Below is an explanation of the key components and features included in this code:
1. Structure and Basic Setup

    The document starts with a <!DOCTYPE html> declaration, indicating the HTML5 standard.
    The <html lang="id"> tag sets the language of the document to Indonesian.
    <head> includes meta tags for character encoding (UTF-8) and viewport settings, ensuring the page is responsive on different devices.
    A <title> tag is set to "BAJA INTI PRIMA" to define the title displayed on the browser tab.
    The Tailwind CSS library is linked via a CDN to provide utility-first CSS classes for styling.

2. Navbar (Navigation Bar)

    The <nav> element contains the navigation bar, which includes a logo image and several navigation links such as "Beranda", "Produk", "Tentang Kami", "Testimoni", and "FAQ".
    There is a button to toggle the mobile menu for small screens using an SVG icon. This menu will only appear on smaller devices (md:hidden).

3. Mobile Menu

    A hidden menu (id="mobile-menu") that appears when the mobile menu button is clicked. The visibility is toggled using JavaScript.

4. Hero Section

    The hero section uses a full-screen background image (background-image: url('/public/image/rsu handayani.png');) with an overlaying black layer for contrast.
    The hero content includes a heading, a brief description of the company's offerings, and a "Hubungi Kami" button linking to a WhatsApp contact.

5. Product Section

    This section showcases the company's products in a horizontally scrollable carousel (overflow-x-auto).
    Each product is displayed in a card format with an image, title, and description.
    JavaScript is used to enable auto-scrolling through the carousel items every 3 seconds.

6. Keunggulan Section

    A section highlighting three key reasons to choose BAJA INTI PRIMA, such as flexible payment options, easy ordering via WhatsApp, and competitive pricing.
    Each reason is presented in a card format.

7. Tentang Kami (About Us) Section

    Provides background information about the company, its history, vision, and commitment to quality.
    Includes a descriptive text and an image representing the company.

8. Testimoni Section

    Displays customer testimonials in a grid layout, each in a separate card, highlighting positive feedback about the company's services and products.

9. FAQ Section

    Contains frequently asked questions in a list format, with answers provided for common customer inquiries.

10. Informasi Pemesanan Section

    Offers links to various e-commerce platforms like Shopee, Tokopedia, and WhatsApp, making it easy for customers to place orders or make inquiries.

11. Footer

    The footer contains copyright information and links to the company's privacy policy, terms of service, and contact information.
    The footer is styled with a blue background and white text.

12. JavaScript Functionality

    The JavaScript code included enables the toggling of the mobile menu and automatic scrolling of the product carousel.
    The script is loaded inline within the HTML document.
