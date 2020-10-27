import './App.css';
import Images from './data.js';

export default class App extends React.Component {
  render() {
      return (
          <div>
              <Header className="header" /> 
              <Images /> 
              <Recipe className="recipe" /> 
              <IngredientsList />
              <BioSection />
              <Footer className="footer" />
          </div>
      );
  }
}
