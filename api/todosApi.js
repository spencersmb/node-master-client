/* eslint-disable no-unused-vars */
import env from '../config/envConfig'
import fetch from 'isomorphic-unfetch'

class TodosApi {
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
  static getJokes (access) {
    return new Promise((resolve, reject) => {
      fetch(`${env.BACKEND_URL}/BACKEND_URL/jokes/celebrity`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access.token}`
        }
      })
        .then(r => {
          const result = r.json()
          return result
        })
        .then(res => {
          resolve({ jokes: res })
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

export default TodosApi
