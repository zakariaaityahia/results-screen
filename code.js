document.addEventListener('DOMContentLoaded', function() {
    const moreDetailsButtons = document.querySelectorAll('.more-details');

    moreDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const nestedTable = document.getElementById(targetId);
            if (nestedTable) {
                nestedTable.style.display = nestedTable.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
