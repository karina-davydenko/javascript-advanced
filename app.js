'use strict'

/**
 * Получить геологацию пользователя через
 * Geolocation.getCurrentPosition() (WEB API) и по координатам
 * определить город, отправив запрос:
 * https://api.bigdatacloud.net/data/reverse-geocode-client?
 * latitude=37.42159&longitude=-122.0837&localityLanguage=en
 */

function getCoordinates() {
  return new Promise((resolve, reject) => {
    function success(pos) {
      const { coords } = pos;
      resolve({ latitude: coords.latitude, longitude: coords.longitude })
    }

    function error(err) {
      reject(new Error(`(${err.code}): ${err.message}`))
    }

    navigator.geolocation.getCurrentPosition(success, error)
  })
}

async function getCity() {
  try {
    const { latitude, longitude } = await getCoordinates()
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
    if (res.status !== 200) {
      throw new Error(`${res.status} ${res.statusText}`)
    }
    const { city } = await res.json()
    console.log(city)
  } catch (e) {
    console.error(e)
  }
}

getCity()





