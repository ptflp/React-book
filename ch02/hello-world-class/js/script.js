let h1 = React.createElement('h1', null, 'Hello world!')
let a = React.createElement('a', {href: "/"}, 'test link!')
class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1, a)
  }
}
ReactDOM.render(
  React.createElement(
  	"div",
  	null,
  	React.createElement(HelloWorld),
  	React.createElement(HelloWorld),
  	React.createElement(HelloWorld),
  	React.createElement(HelloWorld),
  	React.createElement(HelloWorld),
  	React.createElement(HelloWorld)
  	),
  document.getElementById('content')
)
