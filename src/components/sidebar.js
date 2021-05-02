const userInfo = {
    image: "assets/img/catanacomics.svg",
    profile: "catanacomics",
    name: "Catana"
}

const userSuggestions = [
    {
        image: "assets/img/bad.vibes.memes.svg",
        profile: "bad.vibes.memes"
    },
    {
        image: "assets/img/chibirdart.svg",
        profile: "chibirdart"
    },
    {
        image: "assets/img/razoesparaacreditar.svg",
        profile: "razoesparaacreditar"
    },
    {
        image: "assets/img/adorable_animals.svg",
        profile: "adorable_animals"
    },
    {
        image: "assets/img/smallcutecats.svg",
        profile: "smallcutecats"
    }
];

export default function SideBar(){
    return(
        <div class="sidebar">
            <SelfUser image={userInfo.image} profile={userInfo.profile} name={userInfo.name}/>
            <Suggestions/>
            <Links/>
            <Copyright/>
        </div>
    );
}

function Suggestions(){
    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {userSuggestions.map(suggestion => <SingleSuggestion image={suggestion.image} profile={suggestion.profile}/>)}
        </div>
    );
}

function SingleSuggestion(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt=""/>
                <div class="texto">
                  <div class="nome">{props.profile}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

function SelfUser(props){
    return(
        <div class="usuario">
            <img src={props.image} alt=""/>
            <div class="texto">
                <strong>{props.profile}</strong>
                {props.name}
            </div>
        </div>
    );
}

function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}