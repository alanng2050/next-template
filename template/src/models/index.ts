import immerPlugin from '@rematch/immer'
import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { home } from './home.model'

export interface RootModel extends Models<RootModel> {
  home: typeof home
}

export const models: RootModel = { home }

export const store = init<RootModel>({
  models,
  // add immerPlugin to your store
  plugins: [immerPlugin()],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export const useStoreDispatch = () => useDispatch<Dispatch>()
export const useStoreState: TypedUseSelectorHook<RootState> = useSelector
