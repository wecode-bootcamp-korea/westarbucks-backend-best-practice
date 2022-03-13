const sendProductList = (req, res) => {
  res.json( 
    {
      "data" : [{
        "id" : 1,
        "koreanName" : "나이트로 바닐라크림",
        "englishName" : "Nitro Vanilla Cream",
        "category" : "콜드 브루 커피",
        "categoryId" : 1,
        "imageUrl": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
      }, {
        "id" : 2,
        "koreanName" : "아이스 카페 아메리카노",
        "englishName" : "Ice Cafe Americano",
        "category" : "에스프레소",
        "categoryId" : 3,
        "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
      }, {
        "id" : 3,
        "koreanName" : "돌체 콜드 브루",
        "englishName" : "Dolce Cold Brew",
        "category" : "콜드 브루 커피",
        "categoryId" : 1,
        "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
      }, {
        "id" : 4,
        "koreanName" : "콜드 브루 몰트",
        "englishName" : "Cold Brew Malt",
        "category" : "콜드 브루 커피",
        "categoryId" : 1,
        "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
      }, {
        "id" : 5,
        "koreanName" : "에스프레소 콘 파나",
        "englishName" : "Espresso Con Panna",
        "category" : "에스프레소",
        "categoryId" : 3,
        "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg"
      }]
    }
  )
}

module.exports = { sendProductList } // routing.js 에서 사용하기 위해 모듈로 내보낸다.
