import ArtistModel from '../Artists/ArtistModel';

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
   * Album author's name.
   */
  artistName;

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
   * Album's grade on 1 to 5 scale.
   */
  grade;

  /**
   * Music genres of that describe album.
   */
  genres;

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
   * @param {string} artistName Album author's name
   * @param {string} [name=''] Album's name
   * @param {string} [albumCover=null] Album's cover image
   * @param {string} [releaseDate=''] Album's release date
   * @param {number} [grade=1] Album's grade on 1 to 5 scale
   * @param {Array<number>} [genres=[]] Music genres of that describe album
   * @param {Array<UserReview>} [userReviews=[]] Album's reviews made by users
   * @param {Array<number>} [songs=[]] Album's songs lists
   * @memberof AlbumModel
   */
  constructor(id, artistName = '-', name = '-', albumCover = null, releaseDate = null, grade = 1, genres = [], userReviews = [], songs = []) {
    this.id = id;
    this.artistName = artistName;
    this.name = name;
    this.albumCover = albumCover;
    this.releaseDate = releaseDate;
    this.grade = grade;
    this.genres = genres;
    this.userReviews = userReviews;
    this.songs = songs;
  }
}

export default AlbumModel;