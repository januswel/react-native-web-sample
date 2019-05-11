import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Todo } from '@januswel/domain'

import { clearError } from '../modules/error'
import { addSync, removeSync, updateSync } from '../usecases/todo'
import Screen from '../components/Screen'
import isWating from '../selectors/is-waiting'
import { AppState } from '../modules'

export const mapStateToProps = (state: AppState) => ({
  error: state.error.error,
  isCommunicating: isWating(state),
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
  actions: {
    clearError: () => {
      dispatch(clearError())
    },
    addSync: (todo: Todo.Values) => {
      dispatch(addSync(todo))
    },
    updateSync: (id: number, todo: Todo.Values) => {
      dispatch(updateSync(id, todo))
    },
    removeSync: (id: number) => {
      dispatch(removeSync(id))
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
