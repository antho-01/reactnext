import Food from "../food/page";
import DefaultHome from "../page"
import App from "../state/page";
import styles from "./page.module.css"




const Home = () => {
      return (
            <>
                  
                  <h1 className={styles.h1} >my home page </h1>
                  <Food 
                        time={"Morning"}
                        food={ `${"pancakes n juice and coffee for the day "}`}
                        time2={"Noon"}
                        food2={"Vegetable soup and fufu"}
                        time3={"Evening"}
                        food3={"fruit salid and doughnut"}
                  />

                  <App/>
            </>
      );
}

export default Home;