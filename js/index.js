const contentWrapper = document.getElementById('content-wrapper');

contentWrapper.addEventListener('click', openWindow);

function openWindow(e) {
  let id = e.target.parentNode.getAttribute('data-id');

  if (!id) {
    return;
  }

  const url = `https://sibedge.atlassian.net/wiki/spaces/DD/pages/${id}`;

  window.open(url, '_blank');
}

