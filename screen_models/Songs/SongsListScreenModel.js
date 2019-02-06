import { action, observable } from 'mobx';

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
   * Songs name keyword from filter.
   */
  @observable filterSongName = '';

  /**
   * Artists name keyword from filter.
   */
  @observable filterArtistName = '';

  /**
   * Grades range from filter.
   */
  @observable filterGradesRange = [1, 5];

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
  @action.bound
  async loadSongsList() {
    this.isLoading = true;

    try {
      const payload = {
        songName: this.filterSongName,
        artistName: this.filterArtistName,
        minGrade: this.filterGradesRange[0],
        maxGrade: this.filterGradesRange[1]
      };

      const fetchedSongsList = await this.songsRepository.getSongsList(payload);

      this.songsList.clear();
      this.songsList.push(...fetchedSongsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Resets the filter data.
   *
   * @memberof SongsListScreenModel
   */
  @action.bound
  resetFilter() {
    this.filterSongName = '';
    this.filterArtistName = '',
    this.filterGradesRange = [1, 5];
  }

  /**
   * Handles the changes of text inputs in filter. 
   *
   * @param {string} name Field's name
   * @param {string} value Field's value
   * @memberof SongsListScreenModel
   */
  @action.bound
  onFilterTextInputChange(name, value) {
    this[name] = value;
  }

  /**
   * Handles the change on the grades range in filter.
   *
   * @param {Array<number>} value Grades range
   * @memberof SongsListScreenModel
   */
  @action.bound
  onFilterGradesRangeChange(value) {
    this.filterGradesRange.clear();
    this.filterGradesRange.push(...value);
  }
}

export default SongsListScreenModel;