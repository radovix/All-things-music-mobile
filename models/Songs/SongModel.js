/**
 * Class represents the song model. It keeps the data
 * about one song.
 *
 * @class SongModel
 */
class SongModel {
  /**
   * Song's ID.
   */
  id;

  /**
   * ID of the album that song is from.
   */
  albumId;

  /**
   * Song author's name.
   */
  artistName;

  /**
   * Song's name.
   */
  name;

  /**
   * Song's grade on 1 to 5 scale.
   */
  grade;

  /**
   * Creates an instance of SongModel.
   *
   * @param {number} id Song's ID
   * @param {number} albumId ID of the album that song is from
   * @param {string} [artistName='-'] Song author's name
   * @param {string} [name='-'] Song's name
   * @param {number} [grade=1] Song's grade on 1 to 5 scale
   * @memberof SongModel
   */
  constructor(id, albumId, artistName = '-', name = '-', grade = 1) {
    this.id = id;
    this.albumId = albumId;
    this.artistName = artistName;
    this.name = name;
    this.grade = grade;
  }
}

export default SongModel;
