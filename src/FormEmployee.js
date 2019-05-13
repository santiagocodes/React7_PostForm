import React, { Component } from 'react'

export default class FormEmployee extends Component {
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

  //     const config = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(this.state),
  //     };

  //     const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
  //     fetch(url, config)
  // .then(res => res.json())
  //   .then(res => {
  //     if (res.error) {
  //       alert(res.error);
  //     } else {
  //       alert(`Added employee with the ID ${res}!`);
  //     }

  //   }).catch(e => {
  //     console.error(e);
  //     alert('Error during l\'an employee addition');
  //   });

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }

       submitForm(e) {
        e.preventDefault();
       }

  render() {
    return (
      <div className="FormEmployee">
 <h1> Film Survey </h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Your favorite film is...</legend>
     <div className="form-data">
       <label htmlFor="name">Film</label>
       <input
         type="text"
         id="name"
         name="name"
         onChange={this.onChange}
         value={this.state.name}
       />
     </div>

     <div className="form-data">
       <label htmlFor="poster">Poster Link</label>
       <input
         type="text"
         id="poster"
         name="poster"
         onChange={this.onChange}
         value={this.state.poster}
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
