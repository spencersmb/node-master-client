const prod = process.env.NODE_ENV === 'production'

export default {
  BACKEND_URL: !prod ? 'https://nameless-scrubland-28835.herokuapp.com' : 'http://localhost:3001'
}