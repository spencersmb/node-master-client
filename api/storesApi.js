/* eslint-disable no-unused-vars */
import env from '../config/envConfig'
import fetch from 'isomorphic-unfetch'

const handleErrors = response => {
  console.log(response)

  if (response.status !== 200) {
    throw Error('Unable to save store')
  }
  return response
}

const resolvePromiseError = (promise, reject) => {
  promise.then(res => reject(res.message))
}

class StoreApi {
  static getStores () {
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/stores`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(r => r.json())
        .then(res => {
          resolve(res.stores)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
  static addStore (store) {
    // const token = getTokenFromLocalStorage()
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(store)
      })
        .then(r => {
          let res = r.json()

          // res.then(resp => {
          //   console.log('Q')
          //   console.log(resp.message)
          // })

          // FIRST TYPE
          // if (r.status !== 200) {
          //   res.then(r => {
          //     // throw new Error(r.message)
          //     reject(r.message)
          //   })
          // }

          // SECOND TYPE
          if (r.status !== 200) {
            resolvePromiseError(res, reject)
          }

          return res
        })
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

export default StoreApi
