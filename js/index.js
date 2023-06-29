function displayUsers(users) {
    let userList = document.getElementById('user-list');
    userList.innerHTML = '';
  
    users.forEach(user => {
      let userItem = document.createElement('li');
      userItem.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" width="50">
        <a href="${user.html_url}" target="_blank">${user.login}</a>
      `;
      userList.appendChild(userItem);
    });
  }
  function submitForm(event) {
    event.preventDefault();

    let searchQuery = document.getElementById('search-input').value;
  
    
    fetch(`https://api.github.com/search/users?q=${searchQuery}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response => response.json())
      .then(data => {
        //username to display
        displayUsers(data.items);
      })
      .catch(error => {
        console.log('Error:', error);
      });

  }
  // Add event listener to the form submit event
  const githubForm = document.getElementById('github-form');
  githubForm.addEventListener('submit', submitForm);