import AlbumModel from '../../models/Albums/AlbumModel';

import GenresMapper from '../Genres/GenresMapper';
import UserReviewsMapper from '../UserReviews/UserReviewsMapper';
import SongsMapper from '../Songs/SongsMapper';

/**
 * Class represents the albums mapper. It provides methods
 * for mapping the album related DTOs to this application's domain 
 * models.
 *
 * @class AlbumsMapper
 */
class AlbumsMapper {
  /**
   * Maps the album DTO to album model.
   *
   * @static
   * @param {object} albumDto Album DTO
   * @returns album model created with DTO data
   * @memberof AlbumsMapper
   */
  static mapDtoToAlbum(albumDto) {
    const album = new AlbumModel(
      albumDto.Id,
      albumDto.ArtistName,
      albumDto.AlbumCover,
      albumDto.ReleaseDate,
      albumDto.Grade,
      GenresMapper.mapDtosToGenres(albumDto.Genres),
      UserReviewsMapper.mapDtosToUserReviews(albumDto.UserReviews),
      SongsMapper.mapDtosToSongs(albumDto.Songs)
    );

    return album;
  }

  /**
   * Maps the array of album DTOs to array of album models.
   *
   * @static
   * @param {Array<object>} albumsDtos Array of album DTOs
   * @returns array of album models created with DTOs data
   * @memberof AlbumsMapper
   */
  static mapDtosToAlbums(albumsDtos) {
    return albumsDtos.map(albumDto => this.mapDtoToAlbum(albumDto));
  }
}

export default AlbumsMapper;