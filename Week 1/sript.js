document.querySelectorAll('.subject-cell').forEach(cell => {
    cell.addEventListener('click', function () {
        const teacher = this.getAttribute('data-teacher');
        const subject = this.getAttribute('data-subject');
        window.location.href = `details.html?teacher=${teacher}&subject=${subject}`;
    });
});