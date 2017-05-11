/* eslint-disable no-unused-vars */
import env from '../config/envConfig'
import fetch from 'isomorphic-unfetch'

class StoreApi {
  static getTodos () {
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/todos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(r => r.json())
        .then(res => {
          resolve(res.todos)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
  static addStore (store) {
    // since this always happens on the server I can just get the jwt from localhost
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
        .then(r => r.json())
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
