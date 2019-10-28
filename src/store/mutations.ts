import { MutationTree } from 'vuex'

const mutation: MutationTree<any> = {
  'SET_USER'(state: any, data: any): void {
    state.user = data
  }
}

export default mutation