import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"
import { IoClose } from "react-icons/io5"

const FechaMenu = styled.button`
    display: none;

    @media (max-width: 425px) {
        font-size: 2em;
        color: white;
        border: none;
        background: transparent;
        display: ${(props) => (props.exibindo ? 'block' : 'none')};
        position: fixed;
        top: 0;
        left: 56%;
        z-index: 2;
    }
`

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;  
     
  @media (max-width: 768px) {
    width: 100%; 
    height: 50px; 
    display: flex;
    justify-content: space-around; 
    align-items: center; 
  }

  @media (max-width: 425px) {
    display: ${(props) => (props.exibindo ? 'flex' : 'none')}; 
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 60%;
    height: 63%;
    padding: 10px;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 1;
    justify-content: center;
    align-items: flex-start;
  }
`

const BarraLateral = ({ exibindo, fechaBarra }) => {
    return (
        <aside>
            <nav>
                <FechaMenu onClick={fechaBarra} exibindo={exibindo}><IoClose/></FechaMenu>
                <ListaEstilizada exibindo={exibindo}>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral