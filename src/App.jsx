import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import TituloEstilizado from "./componentes/TituloEstilizado"
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`  
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const ConteutdoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)

  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const busca = (campoBusca) => {
    if (campoBusca === '') {
      return setFotosDaGaleria(fotos) 
    }
    setFotosDaGaleria(
      fotos.filter(foto => foto.titulo.toLowerCase().includes(campoBusca.toLowerCase()))
    )
  }

  const tagSelecionada = (tag) => {
    if (tag.id === 0) {
      return setFotosDaGaleria(fotos);
    }

    setFotosDaGaleria(
      fotos.filter((foto) => {
        return foto.tagId === tag.id;
      })
    );
  }

  const fechaModal = () => {
    setFotoSelecionada(null)
  }

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return{
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho campoBusca={busca}/>
        <MainContainer>
          <BarraLateral/>
          <ConteutdoGaleria>
            <TituloEstilizado/>
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito} 
              fotos={fotosDaGaleria}
              galeriaTag={tagSelecionada}
              />
          </ConteutdoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} fecha={fechaModal}
      aoAlternarFavorito={aoAlternarFavorito}/>
      <Rodape/>
    </FundoGradiente>
  )
}

export default App
