import ArtistsListMockData from '../../mocks/Artists/ArtistsListMockData';
import AlbumsListMockData from '../../mocks/Albums/AlbumsListMockData';

/**
 * Class represents the fake artists repository. It is used 
 * for mocking the artist repository and returns the mock data.
 *
 * @class FakeArtistsRepository
 */
class FakeArtistsRepository {
  /**
   * Gets the artists list from server.
   *
   * @param {object} payload Payload data
   * @returns artists list
   * @memberof FakeArtistsRepository
   */
  getArtistsList() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ArtistsListMockData), 3500);
    });
  }

  /**
   * Gets the artist's details from server.
   *
   * @param {object} payload Payload data
   * @returns artist's details
   * @memberof FakeArtistsRepository
   */
  getArtistDetails(payload) {
    const artist = ArtistsListMockData.filter(a => a.id === payload.id)[0];
    const albums = AlbumsListMockData.filter(a => artist.albums.includes(a.id));
    artist.albums = albums;

    return new Promise((resolve) => {
      setTimeout(() => resolve(artist), 3500);
    });
  }
}

export default FakeArtistsRepository;
