import React, { useReducer } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface Dog {
  name: string
  breed: string
  adopted: boolean
}

const initialState: Dog[] = [
  {
    name: 'Waffles',
    breed: 'Chihuahua',
    adopted: false,
  },
  {
    name: 'Charlie',
    breed: 'Pitbull',
    adopted: true,
  },
  {
    name: 'Prince',
    breed: 'German Shepherd',
    adopted: false,
  },
]

const reducer = (state: Dog[], action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'ADOPT':
      return state.map((dog: Dog) => {
        if (dog.name === action.payload) dog.adopted = true
        return dog
      })
    case 'RETURN':
      return state.map((dog: Dog) => {
        if (dog.name === action.payload) dog.adopted = false
        return dog
      })
    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const adoptDog = (name: string) => dispatch({ type: 'ADOPT', payload: name })
  const returnDog = (name: string) => dispatch({ type: 'RETURN', payload: name })

  return (
    <div className="limit-width">
      <div className="page-title">useReducer</div>

      <h3>강아지 리스트</h3>
      <div className="flex flex-wrap px-4 py-2 bg-slate-100">
        {state.map((dog: Dog) => (
          <Card key={dog.name} className="mr-4 my-2" sx={{ width: 250 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {dog.name}
              </Typography>
              <Typography variant="body2">Breed: {dog.breed}</Typography>
              <Typography variant="body2">
                Status: {dog.adopted ? 'Adopted' : 'Not adopted'}
              </Typography>
            </CardContent>
            <CardActions>
              {dog.adopted ? (
                <Button size="small" onClick={() => returnDog(dog.name)}>
                  Return
                </Button>
              ) : (
                <Button size="small" onClick={() => adoptDog(dog.name)}>
                  Adopt
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>

      <div className="code">
        <pre>
          {`const reducer = (state: Dog[], action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'ADOPT':
      return state.map((dog: Dog) => {
        if (dog.name === action.payload) dog.adopted = true
        return dog
      })
    case 'RETURN':
      return state.map((dog: Dog) => {
        if (dog.name === action.payload) dog.adopted = false
        return dog
      })
    default:
      return state
  }
}`}
        </pre>
      </div>

      <div className="code">
        <pre>
          {`const [state, dispatch] = useReducer(reducer, initialState)

const adoptDog = (name: string) => dispatch({ type: 'ADOPT', payload: name })
const returnDog = (name: string) => dispatch({ type: 'RETURN', payload: name })`}
        </pre>
      </div>
    </div>
  )
}

export default UseReducer
