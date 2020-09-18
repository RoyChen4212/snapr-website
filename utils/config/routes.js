const nextRoutes = require('next-routes');
// eslint-disable-next-line no-multi-assign
const routes = (module.exports = nextRoutes());

routes
  .add('home', '/', 'HomePage')
  .add('hotels', '/hotels', 'HotelsPage')
  .add('conferences', '/conferences', 'HotelsPage')
  .add('apartments', '/hotels/:cityName/:hotelName', 'ApartmentsPage')
  .add('confApartments', '/conferences/:cityName/:hotelName', 'ApartmentsPage')
  .add('offers', '/offers/:offerName?', 'OffersPage')
  .add('special-offers', '/special-offers?', 'OffersPage')
  .add('welcome', '/welcome', 'OffersPage')
  .add('careers', '/careers', 'CareersPage')
  .add('join', '/join', 'JoinPage')
  .add('find-us', '/find-us', 'FindUsPage')
  .add('blog', '/find-us/about/news/:blogName', 'OffersPage/BlogPage')
  .add('about', '/find-us/about', 'FindUsPage/AboutUsPage')
  .add('email-disclaimer', '/email-disclaimer', 'EmailDisclaimer')
  .add('turnitup', '/turnitup', 'Turnitup');
