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
  summary;

  /**
   * Music genres that describe artist's music.  
   */
  genres;

  /**
   * Artist's image.
   */
  image;

  /**
   * Artist's albums.
   */
  albums;

  /**
   * Creates an instance of ArtistModel.
   * 
   * @param {number} id Artist's ID
   * @param {string} [name=''] Artists' name
   * @param {string} [summary=''] Artist's description/short biography
   * @param {Array<string>} [genres=[]] Music genres of artist's songs
   * @param {string} [image=null] Artist's image
   * @param {Array<sumber>} [albums=[]] Artist's albums
   * @memberof ArtistModel
   */
  constructor(id, name = '', summary = '', genres = [], image = null, albums = []) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.genres = genres; 
    this.image = image;
    this.albums = albums;
  }
}

export default ArtistModel;