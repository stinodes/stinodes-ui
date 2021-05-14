import { Dispatch, SetStateAction, useState } from 'react'

function useMixedState<State>(
  initialState: State,
  props?: void | {
    setState?: void | Dispatch<SetStateAction<State>>
    state?: void | State
  },
): [State, Dispatch<SetStateAction<State>>]

function useMixedState<State>(initialState, props) {
  const stateTuple = useState<State>(initialState)

  if (props.state !== undefined || props.setState !== undefined)
    return [props.state, props.setState]

  return stateTuple
}

export { useMixedState }
