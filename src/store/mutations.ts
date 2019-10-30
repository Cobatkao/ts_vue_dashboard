import { MutationTree } from 'vuex'

const mutation: MutationTree<any> = {
  'SET_USER'(state: any, data: any): void {
    state.user = data
  },
  'SET_ROUTERs'(state: any, routers: any): void {
    state.routers = routers
  }
}

export default mutation