class UI {
  constructor() {
    this.profileContainer = document.querySelector('#profileContainer');
    this.alert = document.querySelector('#alert');
  }

  showProfile(profile) {
    this.profileContainer.innerHTML = `
    <section>
    <aside>
      <div class="img">
        <img src="https://fakeimg.pl/400x400?text=PICTURE&font=bebas" />
      </div>
      <div class="content">
        <h4>Contact</h4>
        <ul>
          <li>
            <span>Fullname:</span> ${profile.name} ${profile.username}
          </li>
          <li><span>Email:</span> ${profile.email}</li>
          <li><span>Address:</span> ${profile.address.city}</li>
          <li><span>Website:</span> ${profile.website}</li>
        </ul>
        </div>
    </aside>
        <h4>Photos</h4>
        <div id="photos">
        </div>
  </section>
    `;
  }
  showAlert(text) {
    this.alert.style.display = 'block';
    this.alert.innerHTML = `${text} is not found.`;
  }

  showImage(photos) {
    let html = '';

    photos.forEach((item) => {
      if (item) {
        html += `
                <img src=${item.url}>
            `;
      } else {
        html += `
            <p>I haven't got photos</p>
        `;
      }
    });
    this.profileContainer.querySelector('#photos').innerHTML = html;
  }

  clear() {
    this.profileContainer.innerHTML = '';
    this.alert.innerHTML = '';
    this.alert.style.display = 'none';
  }
}
