import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <h1>Intocode Coding Shopcamp</h1>
        <ul>
          <li>
            <a href="#">Гаджеты и аксессуары</a>
          </li>
          <li>
            <a href="#">Бытовая техника</a>
          </li>
          <li>
            <a href="#">Прочее</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
