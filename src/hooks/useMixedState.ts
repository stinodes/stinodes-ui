import { Dispatch, SetStateAction, useState } from 'react'

type UseMixedState<State> = {
  (
    initialState: any,
    props: {
      state: State
      setState: Dispatch<SetStateAction<State>>
    },
  ): [State, Dispatch<SetStateAction<State>>]

  (
    initialState: State,
    props: {
      setState?: void
      state?: void
    },
  ): [State, Dispatch<SetStateAction<State>>]
}

export const useMixedState: UseMixedState = (initialState, props) => {
  const stateTuple = useState<State>(initialState)

  if (props.state !== undefined && props.setState !== undefined)
    return [props.state, props.setState]

  return stateTuple
}
