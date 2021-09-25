import styles from './App.module.scss';
import HeaderContainer from './UI/Header/HeaderContainer';
import { Navbar } from './UI/Navbar/Navbar';
import { Content } from './UI/Content/Content';
import { Footer } from './UI/Footer/Footer';
function App() {
  return (
    <div className={styles.app}>
      <HeaderContainer />
      <Navbar />
      <Content className={styles.content}/>
      <Footer />
    </div>
  );
} 

export default App;
