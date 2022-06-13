import Products from "../Products/Products"
import styles from "./Main.module.css"

function Main() {
  return (
    <>
      <div className={styles.main}>
        {product.map((item) => (
          <Products image={item.image} price={item.price} name={item.name} />
        ))}
      </div>
    </>
  )
}

const product = [
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
  {
    image:
      "https://st.depositphotos.com/3235977/4269/i/600/depositphotos_42699295-stock-photo-macbook-air.jpg",
    price: 97000,
    name: "macbook",
  },
]

export default Main
