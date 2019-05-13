import React, { Component } from 'react'

export default class FormEmployee extends Component {
//part1
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
      

//part1
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }
//part1
       submitForm = e => {
        e.preventDefault();
//part2
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };
//part2
      const url = " http://campus-bordeaux.ovh:3001/api/quests/movies/";
//added
      if (
        this.state.name === "" ||
        this.state.poster === "" ||
        this.state.comment === "" 
      ) {
        alert("Please fill all the fields")
      } else {
//part2     
      fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Added film with the ID ${res}!`);
            }
          })
          .catch(e => {
            console.error(e);
            alert('Error during l\'an film addition');
          });
//added 
          this.setState({
            name: "",
            poster: "",
            comment: ""
          })
        }
      }
      
  render() {
    return (
//part1
      <div className="FormFilm">
          <h1> Film entry </h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Favorite Film Information</legend>
              <div className="form-data">
                <label htmlFor="name">Film: </label>
                <input
                  type="text"
                  placeholder= "What is your favorite film's name?"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="form-data">
                <label htmlFor="poster">Poster: </label>
                <input
                  type="url"
                  placeholder= "What is the poster's URL?"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div className="form-data">
                <label htmlFor="comment">Comment: </label>
                <textarea
                  type="text"
                  placeholder= "What do you think of this film?"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Send" />
              </div>
            </fieldset>
          </form>
          </div>
    )
  }
}
