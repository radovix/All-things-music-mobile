import ArtistsListMockData from '../../mocks/Artists/ArtistsListMockData';
import AlbumsListMockData from '../../mocks/Albums/AlbumsListMockData';
import UserReviewsListMockData from '../../mocks/Albums/UserReviewsListMockData';
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
    const album = { ...AlbumsListMockData.filter(a => a.id === payload.id)[0] };
    const artist = ArtistsListMockData.filter(a => a.albums.includes(payload.id))[0];
    const songs = SongsListMockData.filter(s => album.songs.includes(s.id));
    const userReviews = UserReviewsListMockData.filter(ur => ur.albumId === payload.id);

    album.artist = artist || [];
    album.songs = songs;
    album.userReviews = userReviews;

    return new Promise((resolve) => {
      setTimeout(() => resolve(album), 3500);
    });
  }
}

export default FakeAlbumsRepository;