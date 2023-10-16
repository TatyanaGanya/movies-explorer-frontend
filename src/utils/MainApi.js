// baseUrl: 'http://localhost:3000',

class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _check(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(`${this._url}${url}`, options).then(this._check);
  }

  registration(username, email, password) {
    return this._request("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });
  }

  authorization(email, password) {
    return this._request("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  getUserData(token) {
    return this._request("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  setUserInfo(username, email, token) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: username,
        email: email,
      }),
    });
  }

  getMovies(token) {
    return this._request("/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addMovie(data, token) {
    return this._request("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  }

  deleteMovie(data, token) {
    return this._request(`/movies/${data}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.diplom-movies.nomoredomainsicu.ru",
});

export default mainApi;
