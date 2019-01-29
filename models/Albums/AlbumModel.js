/**
 * Class represents the album model. It keeps the data
 * about one album.
 *
 * @class AlbumModel
 */
class AlbumModel {
  /**
   * Album's ID.
   */
  id;

  /**
   * Album's author's ID.
   */
  artistId;

  /**
   * Album's name.
   */
  name;

  /** 
   * Album's cover image.
   */
  albumCover;

  /**
   * Album's release date.
   */
  releaseDate;

  /**
   * Music genres of that describe album.
   */
  genres;

  /**
   * Album's grade on 1 to 5 scale.
   */
  grade;

  /** 
   * Album's comments made by users.  
   */
  userReviews;

  /**
   * Album's songs lists.
   */
  songsList;

  /**
   * Creates an instance of AlbumModel.
   *
   * @param {number} id Album's ID
   * @param {number} artistId Album's author's ID
   * @param {string} [name=''] Album's name
   * @param {string} [albumCover=null] Album's cover image
   * @param {string} [releaseDate=''] Album's release date
   * @param {Array<number>} [genres=[]] Music genres of that describe album
   * @param {number} [grade=1] Album's grade on 1 to 5 scale
   * @param {Array<String>} [userReviews=[]] Album's comments made by users
   * @param {Array<number>} [songsList=[]] Album's songs lists
   * @memberof AlbumModel
   */
  constructor(id, artistId, name = '', albumCover = null, releaseDate = '', genres = [], grade = 1, userReviews = [], songsList = []) {
    this.id = id;
    this.artistsId = artistId;
    this.name = name;
    this.albumCover = albumCover;
    this.releaseDate = releaseDate;
    this.genres = genres;
    this.grade = grade;
    this.userReviews = userReviews;
    this.songsList = songsList;
  }
}

export default AlbumModel;