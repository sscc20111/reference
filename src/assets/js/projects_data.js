const getProjectsDitailData = (project) => {
    switch (project) {
        case 'item1':
            return {
                title: '2주년 이벤트',
                text1:`셀로 2주년을 기념하여 특별한 이벤트 참여를 유도하기 위해 생일파티에 초대받는 컨셉의 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/year.png'),
                link:'https://sell-o.kr/events/2anniversary'
            }
        case 'item2':
            return {
                title: '후기 이벤트(리뉴얼)',
                text1:`매 달 진행되는 후기 이벤트를 리뉴얼하여 더욱 풍성한 경품을 제공하고자 하였다. 이에 따라 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/epilogue_02.png'),
                link:'https://sell-o.kr/events/review_2025'
            }
        case 'item3':
            return {
                title: '추천인 이벤트(리뉴얼)',
                text1:`매 달 진행되는 추천인 이벤트를 리뉴얼하여 더욱 풍성한 경품을 제공하고자 하였다. 이에 따라 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/recomment_02.png'),
                link:'https://sell-o.kr/events/recommend_2025'
            }
        case 'item4':
            return {
                title: '아이폰 16 이벤트',
                text1:`아이폰 16 발매기념 이벤트를 진행하기 위해 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/iphone16_02.png'),
                link:'https://sell-o.kr/events/iphone16_event'
            }
            case 'item5':
            return {
                title: '갤럭시 Z6 이벤트',
                text1:`갤럭시 Z6 시리즈 발매기념 이벤트를 진행하기 위해 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/z6_02.png'),
                link:'https://sell-o.kr/events/166'
            }
            case 'item6':
            return {
                title: '갤럭시 추가 보상 이벤트',
                text1:`갤럭시 시리즈를 중고폰으로 판매할 시 판매금에 추가로 보상금을 지원해주는 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/s24(fe)_02.png'),
                link:'https://sell-o.kr/events/galaxy_11'
            }
            case 'item7':
            return {
                title: 'SC 제일은행 제휴 이벤트',
                text1:`SC 제일은행 계좌를 개설한 후 중고폰 판매 시 1.5만원을 추가 지급해주는 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/sc_02.png'),
            }
            case 'item8':
            return {
                title: '갤럭시 AI 페스타',
                text1:`갤럭시 핸드폰에 AI기능이 추가된 기념으로 이벤트를 진행하기 위해 메인 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/ai_festa.png'),
                link:'https://sell-o.kr/events/150'
            }
            case 'item9':
            return {
                title: '박싱언박싱',
                text1:`아이폰 시리즈를 판매하여 박싱해서 보낼 시 경품으로 애플 관련 사은품을 주는 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/boxing_02.png'),
            }
            case 'item10':
            return {
                title: '빼기이벤트',
                text1:`빼기와 셀로의 콜라보 행사를 진행하였는데 빼기에 가입한 회원이 중고폰을 판매할 시 추가금 및 사은품 증정 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/subtract_02.png'),
            }
            case 'item11':
            return {
                title: '부끄이벤트',
                text1:`유튜브에서 유명한 반려견 '부끄'와 협업하여 중고폰 판매 시 판매금액 만큼 사료를 기부하는 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/booqoo_02.png'),
            }
            case 'item12':
            return {
                title: '토스이벤트 (ver.01)',
                text1:`토스와의 협업으로 토스 사용자들 중에서도 셀로에 가입하여 중고폰을 판매할 시 추가금을 지급해주는 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/toss01_02.png'),
            }
            case 'item13':
            return {
                title: '토스이벤트 (ver.02)',
                text1:` 토스와의 두 번째 협업으로 토스 사용자대상으로 셀로를 이용해 중고폰을 판매한 경우 스타벅스 커피 증정을 위한 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/toss02_02.png'),
            }
            case 'item14':
            return {
                title: '희귀폰 이벤트',
                text1:`예전에 인기를 끌었던 희귀폰 "롤리팝" 시리즈를 셀로를 통한 판매 유도를 위한 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/retro_02.png'),
            }
            case 'item15':
            return {
                title: '대청소 이벤트',
                text1:`가을맞이 대청소를 하듯이 어딘가에 방치해놓은 미사용 중고폰을 판매할 시 경품 증정을 위한 이벤트를 진행하기 위해 그래픽 디자인을 작업하였다.`,
                text2:'상세페이지 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/clean_02.png'),
            }
            case 'item16':
            return {
                title: '갤럭시 Z5 (유튜브 썸네일)',
                text1:`갤럭시 Z5 출시를 기념하여 '셀로' 공식 유튜브 영상에 들어갈 썸네일 디자인을 작업하였다.`,
                text2:'썸네일 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/thumnail_z5.png'),
            }
            case 'item17':
            return {
                title: '부끄이벤트 (유튜브 썸네일)',
                text1:`부끄와의 협업 이벤트를 기념하여 '셀로' 공식 유튜브 영상에 들어갈 썸네일 디자인을 작업하였다.`,
                text2:'썸네일 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/thumnail_dog.png'),
            }
            case 'item18':
            return {
                title: '갤럭시 Z5 (가격표)',
                text1:`갤럭시 Z5 출시를 기념하여 진행한 이벤트에서 갤럭시 모델별 판매 금액을 알려주는 가격표 디자인을 작업하였다.`,
                text2:'썸네일 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/z5_price_02.png'),
            }
            case 'item19':
            return {
                title: '부끄이벤트(인스타)',
                text1:`부끄와의 협업 이벤트 홍보를 위한 인스타 피드 디자인을 작업하였다.`,
                text2:'인스타 피드 디자인',
                text3:['Photoshop','Illustration'],
                src: require('../image/booqoo_insta.png'),
            }
            case 'item20':
            return {
                title: 'UI UX(셀로 기업 전용 서비스)',
                text1:`셀로의 홈페이지에 '기업 전용 서비스'를 새로 추가하기 위하여 UI/UX 디자인을 작업하였다.`,
                text2:'UI/UX 디자인',
                text3:['Photoshop','Illustration','Figma'],
                src: require('../image/uiux_02.png'),
                link: 'https://sell-o.kr/companyService'
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