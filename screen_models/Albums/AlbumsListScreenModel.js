import { action, observable } from 'mobx';

/**
 * Class represents the albums list screen model.
 * Screen model keeps all the data related to the
 * AlbumsListScreen. 
 *
 * @class AlbumsListScreenModel
 */
class AlbumsListScreenModel {
  /**
   * Albums repository.
   */
  albumsRepository;

  /**
   * Is loading data flag.
   */
  @observable isLoading = false;

  /**
   * Albums list.
   */
  @observable albumsList = [];

  /**
   * Albums name keyword from filter.
   */
  @observable filterAlbumName = '';

  /**
   * Artists name keyword from filter.
   */
  @observable filterArtistName = '';

  /**
   * Grades range from filter.
   */
  @observable filterGradesRange = [1, 5];

  /**
   * Creates an instance of AlbumsListScreenModel.
   *
   * @param {AlbumsRepository} albumsRepository Albums repository instance 
   * @memberof AlbumsListScreenModel
   */
  constructor(albumsRepository) {
    this.albumsRepository = albumsRepository;
  }

  /**
   * Loads the albums list data.
   *
   * @memberof AlbumsListScreenModel
   */
  @action.bound
  async loadAlbumsList() {
    this.isLoading = true;

    try {
      const payload = {
        albumName: this.filterAlbumName || null,
        artistName: this.filterArtistName || null,
        minGrade: this.filterGradesRange[0],
        maxGrade: this.filterGradesRange[1]
      };

      const fetchedAlbumsList = await this.albumsRepository.getAlbumsList(payload);

      this.albumsList.clear();
      this.albumsList.push(...fetchedAlbumsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Resets the filter data.
   *
   * @memberof AlbumsListScreenModel
   */
  @action.bound
  resetFilter() {
    this.filterAlbumName = '';
    this.filterArtistName = '',
    this.filterGradesRange = [1, 5];
  }

  /**
   * Handles the changes of text inputs in filter. 
   *
   * @param {string} name Field's name
   * @param {string} value Field's value
   * @memberof AlbumsListScreenModel
   */
  @action.bound
  onFilterTextInputChange(name, value) {
    this[name] = value;
  }

  /**
   * Handles the change on the grades range in filter.
   *
   * @param {Array<number>} value Grades range
   * @memberof AlbumsListScreenModel
   */
  @action.bound
  onFilterGradesRangeChange(value) {
    this.filterGradesRange.clear();
    this.filterGradesRange.push(...value);
  }
}

export default AlbumsListScreenModel;