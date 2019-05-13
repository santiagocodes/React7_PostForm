import React, { Component } from 'react'

export default class FormEmployee extends Component {
    //part1
    constructor(props) {
        super(props);
        this.state = {
          lastname: '',
          firstname: '',
          email: '',
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
      const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";
      //added
      if (
        this.state.firstname === "" ||
        this.state.lastname === "" ||
        this.state.email === "" 
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
              alert(`Added employee with the ID ${res}!`);
            }
          })
          .catch(e => {
            console.error(e);
            alert('Error during l\'an employee addition');
          });
          //added 
          this.setState({
            firstname: "",
            lastname: "",
            email: ""
          })
        }
      }
      
  render() {
    return (
      //part1
      <div className="FormEmployee">
          <h1> employee’s entry</h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Information</legend>
              <div className="form-data">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={this.onChange}
                  value={this.state.lastname}
                />
              </div>

              <div className="form-data">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={this.onChange}
                  value={this.state.firstname}
                />
              </div>

              <div className="form-data">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
          </div>
    )
  }
}
