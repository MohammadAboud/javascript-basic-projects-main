// selecting variables

const sidebar = document.querySelector('.sidebar');
const showSidebar = document.querySelector('show-sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

//  toggle for showing the sidebar
toggleBtn.addEventListener('click', function (e) {
  sidebar.classList.toggle('show-sidebar');
});

//  closing the sidebar
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
