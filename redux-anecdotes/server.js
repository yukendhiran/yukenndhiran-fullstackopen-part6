import jsonServer from './node_modules/json-server/lib/service.js'

const server = jsonServer.create()
const router = jsonServer.router('db.json') // Path to your db.json file
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log('JSON Server is running on port', PORT)
})
