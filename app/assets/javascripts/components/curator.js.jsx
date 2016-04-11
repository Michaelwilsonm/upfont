var ToScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  handleClick: function(e){
    e.preventDefault()
  },
  render: function() {
    return (
      <li className="react-li"><a href onClick={this.handleClick}>Curator</a></li>
    );
  }
})

// var Modal = React.createClass({
//   render: function(){
//     return (
//       <p>
//     )
//   }
// })


var Main = React.createClass({
  getInitialState: function(){
    return {}
  },
  render: function(){
    return(
      <ToScreen />
    )
  }
})








