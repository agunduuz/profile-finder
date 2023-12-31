class Profile {
  constructor() {
    (this.clientId = ''), (this.clientSecret = '');
  }

  async getProfile(username) {
    const profileResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const profile = await profileResponse.json();

    const photoResponse = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${profile[0].id}`
    );

    const photos = await photoResponse.json();

    return {
      profile,
      photos,
    };
  }
}
