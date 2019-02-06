import GenreModel from '../../models/Genres';

/**
 * Class represents the genres mapper. It provides methods
 * for mapping the genre related DTOs to this application's domain 
 * models.
 *
 * @class GenresMapper
 */
class GenresMapper {
  /**
   * Maps the genre DTO to genre model.
   *
   * @static
   * @param {object} genreDto Genre DTO
   * @returns genre model created with DTO data
   * @memberof GenresMapper
   */
  static mapDtoToGenre(genreDto) {
    const genre = new GenreModel(
      genreDto.Id,
      genreDto.Name
    );

    return genre;
  }

  /**
   * Maps the array of genre DTOs to array of genre models.
   *
   * @static
   * @param {Array<object>} genresDtos Array of genre DTOs
   * @returns array of genre models created with DTOs data
   * @memberof GenresMapper
   */
  static mapDtosToGenres(genresDtos) {
    return genresDtos.map(genreDto => this.mapDtoToGenre(genreDto));
  }
}

export default GenresMapper;