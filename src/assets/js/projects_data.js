const getProjectsDitailData = (project) => {
    switch (project) {
        case 'item1':
            return {
                title: '2주년 이벤트',
                text1:`셀로 2주년을 기념하여
                        특별한 이벤트 참여를 유도하기 위해
                        생일파티에 초대받는 컨셉의 메인 그래픽
                        디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/year.png'),
                link:'https://sell-o.kr/events/2anniversary'
            }
        case 'item2':
            return {
                title: 'item2',
                text1:`item2`,
                text2:'item2',
                text3:['item2','item2'],
                src: require('../image/year.png'),
                link:'https://sell-o.kr/events/2anniversary'
            }
        case 'item3':
            return {
                title: 'item3',
                text1:`item3`,
                text2:'item3',
                text3:['item3','item3'],
                src: require('../image/year.png'),
                link:'https://sell-o.kr/events/2anniversary'
            }
        case 'item4':
            return {
                title: 'item4',
                text1:`item4`,
                text2:'item4',
                text3:['item4','item4'],
                src: require('../image/year.png'),
                link:'https://sell-o.kr/events/2anniversary'
            }

}

};
const getProjectsSubData = {
    Detail:[
        {title:'item1', src:require('../image/2year.png')},
        {title:'item2', src:require('../image/epilogue.png')},
        {title:'item3', src:require('../image/recomment.png')},
        {title:'item4', src:require('../image/iphone16.png')},
        {title:'item5', src:require('../image/z6.png')},
        {title:'item6', src:require('../image/s24fe.png')},
        {title:'item7', src:require('../image/sc.png')},
        {title:'item8', src:require('../image/ai.png')},
        {title:'item9', src:require('../image/boxing.png')},
        {title:'item10', src:require('../image/subtract.png')},
        {title:'item11', src:require('../image/booqoo.png')},
        {title:'item12', src:require('../image/toss01.png')},
        {title:'item13', src:require('../image/toss02.png')},
        {title:'item14', src:require('../image/retro.png')},
        {title:'item15', src:require('../image/clean.png')},
    ],
    etc:[
        {title:'item16', src:require('../image/thumnail_z5.png')},
        {title:'item17', src:require('../image/thumnail_dog.png')},
        {title:'item18', src:require('../image/z5_price.png')},
        {title:'item19', src:require('../image/insta_01.png')},
    ],
    UIUX:[
        {title:'item20', src:require('../image/uiux.png')},
    ]
};

export { getProjectsSubData, getProjectsDitailData }