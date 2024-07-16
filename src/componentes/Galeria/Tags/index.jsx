import styled from 'styled-components'
import tags from './tags.json'


const ItensTags = styled.section`
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #D9D9D9;
    margin-top: 40px;
    
    p {
        margin-right: 70px;
    }

`;

const BotaoAtivo = styled.div`

        display: flex;
        gap: 20px;

        button {
        background: rgba(217, 217, 217, 0.3);
        color: #fff;
        border: 2px solid transparent;
        border-radius: 10px; 
        padding: 12px 8px;
        cursor: pointer;
        &:hover {
            border-color: #C98CF1;
        }
    }
`

const Tags = ({ galeriaTag }) => {

    return (
        <ItensTags>
            <p>Busque por tags:</p>
            <BotaoAtivo>
                {tags.map(tag => <button onClick={() => galeriaTag(tag)} key={tag.id} >{tag.titulo}</button>)}
            </BotaoAtivo>
        </ItensTags>
    )
}

export default Tags