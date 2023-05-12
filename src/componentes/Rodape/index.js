import  './Rodape.css'


const Rodape = () => {

    return (
        <footer className='rodapeSite'>
            <div className='rodapeLogosRedesSociais'>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="Facebook"/>
                </a>
                
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="Twitter"/>
                </a>

                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="Instagram"/>
                </a>
            </div>
            
            <img src="/imagens/logo.png" alt="Organo"/>

            <p className='rodapeTexto'> Desenvolvido por Alura </p>          
        </footer>
    )
}

export default Rodape
