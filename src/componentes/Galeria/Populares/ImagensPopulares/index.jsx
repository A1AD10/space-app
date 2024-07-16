import styled from "styled-components"

const Figuras = styled.figure`
    margin: 0 0 25px 0;
`

const Imagens = styled.img`
    width: 240px;
    height: 173px;
    border-radius: 20px;
`

const ImagensPopulares = ({ foto }) => {
    return(
        <Figuras>
            <Imagens src={foto.path} alt=""/>
        </Figuras>
    )
}

export default ImagensPopulares