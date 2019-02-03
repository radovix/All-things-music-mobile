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
   * Album's reviews made by users.  
   */
  userReviews;

  /**
   * Album's songs lists.
   */
  songs;

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
   * @param {Array<UserReview>} [userReviews=[]] Album's reviews made by users
   * @param {Array<number>} [songs=[]] Album's songs lists
   * @memberof AlbumModel
   */
  constructor(id, artistId, name = '', albumCover = null, releaseDate = '', genres = [], grade = 1, userReviews = [], songs = []) {
    this.id = id;
    this.artistsId = artistId;
    this.name = name;
    this.albumCover = albumCover;
    this.releaseDate = releaseDate;
    this.genres = genres;
    this.grade = grade;
    this.userReviews = userReviews;
    this.songs = songs;
  }
}

export default AlbumModel;