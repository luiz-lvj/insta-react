const userVideos = [
    "assets/video/video.mp4",
    "assets/video/video.ogv"
];

const userImages = [
    "assets/img/meowed.svg",
    "assets/img/barked.svg"
];

const postImages = [
    "assets/img/gato-telefone.svg",
    "assets/img/dog.svg"
];

const usersPosts = [
    "meowed",
    "barked"
];

const likedFor = [
    {
        user: "respondeai",
        number: "101.523",
        image: "assets/img/respondeai.svg"
    },
    {
        user: "adorable_animals",
        number: "99.159",
        image: "assets/img/adorable_animals.svg"
    }
];

export default function Posts(){
    const allPosts = getAllPosts();
    return(
        <div class="posts">

            <SinglePost userImage={userImages[0]} mp4Video={userVideos[0]} ogvVideo={userVideos[1]} userPost={usersPosts[0]}
                userLike={likedFor[0].user} numberLikes={likedFor[0].number} imageLikes={likedFor[0].image}/>

            {allPosts.map(post => <SinglePost userImage={post.userImage} postImage={post.postImage} userPost={post.userPost}
                userLike={post.userLike} numberLikes={post.numberLikes} imageLikes={post.imageLikes}/>)}
        </div>
    );
}

function SinglePost(props){
    return(
        <div class="post">
            <PostTop userImage={props.userImage} userPost={props.userPost}/>
            {props.mp4Video ?
            <PostContent mp4Video={props.mp4Video} ogvVideo={props.ogvVideo}/>
            : <PostContent postImage={props.postImage}/>}
            <PostBottom userLike={props.userLike} numberLikes={props.numberLikes} imageLikes={props.imageLikes}/>
        </div>
    );
}

function PostBottom(props){
    return(
        <div class="fundo">
            <BottomActions/>
            <BottomLikes userLike={props.userLike} numberLikes={props.numberLikes} imageLikes={props.imageLikes}/>
        </div>
    );
}

function BottomLikes(props){
    return(
        <div class="curtidas">
            <img src={props.imageLikes} alt=""/>
            <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
            </div>
        </div>
    );
}

function BottomActions(){
    return(
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}

function PostTop(props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src={props.userImage} alt=""/>
                {props.userPost}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function PostContent(props){
    const content = props.mp4Video ?
    (
        <div class="conteudo">
            <video controls autoplay muted>
                <source src={props.mp4Video} type="video/mp4"/>
                <source src={props.ogvVideo} type="video/ogv"/>
            </video>
        </div>
    )
    : (
        <div class="conteudo">
            <img src={props.postImage} alt=""/>
        </div>
    );
    return content;
}

function getAllPosts(){
    let posts = [];
    for(let i = 0; i< userImages.length; i++){
        const post = {
            userImage: userImages[i],
            postImage: postImages[i],
            userPost: usersPosts[i],
            userLike: likedFor[i].user,
            numberLikes: likedFor[i].number,
            imageLikes: likedFor[i].image
        };
        posts.push(post);
    }
    return posts;
}