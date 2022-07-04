import axios from 'axios'

const todasCategorias = async(state) => {
    const peticion = await axios.get('http://localhost:9000/category/')
    state(peticion.data);
    console.log(peticion.data);
}

const getEmpresas = async (state, categoria) =>{
    const peticion = await axios.get(`http://localhost:9000/business/`)
    console.log(peticion.data);
    const filtro = peticion.data.filter((data) => data.category === categoria)
    console.log(filtro)
    state(filtro)
    
}

const allEmpresas = async (state) =>{
    const peticion = await axios.get('http://localhost:9000/business/')
    console.log(peticion.data);
    state(peticion.data);
}
const allHomex = async (state) =>{
    const peticion = await axios.get('http://localhost:9000/homex')
    console.log(peticion.data);
    state(peticion.data);
}

const getProductos = async (state, empresa) =>{
    const peticion = await axios.get('http://localhost:9000/products')
    console.log(peticion.data);
    const filtro = peticion.data.filter((data) => data.business === empresa)
    state(filtro);
    console.log(filtro);
}
export{
 
    todasCategorias,
    getEmpresas,
    allEmpresas,
    allHomex,
    getProductos
}