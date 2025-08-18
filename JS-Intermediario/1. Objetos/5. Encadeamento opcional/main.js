const user = {
    name: "Mouse",
    price: 150,
    // imgUrl: "https://imagem.com"
}

user?.imgUrl == undefined ? console.log("Não há imagem do produto") : console.log(user.imgUrl)