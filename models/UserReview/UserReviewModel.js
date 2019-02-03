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
   * User's ID.
   */
  userId;

  /**
   * User's name.
   */
  userName;

  /**
   * Album's ID.
   */
  albumId;

  /**
   * Review's content.
   */
  content;

  /**
   * Creates an instance of UserReviewModel.
   *
   * @param {number} id Review's ID
   * @param {number} userId User's ID
   * @param {string} userName User's name
   * @param {number} albumId Album's ID
   * @param {string} content Review's content
   * @memberof UserReviewModel
   */
  constructor(id, userId, userName, albumId, content) {
    this.id = id;
    this.userId = userId;
    this.userName = userName;
    this.albumId = albumId;
    this.content = content;
  }
}

export default UserReviewModel;