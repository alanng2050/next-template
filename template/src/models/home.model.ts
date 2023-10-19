import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface IData {
  user: User
}
const defaultValues: IData = {
  user: {
    name: 'Bee',
    avatar: '/avatar.png',
  },
}

export const home = createModel<RootModel>()({
  state: defaultValues,
  reducers: {
    updateName(s, payload: User) {
      s.user = payload
    },
  },
  effects: (dispatch) => ({}),
})
