document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Movie data
    const movies = [
        {
            title: 'Inception',
            poster: 'inception-poster.jpg',
            funFact: 'Christopher Nolan wrote the script for Inception over a period of 10 years.',
        },
        // Add more movie data as needed
    ];

    // Populate swiper-wrapper with movie cards
    const swiperWrapper = document.getElementById('swiper-wrapper');
    movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('swiper-slide');

        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = `${movie.title} Poster`;
        poster.classList.add('movie-poster');

        const funFact = document.createElement('p');
        funFact.textContent = movie.funFact;

        movieCard.appendChild(poster);
        movieCard.appendChild(funFact);
        swiperWrapper.appendChild(movieCard);
    });
});
