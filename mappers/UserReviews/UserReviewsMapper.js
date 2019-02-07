import UserReviewModel from '../../models/UserReviews/UserReviewModel';

/**
 * Class represents the user reviews mapper. It provides methods
 * for mapping the user review related DTOs to this application's 
 * domain models.
 *
 * @class UserReviewsMapper
 */
class UserReviewsMapper {
  /**
   * Maps the user review DTO to user review model.
   *
   * @static
   * @param {object} userReviewDto User review DTO
   * @returns user review model created with DTO data
   * @memberof UserReviewsMapper
   */
  static mapDtoToUserReview(userReviewDto) {
    const userReview = new UserReviewModel(
      userReviewDto.Id,
      userReviewDto.UserName,
      userReviewDto.Content
    );

    return userReview;
  }

  /**
   * Maps the array of user review DTOs to array of user review 
   * models.
   *
   * @static
   * @param {Array<object>} userReviewsDtos Array of user review DTOs
   * @returns array of user review models created with DTOs data
   * @memberof UserReviewsMapper
   */
  static mapDtosToUserReviews(userReviewsDtos) {
    return userReviewsDtos.map(userReviewDto => this.mapDtoToUserReview(userReviewDto));
  }
}

export default UserReviewsMapper;