export type LoadState<Data> =
  | { status: "loading" }
  | { status: "error" }
  | { status: "loaded"; data: Data }

export function isLoading<Data>(state: LoadState<Data>): boolean {
  return state.status === "loading"
}

export function hasFailed<Data>(state: LoadState<Data>): boolean {
  return state.status === "error"
}
