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
   * @param {string} [artistName='-'] Song author's name
   * @param {string} [name='-'] Song's name
   * @param {number} [grade=1] Song's grade on 1 to 5 scale
   * @memberof SongModel
   */
  constructor(id, artistName = '-', name = '-', grade = 1) {
    this.id = id;
    this.artistName = artistName;
    this.name = name;
    this.grade = grade;
  }
}

export default SongModel;
