const sendProducts = (req, res) => {
  res.json({ // 위에서 작성한 sendPosts 함수와 비교했을 때,
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
    products: [
      {
        id: 1,
        title: 'node',
        description: 'node.js is awesome',
      },
      {
        id: 2,
        title: 'express',
        description: 'express is a server-side framework for node.js',
      },
    ],
  })
}

module.exports = { sendProducts } // routing.js 에서 사용하기 위해 모듈로 내보낸다.
