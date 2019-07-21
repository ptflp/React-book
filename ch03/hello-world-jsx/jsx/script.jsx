class HelloWorld extends React.Component {
  render() {
    return (
	    <div>
	    	<h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
		    <h1> TEst </h1>
		    <p> lol </p>
	    </div>
    )
  }
}

ReactDOM.render(
  <div>
    <HelloWorld
      id='ember'
      frameworkName='Ember.js'
      title='A framework for creating ambitious web applications.'/>
    <HelloWorld
      id='backbone'
      frameworkName='Backbone.js'
      title='Backbone.js gives structure to web applications...'/>
    <HelloWorld
      id='angular'
      frameworkName='Angular.js'
      title='Superheroic JavaScript MVW Framework'/>
  </div>,
  document.getElementById('content')
)
