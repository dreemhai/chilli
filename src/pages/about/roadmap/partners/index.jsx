import styled from 'styled-components/macro'

const Heading = styled.h2`
  font-family: BadaBoom;
  font-size: 96px;
  font-weight: 400;
  line-height: 102px;
  color: #FFF;
  margin: 0;
`

const Title = styled.div`
  margin-bottom: 18px;
`

const Partners = () => {
    return (
        <>
            <Heading>
                <Title>
                    PARTNERS
                </Title>
            </Heading>
        </>
    )
}

export default Partners;