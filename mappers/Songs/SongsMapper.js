import SongModel from '../../models/Songs/SongModel';

/**
 * Class represents the songs mapper. It provides methods
 * for mapping the song related DTOs to this application's domain 
 * models.
 *
 * @class SongsMapper
 */
class SongsMapper {
  /**
   * Maps the song DTO to song model.
   *
   * @static
   * @param {object} songDto Song DTO
   * @returns song model created with DTO data
   * @memberof SongsMapper
  */
  static mapDtoToSong(songDto) {
    const song = new SongModel(
      songDto.Id,
      songDto.ArtistName,
      songDto.Name,
      songDto.Grade
    );

    return song;
  }

  /**
   * Maps the array of song DTOs to array of song models.
   *
   * @static
   * @param {Array<object>} songsDtos Array of song DTOs 
   * @returns array of song models created with DTOs data
   * @memberof SongsMapper
   */
  static mapDtosToSongs(songsDtos) {
    return songsDtos.map(songDto => this.mapDtoToSong(songDto));
  }
}

export default SongsMapper;