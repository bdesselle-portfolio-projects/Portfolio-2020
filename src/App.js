import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import Main from './components/Main'
import Aside from './components/Aside'
// import Navigation from './components/Navigation'

export default function App() {
  return (
    <Container>
      <Row>
        <Col xs lg='3'><Aside /></Col>
        <Col><Main /></Col>
        <Col xs lg='1'><h1>Nav</h1></Col>
      </Row>
    </Container>
  )
}
