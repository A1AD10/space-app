import styled from "styled-components";
import Banner from "../../assets/banner.png";

const Titulo = styled.div`

    background: url(${props => props.background}) no-repeat;
    background-size: cover;
    border-radius: 25px;
    width: 100%;
    height: 45vh;
    margin-top: 30px;

    h2 {
        color: #FFF;
        font-size: 43px;
        font-weight: 100;
        top: 65px;
        left: 9vh;
        max-width: 300px;
        position: relative;
    }
`


const TituloEstilizado = () => {
    return (
        <Titulo background={Banner}>
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </Titulo>
    )
}

export default TituloEstilizado