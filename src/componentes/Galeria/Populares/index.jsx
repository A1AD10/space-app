import styled from "styled-components"
import Titulo from "../../Titulo"
import ImagensPopulares from "./ImagensPopulares"

const ItensPopulares = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FotosContainer = styled.section`
    margin: 0;
`
const BotaoVerMais = styled.button`
    width: 240px;
    height: 66px;
    font-size: 23px;
    color: #fff;
    background: transparent;
    border: 2px solid #C98CF1;
    border-radius: 12px;

    @media (max-width: 425px) {
        width: 340px;
    }
`

const Populares = ({ fotosPop = [] }) => {
    return (
        <ItensPopulares>
            <Titulo $alinhamento="center">Populares</Titulo>
                <FotosContainer>
                    {fotosPop.map(foto => <ImagensPopulares
                        fotosPop={fotosPop}
                        key={foto.id}
                        foto={foto}/> )}
                    <BotaoVerMais>Ver mais</BotaoVerMais>
                </FotosContainer>
        </ItensPopulares>
    )
}

export default Populares
