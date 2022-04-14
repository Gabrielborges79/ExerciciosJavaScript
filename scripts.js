const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


const getCats = assync() => {
   try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
   }catch(e){
       console.log(e.message);
   }
}

const loadImg = assync () =>{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);
const catBtn = document.getElementById('change-cat');

loadImg();