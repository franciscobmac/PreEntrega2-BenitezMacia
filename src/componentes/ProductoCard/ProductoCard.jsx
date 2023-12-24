import ProductoImagen from "../ProductoImagen/ProductoImagen"
import ProductoInfo from "../ProductoInfo/ProductoInfo"
import ProductoBoton from "../ProductoBoton/ProductoBoton"
import Navbar from "../NavBar/NavBar"

const ProductoCard = () => {
  return (
    <div>
        <Navbar/>
        <ProductoImagen/>
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
  )
}

export default ProductoCard