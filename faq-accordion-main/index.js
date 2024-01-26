const questionsbtn = document.querySelectorAll('.question');

questionsbtn.forEach(button => {
    button.addEventListener('click', () => {
        const ans = button.nextElementSibling;
        const plusIcon = button.querySelector('.plus');
        const minusIcon = button.querySelector('.minus');

        if (ans.classList.contains('hidden')) {
            ans.classList.remove('hidden');
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'inline';
        } else {
            ans.classList.add('hidden');
            plusIcon.style.display = 'inline';
            minusIcon.style.display = 'none';
        }
    });
});
