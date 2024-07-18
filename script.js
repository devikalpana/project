// script.js
document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const bookList = document.querySelector('#book-list tbody');

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const home = document.getElementById('home').value;
        const about = document.getElementById('about').value;
        const login = document.getElementById('login').value;
        const register = document.getElementById('register').value;
        const contact = document.getElementById('contact').value;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${home}</td>
            <td>${about}</td>
            <td>${login}</td>
            <td>${register}</td>
            <td>${contact}</td>

            <td class="actions">
                <button class="delete">Delete</button>
            </td>
        `;

        bookList.appendChild(row);

        bookForm.reset();
    });

    bookList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
