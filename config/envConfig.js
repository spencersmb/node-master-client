import { svgs } from './svgs'
const prod = process.env.NODE_ENV === 'production'

export default {
  BACKEND_URL: prod
    ? 'https://nameless-scrubland-28835.herokuapp.com'
    : 'http://localhost:7777',
  WEBSITE_TITLE: 'Now Thats Delicious!',
  LINKS: [
    { slug: '/stores', title: 'Stores', icon: svgs.Store },
    { slug: '/tags', title: 'Tags', icon: svgs.Tag },
    { slug: '/top', title: 'Top', icon: svgs.Top },
    { slug: '/store/create', title: 'Add', icon: svgs.Add },
    { slug: '/map', title: 'Map', icon: svgs.MapSvg }
  ],
  LOGO: svgs.Logo,
  TAGS: ['Wifi', 'Open Late', 'Family Friendly', 'Vegetarian', 'Licensed']
}
