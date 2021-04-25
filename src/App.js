import React from 'react';
import './App.css';
import Modal from 'react-modal'
import Head from './components/Head';
import axios from 'axios';

Modal.setAppElement('#root')
class App extends React.Component {
  keyChange = (event)=>{
    this.setState({
      keyword : event.target.value
    })
  }
  hit_api = (props) => {
    if(props.length > 0){
      this.setState({
        progress: true
      })
      axios.post(`https://itunes.apple.com/search?term=${props.replace(" ", "+")}`).then(res => {
        // console.log(res.data.results);
        res.data.results.map((x, index) => {x._id = index+1})
        console.log(res.data)
        this.setState({
          data : res.data.results,
          progress: false
        })
      })
    }
  }
  lyrics = (props) => {
    this.setState({
      progress: true
    })
    axios.get(`https://api.lyrics.ovh/v1/${props.artist}/${props.name}`).then(res => {
      console.log(res.data)

      this.setState({
        song: props.name,
        lyrics: res.data.lyrics,
        modalIsOpen: true,
        progress: false
      });
    })
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  constructor(){
    super()
    this.state = {
      data: [],
      keyword: '',
      progress: false,
      song: '',
      lyrics: '',
      modalIsOpen: false
    }
  }
  render(){
    return (
      <div>
        <Head api={this.hit_api} song={{song: this.state.song, lyrics: this.state.lyrics}} closeModal={this.closeModal} modal={this.state.modalIsOpen} lyrics={this.lyrics} keyword={this.state.keyword} bar={this.state.progress} key_change={this.keyChange} data={this.state.data} />
      </div>
    );
  }
}

export default App;
