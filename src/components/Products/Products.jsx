import styles from "./Product.module.css"

function Products(props) {
  return (
    <>
      <div className={styles.product}>
        <img src={props.image} alt="" />
        <h1>{props.price}Р</h1>
        <h2>{props.name}</h2>
        <button>Купить</button>
      </div>
    </>
  )
}

export default Products
