/**
 * Class represents the user review model. It keeps the data
 * about one album's review made by user.
 *
 * @class UserReviewModel
 */
class UserReviewModel {
  /**
   * Review's ID.
   */
  id;

  /**
   * Album's ID.
   */
  albumId;

  /**
   * User's ID.
   */
  userId;

  /**
   * User's name.
   */
  userName;

  /**
   * Review's content.
   */
  content;

  /**
   * Creates an instance of UserReviewModel.
   *
   * @param {number} id Review's ID
   * @param {number} albumId Album's ID
   * @param {number} userId User's ID
   * @param {string} [userName='-'] User's name
   * @param {string} [content='-'] Review's content
   * @memberof UserReviewModel
   */
  constructor(id, albumId, userId, userName = '-', content = '-') {
    this.id = id;
    this.albumId = albumId;
    this.userId = userId;
    this.userName = userName;
    this.content = content;
  }
}

export default UserReviewModel;