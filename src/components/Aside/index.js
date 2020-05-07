import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaSearchLocation } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'

export default function index() {
    return (
        <div className='text-center'>
            <Image src='https://via.placeholder.com/175' roundedCircle />
            <h2>Brandon Desselle</h2>
            <h5><FaSearchLocation/> Pineville, Louisiana</h5>
            <Badge pill variant='primary'>Web Developer</Badge>
            <div>
                <Nav fill>
                    <Nav.Item>
                        <Nav.Link href='https://www.linkedin.com/in/bdesselle97/' target='_blank'><FaLinkedin /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='https://github.com/BDesselle' target='_blank'><FaGithubSquare /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='https://twitter.com/KekklesKat' target='_blank'><FaTwitterSquare /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Button block>Email Me</Button>
        </div>
    )
}
