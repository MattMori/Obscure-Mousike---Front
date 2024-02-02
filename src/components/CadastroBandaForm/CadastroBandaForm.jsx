import { DataMusicApi } from "../../api/dataMusicAPi";
import { useState } from "react";
import Swal from "sweetalert2";
import './index.scss';

const CadastroBanda = () => {
    const [nome, setNome] = useState('');
    const [img, setimg] = useState('');
    const [resumo, setResumo] = useState('');
    const [texto, settexto] = useState('');
    const [integrantes, setIntegrantes] = useState('');
    const [urlPlaylist, setUrlPlaylist] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [wikipedia, setWikipedia] = useState('');
    const [spotify, setSpotify] = useState('');



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
            const formulario = { nome, img, texto, resumo, integrantes, urlPlaylist, instagram, facebook, wikipedia, spotify}
            const respostaCadastroBanda = await DataMusicApi.postBand(formulario);
            Toast.fire({
                icon: "success",
                title: "Banda cadastrada com sucesso"
            })
        } catch (erro) {
            Toast.fire({
                icon: "error",
                title: "Erro ao cadastrar Banda"
            })
            console.error('Erro ao fazer cadastrar Banda:', erro);
        }

    };

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        if (name === 'nome') {
            setNome(value)
        }
        if (name === 'img') {
            setimg(value)
        }
        if (name === 'texto') {
            settexto(value)
        }
        if (name === 'resumo') {
            setResumo(value)
        }
        if (name === 'integrantes') {
            setIntegrantes(value)
        } if (name === 'urlPlaylist') {
            setUrlPlaylist(value)
        }
        if (name === 'instagram') {
            setInstagram(value)
        }
        if (name === 'facebook') {
            setFacebook(value)
        }
        if (name === 'wikipedia') {
            setWikipedia(value)
        }
        if (name === 'spotify') {
            setSpotify(value)
        }

    };

    return (
        <form onSubmit={aoSubmeter} className="formulario-Banda">
            <div>
                <label htmlFor="nome">Nome da Banda</label>
                <br />
                <input
                    type="text"
                    name="nome"
                    value={nome}
                    placeholder="Nome da Banda"
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="img">Foto da Banda</label>
                <br />
                <input
                    type="text"
                    name="img"
                    value={img}
                    placeholder="URL da imagem"
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="urlPlaylist">Url da Playlist</label>
                <br />
                <input
                    type="text"
                    name="urlPlaylist"
                    value={urlPlaylist}
                    placeholder="URL da Playlist"
                    onChange={aoAlterarValores}
                /> <br />
                <label htmlFor="instagram">Url do instagram</label>
                <br />
                <input
                    type="text"
                    name="instagram"
                    value={instagram}
                    placeholder="URL do instagram"
                    onChange={aoAlterarValores}
                /> <br />
                <label htmlFor="facebook">Url do facebook</label>
                <br />
                <input
                    type="text"
                    name="facebook"
                    value={facebook}
                    placeholder="URL do facebook"
                    onChange={aoAlterarValores}
                /> <br />
                <label htmlFor="wikipedia">Url da wikipedia</label>
                <br />
                <input
                    type="text"
                    name="wikipedia"
                    value={wikipedia}
                    placeholder="URL da wikipedia"
                    onChange={aoAlterarValores}
                /> <br />
                <label htmlFor="spotify">Url do spotify</label>
                <br />
                <input
                    type="text"
                    name="spotify"
                    value={spotify}
                    placeholder="URL do spotify"
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="integrantes">Integrantes da Banda</label>
                <br />
                <input
                    type="text"
                    name="integrantes"
                    value={integrantes}
                    placeholder="digite os integrantes da Banda separados por virgula"
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="resumo">Breve Resumo</label>
                <br />
                <textarea
                    type="text"
                    name="resumo"
                    value={resumo}
                    placeholder="Breve resumo da Banda"
                    onChange={aoAlterarValores}
                />
                <br />
                <label htmlFor="texto">Historia</label>
                <br />
                <textarea
                    name="texto"
                    value={texto}
                    placeholder="Historia da Banda"
                    onChange={aoAlterarValores}
                />
                <br />
            </div>
            <button type="submit">Cadastrar Banda</button>
        </form>
    )
}

export default CadastroBanda