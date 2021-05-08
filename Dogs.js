import './DOTD.css';
const React = require('react');
const ReactDom = require('react-dom');
const axios = require('axios');
//3rd party API: 20 points


export class Dogs extends React.Component {
  constructor(){
    super();
    this.state = {
      img_URL: "https://cf.ltkcdn.net/dogs/images/orig/238731-1600x1030-dogs-different-breeds.jpg",
      breed: [""],
      type: ""
    }
  }

  getDogImage = () => {
    const { type } = this.state;
    let url = "https://dog.ceo/api/breed/" + type + "/images/random";
    axios.get(url).then(response => {
        this.setState({
          imgURL: response.data.message
        });
        console.log(response.data.message)
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };

  getBreed = () => {
    const {breed} = this.state;
    axios.get("https://dog.ceo/api/breeds/list").then(response => {
        this.setState({
          breed: breed.concat(response.data.message)
        })
      })
      .catch(err => {
        console.log("error fetching list");
      });
  }

  getRandom = () => {
    const { breed } = this.state;
    const randomDog = Math.floor(Math.random()*breed.length);
    const rand = breed[randomDog];
    let url = "https://dog.ceo/api/breed/" + rand + "/images/random"
    axios.get(url).then(response => {
        this.setState({
          img_URL: response.data.message,
          type: rand
        });
      })
    .catch(err => {
        console.log("error fetching image");
      });
      console.log(url);
  };

  handleType = (e) => {
    this.setState({
      type: e.target.value
    })
  }
  componentDidMount() {
    this.getBreed();
  }
  render() {
    const { img_URL, type} = this.state;
    
    return(
      <div> 
        <h1 class = 'dogheader'> Random Dog Generator!!</h1>
        <h2 class = 'study'>Study your dog breeds 🤓 </h2>
        <button class ='button' onClick={this.getRandom}>Click here for more dogs :)</button>
        <h2 class = 'breed' style={{textAlign:'center'}}>Breed: {type}</h2>
        <div style={{textAlign:'center'}} id="img">
          <img alt="dog" src={img_URL} />
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <Dogs />,
  document.getElementById('root')
);

export default Dogs;