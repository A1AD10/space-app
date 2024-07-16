import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"
import FotosPop from '../../fotosPopulares.json'
import { useState } from "react"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], aoFotoSelecionada, aoAlternarFavorito, galeriaTag}) => {

    const [fotosPop, setFotosPop] = useState(FotosPop)

    return (
        <>
            <Tags galeriaTag={galeriaTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            fotos={fotos} 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto}/>)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares fotosPop={fotosPop} />
            </GaleriaContainer>
        </>
    )
}

export default Galeria