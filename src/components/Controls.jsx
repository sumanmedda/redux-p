import { useDispatch } from "react-redux"

function Controls(){
  const dispatch = useDispatch()
  const increment = () => dispatch({type: 'INCREMENT'})
  const decrement = () => dispatch({type: 'DECREMENT'})

  return<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={() => increment()} type="button" className="btn btn-primary">Increment</button>
      <button onClick={() => decrement()} type="button" className="btn btn-success">Decrement</button>
    </div>
  </>
}

export default Controls