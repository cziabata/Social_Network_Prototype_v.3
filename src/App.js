import styles from './App.module.scss';
import { Header } from './UI/Header/Header';
import { Navbar } from './UI/Navbar/Navbar';
import { Content } from './UI/Content/Content';
import { Footer } from './UI/Footer/Footer';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Navbar />
      <Content className={styles.content}/>
      <Footer />
    </div>
  );
}

export default App;
