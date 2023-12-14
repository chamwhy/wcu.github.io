const studies = [
    'VR맵제작학과',
    '팬게임제작학과',
    'VR아바타제작학과',
    'VR에셋제작학과',
    '영상제작학과',
    '영장류학과',
    '팬아트디자인과',
    '트래킹무용학과',
    '컨텐츠기획학과'
];



function getRandomStudy(){

}


function getStudentId(){
    const date = new Date();
    return `2024${date.getHours()}${date.getDay()}${date.getMinutes()}${date.getMonth()}${date.getSeconds()}`; 
}



document.getElementById('checkBtn').onclick = () => {
    alert('확인');
    document.querySelector('#beforeCheck').classList.add('hide');
    document.querySelector('#afterCheck').classList.remove('hide');
};