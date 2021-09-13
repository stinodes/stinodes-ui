import { Dispatch, SetStateAction, useState } from 'react'

type MixedStateProps<State> = void | {
  setState?: void | Dispatch<SetStateAction<State>>
  state?: void | State
}
function useMixedState<State>(
  initialState: State,
  props: MixedStateProps<State>,
): [State, Dispatch<SetStateAction<State>>] {
  const stateTuple = useState<State>(initialState)

  if (props && props.state !== undefined && props.setState !== undefined)
    return [props.state, props.setState]

  return stateTuple
}

export { useMixedState }
