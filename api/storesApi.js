/* eslint-disable no-unused-vars */
import env from '../config/envConfig'
import fetch from 'isomorphic-unfetch'
import FormData from 'form-data'
// `const res = await fetch('random-site')`

// [4:37]
// `const json = await res.json()`

// [4:37]
// `return json`
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
  static getStore (id) {
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/store/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(r => r.json())
        .then(res => {
          resolve(res.store)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
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
    const formData = new FormData()

    console.log(store)

    for (const key in store) {
      if (key === 'photo') {
        formData.append(key, store[key][0])
      } else if (key === 'tags' && store['tags'].length > 0) {
        console.log('found key tags')
        store.tags.forEach(tag => {
          formData.append(key, tag)
        })
      } else {
        formData.append(key, store[key])
      }
    }

    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/add`, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        //   // Authorization: `Bearer ${token}`
        // },
        body: formData
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
  static updateStore (store) {
    console.log('storeupdate api')
    console.log(store)
    console.log(store['tags'] > 0)

    const formData = new FormData()

    for (const key in store) {
      if (key === 'photo' && typeof store[key] !== 'string') {
        formData.append(key, store[key][0])
      } else if (key === 'tags' && store['tags'].length > 0) {
        console.log('found key tags')
        store.tags.forEach(tag => {
          formData.append(key, tag)
        })
      } else {
        formData.append(key, store[key])
      }
    }

    // const token = getTokenFromLocalStorage()
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/update`, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        //   // Authorization: `Bearer ${token}`
        // },
        body: formData
      })
        .then(r => {
          let res = r.json()

          // check for error message
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
