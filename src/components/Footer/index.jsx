import React from 'react'
import { Card, Container } from './style';

const Footer = () => {
  return (
    <Container>
        <Card>
            <Card.Item>
                © Zafarfed
            </Card.Item>
        </Card>

        <Card>
            <Card.Item>
                Search me anywhere @Zafarfed
            </Card.Item>
        </Card>

        <Card>
            <Card.Item>
                Zafarfed
            </Card.Item>
        </Card>
    </Container>
  )
}

export default Footer;