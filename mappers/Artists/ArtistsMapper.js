import ArtistModel from '../../models/Artists/ArtistModel';

import GenresMapper from '../Genres/GenresMapper';
import AlbumsMapper from '../Albums/AlbumsMapper';

/**
 * Class represents the artists mapper. It provides methods
 * for mapping the artist related DTOs to this application's domain 
 * models.
 *
 * @class ArtistsMapper
 */
class ArtistsMapper {
  /**
   * Maps the artist DTO to artist model.
   *
   * @static
   * @param {object} artistDto Artist DTO
   * @returns artist model created with DTO data
   * @memberof ArtistsMapper
   */
  static mapDtoToArtist(artistDto) {
    const artist = new ArtistModel(
      artistDto.Id,
      artistDto.Name,
      artistDto.Biography,
      artistDto.Image,
      GenresMapper.mapDtosToGenres(artistDto.Genres),
      AlbumsMapper.mapDtosToAlbums(artistDto.Albums)
    );

    return artist;
  }

  /**
   * Maps the array of artist DTOs to array of artist models.
   *
   * @static
   * @param {Array<object>} artistsDtos Array of artist DTOs
   * @returns array of artist models created with DTOs data
   * @memberof ArtistsMapper
   */
  static mapDtosToArtists(artistsDtos) {
    return artistsDtos.map(artistDto => this.mapDtoToArtist(artistDto));
  }
}

export default ArtistsMapper;