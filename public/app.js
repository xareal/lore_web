// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messageNotification = document.querSelector('#message-notification');
const messages = document.querSelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search');

//remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    if (item.id != 'notifications') {
      document.querSelector('.notifications-popup').style.display = 'block';      
    } else {
      document.querSelector('.notifications-popup').style.display = 'block';
      document.querSelector('#notifications . notification-count').style.display = 'none';
      
    }
  })
})

// Messages
// searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLocaleLowerCase();

    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display = 'none';
    }
  })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querSelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
})

// Sidebar

// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}