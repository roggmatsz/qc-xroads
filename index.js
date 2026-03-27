// Ensure the script runs after the HTML is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select every teammate container
    const teammates = document.querySelectorAll('.teammate');

    teammates.forEach(card => {
        const openBtn = card.querySelector('.btn-open');
        const closeBtn = card.querySelector('.btn-close');
        const shortBio = card.querySelector('.bio-short');
        const extendedBio = card.querySelector('.bio-extended');

        // Swap to Extended Bio
        openBtn.addEventListener('click', () => {
            shortBio.classList.add('hidden');
            extendedBio.classList.remove('hidden');
        });

        // Swap back to Short Bio
        closeBtn.addEventListener('click', () => {
            extendedBio.classList.add('hidden');
            shortBio.classList.remove('hidden');
        });
    });
});
