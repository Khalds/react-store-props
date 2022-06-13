import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"
import styles from "./app.module.css"

function App() {
  return (
    <>
      <div className={styles.block}>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}
export default App
