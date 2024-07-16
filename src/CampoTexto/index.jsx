import { styled } from "styled-components"
import Search from '/imagens/search.png'
import { useState } from "react"

const CampoInput = styled.input`
    width: 602px;
    height: 56px;
    padding: 4px 14px;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    border-image-slice: 1;
    background: transparent;
    box-sizing: border-box;
    color:#FFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;

    &::placeholder {
        color: #D9D9D9;
    }
    
`;

const CampoSearch = styled.img`
    position: relative;
    left: 93%;
    top: 12%;
    width: 32px;
    height: 32px;
`;

const Campo = styled.div`
    display: flex;
    flex-direction: row-reverse;
`


const CampoTexto = ({campoBusca}) => {

    const [valorInput, setValorInput] = useState('')

    const atualizaValor = (e) => {
        setValorInput(e.target.value)
    }

    const exibirValor = () => {
        return valorInput
    }

    return (
        <Campo>
            <CampoInput placeholder="O que você procura?" onChange={atualizaValor}/>
            <CampoSearch src={Search} onClick={() => campoBusca(exibirValor())}/>
        </Campo>
    )
}

export default CampoTexto


