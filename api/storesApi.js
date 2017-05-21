/* eslint-disable no-unused-vars */
import env from '../config/envConfig'
import fetch from 'isomorphic-unfetch'
import FormData from 'form-data'
import { convertToFormData } from '../utils/storeHelpers'

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
  static async getTagList (tag) {
    const url = `${env.BACKEND_URL}/tags/${tag}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Resolve here to return the array below instead of store[]
    const body = await response.json()

    if (response.status !== 200) {
      const error = {
        message: 'Could not find tags'
      }

      throw error.message
    }
    /* Data sent down is 2 arrays [
      [tags],
      [stores]
     ]
     */
    return body
  }
  static async getSingleStore (slug) {
    const url = `${env.BACKEND_URL}/store/${slug}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Resolve here to return the array below instead of store[]
    const body = await response.json()

    if (response.status !== 200) {
      const error = {
        message: 'Could not find store'
      }

      throw error.message
    }

    return body.store
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
    // Must create FormData when posting an image
    const formData = convertToFormData(store)

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
    const formData = convertToFormData(store)

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
