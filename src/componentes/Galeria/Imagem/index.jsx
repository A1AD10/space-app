import styled from "styled-components"

const Card = styled.figure`
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 0;

    width: ${props => props.$expandida ? '90%' : '460px'};

    figcaption {
        color: #fff;
        background: #001634;
        padding: 0 0 0 25px;
        margin-top: -30px;
        height: 70px;
    }

    h3 {
        margin: 12px 0 0 0;
        font-size: 17px;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        margin: 0;
        font-size: 16px;
    }

    div {
        display: flex;
        align-items: center;
    }
`

const Botoes = styled.button`
    border-style: none;
    background: transparent;
    margin: 0 10px 0 10px;

    img {
        width: 22px;
    }
`

const Imagem = ({foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito}) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    return ( 
        <Card $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>Fonte/{foto.fonte}</p>
                    <div>
                        <Botoes onClick={() => aoAlternarFavorito(foto)}><img src={iconeFavorito} /></Botoes>
                        {!expandida && <Botoes aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}><img src='/icones/expandir.png' /></Botoes>}
                    </div>
                </footer>
            </figcaption>
        </Card>      
    )
}

export default Imagem
