import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

// const server = "dsadsdsd";

export default function ProductCard({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductProps) {
  // "uploads\8618c318-8be5-4423-a6ef-a60f51d6e0ed.jpg"
  return (
    <div key={productId} className="productcard">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      {/* <p>{stock}</p> */}
      <span>${price}</span>
      <div className="">
        <button
          onClick={() =>
            handler({ productId, photo, name, price, stock, quantity: 1 })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
