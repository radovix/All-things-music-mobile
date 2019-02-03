import ArtistsListMockData from '../../mocks/Artists/ArtistsListMockData';
import AlbumsListMockData from '../../mocks/Albums/AlbumsListMockData';
import SongsListMockData from '../../mocks/Songs/SongsListMockData';

/**
 * Class represents the fake albums repository. It is used 
 * for mocking the albums repository and returns the mock data.
 *
 * @class FakeAlbumsRepository
 */
class FakeAlbumsRepository {
  /**
   * Gets the albums list from server.
   *
   * @param {object} payload Payload data
   * @returns albums list
   * @memberof FakeAlbumsRepository
   */
  getAlbumsList(payload) {
    const albums = AlbumsListMockData.map(a => ({
      ...a,
      artist: ArtistsListMockData.filter(ar => ar.id === a.artistId)[0]
    }));  

    console.log(albums);

    return new Promise((resolve) => {
      setTimeout(() => resolve(albums), 3500);
    });
  }

  /**
   * Gets the album's details from server.
   *
   * @param {object} payload Payload data
   * @returns album's details
   * @memberof FakeAlbumsRepository
   */
  getAlbumDetails(payload) {
    const album = AlbumsListMockData.filter(a => a.id === payload.id)[0];
    const songs = SongsListMockData.filter(s => album.songs.includes(s.id));
    album.songs = songs;
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(album), 3500);
    });
  }
}

export default FakeAlbumsRepository;