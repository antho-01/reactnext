import DefaultHome from "../page";
import Food from "../food/page";

const Contact = () => {
      return (
            <div> 
                  
                  <h1>Contact page</h1>
                  <Food 
                        time={"Email =>"}
                        food={" anthodave01@gmail.com"} 
                        time2={"Phone =>"}
                        food2={" 09071599443"}
                        time3={"Address =>"}
                        food3={"208 Aba Road Rumuola port Harcourt"}
                  />
            </div>
      );
}

export default Contact;