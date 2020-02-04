import * as React from 'react'
import './App.css';
import { Container, Row, Col, Alert } from 'reactstrap';
import { romanToInt,  intToRoman } from './helper'

// component
import Input from './components/input'

const App = () => {
  const [value, setValue] = React.useState('')
  const [result, setResult] = React.useState<string | number | null >(null)
  const [error, setError] = React.useState<object | string | null>(null)

  const handleOnchange = (event: any) => {
    setValue(event.target.value)
  }

  const handleSubmit = (to: string) => async (event: any) => {
    event.preventDefault()
    let error: object | string | null = null
    let res: number | string | null = null

    try {
      if (!value) {
        throw new Error('Please enter a valid value')
      }
      if (to == 'romans') {
        res = await intToRoman(parseInt(value))
      } else if (to == 'integer') {
        res = await romanToInt(value) 
      }

      if (res == NaN || !res) {
        throw new Error('Please ensure you select the approiate conversion')
      }
      setResult(res)
      setValue('')
    } catch(err) {
      error = err.message || err
    }
    setError(error)
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={{ size: 12 }}><h1>Generate Roman Numerals</h1></Col>
          <Col sm={{ size: 6, offset: 3 }}>
            { error && <Alert color="danger">
              {error}
            </Alert>}
            <Input 
            name='convertInput' 
            value={value} 
            onChange={handleOnchange}
            buttonLabel='Submit'
            handleSubmit={handleSubmit}
            placeholder='Enter a value'/>
            { result &&  <Alert color="success" style={{ marginTop: "20px" }}>
             Result: {result}
            </Alert>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
