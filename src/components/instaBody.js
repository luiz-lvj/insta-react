import Stories from './getStories';
import Posts from './getPosts';
import SideBar from './sidebar';

export default function InstaBody(){
    return(
        <div class="corpo">
            <LeftContent/>
            <SideBar/>
        </div>
    );
}

function LeftContent(){
    return(
        <div class="esquerda">
            <Stories/>
            <Posts/>
        </div>
    );
}