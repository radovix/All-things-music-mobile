/**
 * Class represents the artist model. It keeps the data 
 * about one artist.
 *
 * @class ArtistModel
 */
class ArtistModel {
  /**
   * Artist's ID.
   */
  id;

  /**
   * Artists' name.
   */
  name;

  /**
   * Artist's description/short biography.
   */
  biography;

  /**
   * Artist's image.
   */
  image;

  /**
   * Music genres that describe artist's music.  
   */
  genres;

  /**
   * Artist's albums.
   */
  albums;

  /**
   * Creates an instance of ArtistModel.
   * 
   * @param {number} id Artist's ID
   * @param {string} [name='-'] Artists' name
   * @param {string} [biography='-'] Artist's description/short biography
   * @param {string} [image=null] Artist's image
   * @param {Array<string>} [genres=[]] Music genres of artist's songs
   * @param {Array<sumber>} [albums=[]] Artist's albums
   * @memberof ArtistModel
   */
  constructor(id, name = '-', biography = '-', image = null, genres = [], albums = []) {
    this.id = id;
    this.name = name;
    this.biography = biography;
    this.genres = genres; 
    this.image = image;
    this.albums = albums;
  }
}

export default ArtistModel;