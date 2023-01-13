
const Products = [{
    id: 1,
    marca: "Waterdog",
    img: "./imgs/Termo Waterdog.webp", 
    categoria: "Termos",
    stock: 20,
    precio: 15000,
    descripcion: "Termo metálico y ultra resistente."
    },
    {
    id: 2,
    marca: "Stanley",
    img: "./imgs/Termo Stanley.webp" , 
    categoria: "Termos",
    stock: 30,
    precio: 30000,
    descripcion: "Termo militar de excelente calidad y resistencia."
    },
    {
    id: 3,
    marca: "Lumilagro", 
    img: "./imgs/Termo Lumilagro.webp" , 
    categoria: "Termos",
    stock: 15,
    precio: 7000,
    descripcion: "Termo de acero de buena calidad y compacto"
    },
    {
    id: 4,
    marca: "Mate Térmico",
    img: "./imgs/Mate Termico.webp", 
    categoria: "Mates",
    stock: 50,
    precio: 2500,
    descripcion: "Mate Térmico de acero con bombilla incluida"
    },
    {
    id: 5, 
    marca: "Mate Calabaza",
    img: "./imgs/Mate Calabaza.webp", 
    categoria: "Mates",
    stock: 70,
    precio: 2000,
    descripcion: "Mate Calabaza de madera sin bombilla incluida"
    },
    {
    id: 6,
    marca: "Mate Camionero",
    img: "./imgs/Mate Mate Camionero.webp" , 
    categoria: "Mates",
    stock: 35,
    precio: 6000,
    descripcion: "Mate Camionero tallado en madera con bombilla incluida"
    },
]

const getProducts = new Promise (( resolve , reject) => {
        setTimeout(() => {
            resolve(Products)
        })
    }, )

export default getProducts
