const os = require('node:os')

function getNetwork() {
  const interfaces = os.networkInterfaces()
  const redes = {}

  Object.keys(interfaces).forEach((nombre) => {
    redes[nombre] = interfaces[nombre].map((interface) => (
      { 
        Familia: interface.family,
        Direccion: interface.address,
        Interno: interface.internal
      }
    ))
  })
  return redes
}
module.exports = getNetwork