import {apiConfig} from './utils'

class Api {
  constructor(apiConfig) {
    this._link = apiConfig.link;
    // this._autorization = headers['autorization'];
    this._headers = apiConfig.headers;
  }

  _isOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибонька... Код ошибки ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._isOk);
  }

  getInitialCards() {
    return this._request(`${this._link}/cards`, {
      headers: {
        autorization: this._autorization
      }
    })
  }

  getUserInfo() {
    return this._request(`${this._link}/users/me`, {
      headers: {
        autorization: this._autorization
      }
    })
  }

  setUserInfo({name, about}) {
    return this._request(`${this._link}/user/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
  }

  setUserAvatar({ avatar }) {
    return this._request(`${this._link}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    })
  }

  addNewCard({name, link}) {
    return this._request(`${this._link}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
  }

  deleteCard({cardId}) {
    return this._request(`${this._link}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  toggleLike(cardId, isLiked) {
    if(!isLiked) {
      return this._request(`${this._link}/cards/${cardId}/likes`, {
        method: 'POST',
        headers: this._headers,
      })
    } else {
      return this._request(`${this._link}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      })
    }
  }
}

export const api = new Api(apiConfig);