import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import { IoClose } from "react-icons/io5"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    border: none;
    background: transparent;
    width: 1156px;
    display: grid;
    justify-items: center;

    @media (max-width: 768px) {
        width: 720px;
    }

    @media (max-width: 425px) {
        width: 90%;
    }
`
const Close = styled.button`
    position: absolute;
    right: 8%;
    top: 5%;
    color: #fff;
    background: transparent;
    border: none;
    font-size: 32px;
`

const ModalZoom = ({ foto, fecha, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <Close type="submit" onClick={fecha}><IoClose/></Close>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom