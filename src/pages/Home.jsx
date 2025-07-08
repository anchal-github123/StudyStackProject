import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi";

export default function Home() {
const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <div>
      {data?.data.map((product) => (
        <div>
        <p key={product.id}>{product.name}</p>
       </div>
      ))}
   
      
    </div>
  )
}
