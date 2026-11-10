
import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";

const getSingleProduct = (proId: number) => 
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
  .then(data => data.json())
  .then(product => product)
  .catch(error => error)

export default async function ProductDetailPage({
  params
}:{
   params: Promise<{id: number}>
}) {
  const {id} = await params;

  const singleProduct = getSingleProduct(id);

  return (
    <ProductDetailDisplayComponent product={singleProduct}/>
  )
}
