const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const post = formData.get('post-text');
  console.log(post);
});

const postHere = (post) => {
  const ul = document.querySelector('.posts-list');
  const today = new Date();
  const time = today.toLocaleTimeString();
  const postContent = `
    <li class="post-item">
      <span class="avatar">A</span>
      <div class="post-details">
        <strong class="author">Anonymous</strong>
        <p class="post-text">${post}</p>
        <small class="timestamp">${time}</small>
      </div>
    </li>
  `;
  ul.innerHTML += postContent;
}