

var navMenu = document.getElementById('navbar__list'); // Select the existing <ul> element
// Array of menu items
const items = [
    { text: 'Section 1', id: 'section1' },
    { text: 'Section 2', id: 'section2' },
    { text: 'Section 3', id: 'section3' }
]
// Create and append <li> elements to the <ul>
items.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');  
    a.textContent = item.text;
    a.href = `#${item.id}`; // Add '#' to the href attribute to link correctly
    a.classList.add('menu__link'); // Add the class for styling
    li.appendChild(a);
    navMenu.appendChild(li);

    // Add click event listener to each anchors element
    a.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all list items
        document.querySelectorAll('ul#navbar__list li').forEach(li => li.classList.remove('active'));

        // Add 'active' class to the clicked list item
        li.classList.add('active');

        // Scroll to the section
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
