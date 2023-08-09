import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$code',
  backgroundColor: '$ignite300',
  borderRadius: '$lg',
  padding: '$4',
})

export function App() {
  return <Button>Hello World!</Button>
}
