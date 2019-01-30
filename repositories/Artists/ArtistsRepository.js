import ArtistsListMockData from '../../mocks/Artists/ArtistsListMockData';

/**
 * Class represents the artists repository. It is used 
 * for fetching the artists related data from server. 
 *
 * @class ArtistsRepository
 */
class ArtistsRepository {
  /**
   * Gets the artists list from server.
   *
   * @returns artists list
   * @memberof ArtistsRepository
   */
  getArtistsList() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.ordersMapper.mapDtoToOrders(MockOrdersData.orders)), 2500);
    });
  }
}

export default ArtistsRepository;
