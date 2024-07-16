import { styled } from "styled-components"

const Titulo = styled.h2`
    color: #7B78E6;
    width: 90%;
    font-size: 32px;
    font-weight: 100;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

export default Titulo