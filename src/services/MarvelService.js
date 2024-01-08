


class MarvelService {

  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=91f439be32ba6f8326f987b1a44facfe';


  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok){
      throw new Error(`COuld not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  }

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
  }

  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
  }
}


export default MarvelService;