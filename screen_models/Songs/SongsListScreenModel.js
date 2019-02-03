import { observable } from 'mobx';

/**
 * Class represents the songs list screen model.
 * Screen model keeps all the data related to the
 * SongsListScreen. 
 *
 * @class SongsListScreenModel
 */
class SongsListScreenModel {
  /**
   * Songs repository.
   */
  songsRepository;

  /**
   * Is loading data flag.
   */
  @observable isLoading = false;

  /**
   * Songs list.
   */
  @observable songsList = [];

  /**
   * Creates an instance of SongsListScreenModel.
   *
   * @param {SongsRepository} songsRepository Songs repository instance
   * @memberof SongsListScreenModel
   */
  constructor(songsRepository) {
    this.songsRepository = songsRepository;
  }

  /**
   * Loads the songs list data.
   *
   * @memberof SongsListScreenModel
   */
  async loadSongsList() {
    this.isLoading = true;

    try {
      const fetchedSongsList = await this.songsRepository.getSongsList();

      this.songsList.clear();
      this.songsList.push(...fetchedSongsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default SongsListScreenModel;