import styled from "styled-components"

const Footer = styled.footer`
    padding: 0 25px;
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin-top: 85px;

    p {
        color: white;
        font-size: 18px;
        letter-spacing: 2px;
    }
`

const BoxIcones = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Icone = styled.img`
    margin-right: 34px;
`

const Rodape = () => {
    return (
        <Footer>
            <BoxIcones>
                <Icone src="/imagens/sociais/facebook.svg"/>
                <Icone src="/imagens/sociais/twitter.svg"/>
                <Icone src="/imagens/sociais/instagram.svg"/>
            </BoxIcones>
            <p>Desenvolvido por Alura.</p>
        </Footer>
    )
}

export default Rodape