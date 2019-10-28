import { ActionTree } from 'vuex'
import jwt_decode from 'jwt-decode'

const actions: ActionTree<any, any> = {
  async setUsers({state, commit}, user: any) {
    const decoded = jwt_decode(user)
    commit('SET_USER', decoded)
  }
}

export default actions