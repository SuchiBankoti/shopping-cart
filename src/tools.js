import {IoIosStar,IoIosStarHalf} from "react-icons/io"

function checkForSearch(name, str) {
  const nameDummy = name.toLowerCase()
  const strDUmmy=str.toLowerCase()
    const map=new Map()
    for (let i = 0; i < nameDummy.length; i++){
        map.set(nameDummy.charAt(i),nameDummy.charAt(i))
    }
    for (let i = 0; i < strDUmmy.length; i++){
        if (map.get(strDUmmy.charAt(i)) === undefined) {
            return false
        }
    }
    return true
}


const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<IoIosStarHalf key="half-star" />);
    }
    return stars;
};
  


  const bundleItems = (arr) => {
    let bundle = []
    let map=new Map()
    arr.forEach(obj => {
      if (map.get(obj.id) !== undefined) {
        let newcount=(map.get(obj.id).count)+1
        map.set(obj.id, {obj:obj,count:newcount})
      } else {
        map.set(obj.id,{count:1,obj:obj})
      }
    })
    map.forEach(value => {
        bundle.push(value)
    })
    return bundle.sort((a,b)=>a.obj.price-b.obj.price)
}
  export {checkForSearch,renderRatingStars,bundleItems}