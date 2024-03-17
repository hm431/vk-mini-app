class Api{

onError = (response) => {
  if (response.ok) {

    return response.json();
  } else {
    return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
  }
}


    getInfo(url)  {
      return fetch(`${url}`, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
      .then((response) => this.onError(response))
   
    }


   getUser(url, name)  {
      return fetch(`${url}?name=${name}`, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'GET',
      })
      .then((response) => this.onError(response))
   
    }
  }

  export const api = new Api();