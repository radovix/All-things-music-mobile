/**
 * Class represents the genre model. It keeps the data
 * about one genre.
 *
 * @class GenreModel
 */
class GenreModel {
  /**
   * Genre's ID.
   */
  id;

  /**
   * Genre's name.
   */
  name;

  /**
   * Creates an instance of GenreModel.
   *
   * @param {number} id Genre's ID
   * @param {string} [name='-'] Genre's name
   * @memberof GenreModel
   */
  constructor(id, name = '-') {
    this.id = id;
    this.name = name;
  }
}

export default GenreModel;