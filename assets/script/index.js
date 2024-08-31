document.addEventListener('DOMContentLoaded',()=>{
    const main = document.querySelector('.main');
    const postForm = document.querySelector('.postForm');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = postForm.title.value;
        const body = postForm.body.value;
        
        createPosts(title, body);
        
        // Очищаем поля формы после отправки
        postForm.reset();
    });

function createPosts(title, body) {
    const postData = {
        title: title,
        body: body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        addPostToDOM(data);
    })
    .catch(error => {
        console.error('Error:', error);
        main.textContent = `Error ${error}`;
    });
    }
function addPostToDOM(post) {
    const postContainer = `
        <div class ='post'>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    main.innerHTML += postContainer;
}
})