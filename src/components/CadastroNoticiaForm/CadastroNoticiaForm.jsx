import { DataMusicApi } from "../../api/dataMusicAPi"; 
import { useState } from "react";
import Swal from "sweetalert2";
import './index.scss';

const CadastroNoticia = () => {
    const [titulo, setTitulo] = useState('');
    const [img, setimg] = useState('');
    const [texto, settexto] = useState('');

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const formulario = { titulo, img, texto }
            const respostaCadastroNoticias = await DataMusicApi.postNotice(formulario);
            Toast.fire({
                icon: "success",
                title: "noticia cadastrada com sucesso"
            })
        } catch (erro) {
            Toast.fire({
                icon: "error",
                title: "Erro ao cadastrar noticia"
            })
            console.error('Erro ao fazer cadastrar noticia:', erro);
        }

    };

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        if (name === 'titulo') {
            setTitulo(value)
        }
        if (name === 'img') {
            setimg(value)
        }
        if (name === 'texto') {
            settexto(value)
        } 
    };

    return (
        <form onSubmit={aoSubmeter} className="formulario-Noticia">
            <div>
                <label htmlFor="titulo">Titulo da Noticia</label>
                <br />
                <input
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="img">Imagem da noticia</label>
                <br />
                <input
                    type="text"
                    name="img"
                    value={img}
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="texto">Texto da Noticia</label>
                <br />
                <textarea
                    name="texto"
                    value={texto}
                    onChange={aoAlterarValores}
                />
                <br />
            </div>
            <button type="submit">Criar Noticia</button>
        </form>
    )
}

export default CadastroNoticia