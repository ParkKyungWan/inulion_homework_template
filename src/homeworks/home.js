import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



export default function Home() {
    
    return(
        <React.Fragment>
            <CardContent>
            <br/>
            <Typography gutterBottom variant="h5" component="h2">
                무엇을 해야 할까요
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
                one ~ nine 까지 총 9개의 바로가기가 있습니다.<br/>
                안내에 따라 각 페이지를 <b>완성</b>시키시면 됩니다. ( 물론 깃허브에 업로드도 하셔야 합니다! )
            </Typography>
            <img width="400" src="/images/main.png"/>

            <br/><br/><br/>
            <Typography gutterBottom variant="h5" component="h2">
                미리 제작된 컴포넌트 활용하기
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
                이 페이지의 디자인은 material-ui 를 이용했습니다. 클래스라이언 5주차-21에서 다루고 있으며, 
                <Link href="https://material-ui.com/"> https://material-ui.com/</Link> 에서 자세한 내용들을
                찾아볼 수 있습니다. 왼쪽 메뉴를 클릭하시면 <b>Components</b> 들이 나열되어 있으니 참고하세요!
            </Typography>
            <br/>
            <img width="500" src="/images/cap2.jpg" />

            <br/><br/><br/><br/>
            <Typography gutterBottom variant="h5" component="h2">
                각 페이지를 만드는 법
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
                App.js 가 있는 경로를 기준으로, <b>'./homeworks'</b> 에 각 페이지 제작을 위한 js 파일이 준비되어 있습니다<br/>
                <br/>기본 템플릿 <br/><img src="/images/code.png"/>
                <br/>코드는 마음대로 쓰셔도 됩니다. 구현만 성공하시면 됩니다!! <br/>
                도움이 필요할때는 구글을 참조하십시오.. 물론 카톡주셔도 됩니다 ㅎㅎㅎ
                <br/>완성하지 못하더라도 되는데 까지 한번 해보시면 좋겠습니다.
            </Typography>
            
            </CardContent>
        </React.Fragment>
    );
}