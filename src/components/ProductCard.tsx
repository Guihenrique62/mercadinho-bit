import { Button, Card, CardBody, CardSubtitle } from "reactstrap"
import { ProductType } from "../services/products"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import SuccsessToast from "./SuccessToast"
import { useCart } from "../hooks/useCart"



type ProductCardProps =  {
   product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

   const [toastIsOpen, setToastIsOpen] = useState(false)
   const {id, name, imageUrl, price} = product
   const { addProduct } = useCart()
   return (

      <>
         <Card>
            <Link href={`/products/${id}`}>
               <Image className="card-img-top" src={imageUrl} alt={product.name} height={300} width={600}></Image>
            </Link>

            <CardBody>
               <Link href={`/products/${id}`}>
                  <h5 className="card-title" style={{cursor: 'pointer'}}>{name}</h5>
               </Link>

               <CardSubtitle className="mb-3 text-muted" tag={"h6"}>
                  R${price}
               </CardSubtitle>

               <Button color="dar" className="pb-2" block onClick={()=>{
                  addProduct(product)
                  setToastIsOpen(true)
                  setTimeout(()=> setToastIsOpen(false), 1000 * 3)
               }}>
                  Adicionar ao Carrinho
               </Button>
            </CardBody>
         </Card>

         <SuccsessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />

      </>

   )

}

export default ProductCard

