const sendProducts = (res) => {
  res.end(
    JSON.stringify({
      products: [{
        id: 1,
        productName: "node",
        description: "node.js is awesome"
      }, {
        id: 2,
        productName: "express",
        description: "express is a server-side framework for node.js"
      }]
    })
  )
}

module.exports = { sendProducts } // server에서 사용하기 위해 모듈로 내보낸다.
