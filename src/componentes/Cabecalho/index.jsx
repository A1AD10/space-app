import { styled } from "styled-components"
import CampoTexto from "../../CampoTexto"
import { CgMenu } from "react-icons/cg"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }

    @media (max-width: 768px) {
        justify-content: space-evenly;
    }

    @media (max-width: 425px) {
        display: block;
    }
`
const ContainerHeader = styled.div`
    display: flex;

    @media (max-width: 425px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 15px;
    }
`

const Botao = styled.button`
    display: none;

    @media (max-width: 425px) {
        display: grid;
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        color: white;
        font-size: 30px;
    }
`

const Cabecalho = ({ campoBusca, exibirBarra }) => {

    return (
        <HeaderEstilizado>
            <ContainerHeader>
                <Botao onClick={exibirBarra}><CgMenu/></Botao>
                <img src="/imagens/logo.png" alt=""/>
            </ContainerHeader>
            <CampoTexto campoBusca={campoBusca}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho