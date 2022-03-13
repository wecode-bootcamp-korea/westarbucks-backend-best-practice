const sendCategories = (req, res) => {
  res.json(
    { 
      data: [
        {
          id: 1,
          name: "콜드 브루 커피",
        },
        {
          id: 2,
          name: "브루드 커피",
        },
        {
          id: 3,
          name: "에스프레소"
        },
        {
          id: 4,
          name: "프라푸치노"
        },
        {
          id: 5,
          name: "블렌디드"
        }
      ],
    }
  )
}

module.exports = { sendCategories } // routing.js 에서 사용하기 위해 모듈로 내보낸다.
