import DefaultHome from "../page";
import Food from "../food/page";

const About = () => {
      return (
            <div>
                  
                  <h1>About page</h1>
                  <Food
                        time={"Morning"}
                        food={"yam and fried Egg"}
                        time2={"Noon"}
                        food2={"pounded coco-yam and white soup"}
                        time3={"Evenin"}
                        food3={"indomie and boiled Egg"}
                  />
            </div>
      );
}

export default About;