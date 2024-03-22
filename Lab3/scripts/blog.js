/*
    Name: Hamza Satar 100870272
    Date Completed: 3/21/2024
    Desc: JS file to interact with the blog page
    App : blog.js
*/

async function fetchBlogs() {
    try {
        let blogDetails = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
        let blogs = await blogDetails.json();
        let imageDetails = await fetch(`https://pixabay.com/api/?key=43007242-308702a534c5a4f96868bc0c3&q`);
        let image = await imageDetails.json();

        // Create a container div to hold all the blog cards
        const container = document.createElement('div');
        container.classList.add('container-fluid', 'd-flex', 'flex-wrap', 'justify-content-center');

        // Loop through each blog post and create Bootstrap card elements for them
        blogs.forEach(blog => {
            const card = document.createElement('div');
            card.classList.add('card', 'm-2', 'flex-grow-1', 'flex-shrink-1', 'flex-basis-300px');

            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <img src="${image.userImageURL}">
                    <p class="card-text">User ID: ${blog.userId}</p>
                    <p class="card-text">Post ID: ${blog.id}</p>
                    <p class="card-text">${blog.body}</p>
                </div>
            `;
            container.appendChild(card);
        });

        document.body.appendChild(container);
    }
    catch (err) {
        // If an error occurs, display an error message
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = 'Error retrieving blogs, please try again.';
        document.body.appendChild(errorParagraph);

        console.error('Error retrieving blogs:', err);
    }
}


fetchBlogs();

