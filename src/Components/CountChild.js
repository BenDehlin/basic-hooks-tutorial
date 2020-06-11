import React, {useEffect} from 'react'

const CountChildTwo = ({count}) => {
    useEffect(() => {
        console.log(`count has changed to ${count}`)
        // useEffect dependency array is important to tell the useEffect
        // hook when it should re-fire. If you forget the dependency array
        // then the useEffect hook will fire after every single re-render.
        // If you leave the dependency array blank it will fire once just like
        // a componentDidMount lifecycle method. If you put any piece of state
        // or a prop in there it will fire once whenn the component first loads
        // and then again every time anything in the dependency array changes.
    }, [count])
    return (
        <div>
          <h1>Count: {count}</h1>
        </div>
      )
}
export default CountChildTwo