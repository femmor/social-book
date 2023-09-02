// Variables
const toggleAd = document.querySelector('#toggleAd');
const sidebarAds = document.querySelector('#sidebar-ads');

const sidebarChatsTitle = document.querySelector(
  '#sidebar-chats-title'
);
const sidebarChats = document.querySelectorAll('.online-list');

// Ads toggle function
const openAds = () => {
  sidebarAds.classList.remove('hidden');
  toggleAd.textContent = 'hide ads';
};

const closeAds = () => {
  sidebarAds.classList.add('hidden');
  toggleAd.textContent = 'show ads';
};

// Chats toggle function
const openChats = () => {
  sidebarChats.forEach((chat) => {
    chat.classList.remove('hidden');
  });
  sidebarChatsTitle.textContent = 'hide chats';
};

const closeChats = () => {
  sidebarChats.forEach((chat) => {
    chat.classList.add('hidden');
  });
  sidebarChatsTitle.textContent = 'show chats';
};

// Toggle functions
const toggleAds = (text) => {
  if (text === 'hide ads') {
    closeAds();
  } else {
    openAds();
  }
};

const toggleChats = (text) => {
  if (text === 'hide chats') {
    closeChats();
  } else {
    openChats();
  }
};

// Event Listeners
toggleAd.addEventListener('click', () =>
  toggleAds(toggleAd.textContent)
);

sidebarChatsTitle.addEventListener('click', () =>
  toggleChats(sidebarChatsTitle.textContent)
);
