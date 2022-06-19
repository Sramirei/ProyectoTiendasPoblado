import axios from 'axios'

const todasCategorias = async(state) => {
    const peticion = await axios.get('http://localhost:9000/categorias/')
    state(peticion.data);
    console.log(peticion.data);
}

const getEmpresas = async (state, codigo) =>{
    const peticion = await axios.get(`http://localhost:9000/empresas/`)
    console.log(peticion.data);
    const filtro = peticion.data.filter((data) => data.categoria === codigo)
    console.log(filtro)
    state(filtro)
    
}

const allEmpresas = async (state) =>{
    const peticion = await axios.get('http://localhost:9000/empresas/')
    console.log(peticion.data);
    state(peticion.data);
}
export{
 
    todasCategorias,
    getEmpresas,
    allEmpresas
}