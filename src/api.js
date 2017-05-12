const API_PATH = "http://localhost:3000/"

const toJson = (response) => {
  return response.json();
}

const API = {
  submitMusic: function(link, mood_id){
    return fetch(API_PATH + 'musics', {
      headers:{'Content-type': 'application/json'},
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({link: link, mood_id: mood_id})
    }).then(toJson);
  },
}

export default API
