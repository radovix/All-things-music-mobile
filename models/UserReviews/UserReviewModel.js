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
   * @param {string} [userName='-'] User's name
   * @param {string} [content='-'] Review's content
   * @memberof UserReviewModel
   */
  constructor(id, userName = '-', content = '-') {
    this.id = id;
    this.userName = userName;
    this.content = content;
  }
}

export default UserReviewModel;