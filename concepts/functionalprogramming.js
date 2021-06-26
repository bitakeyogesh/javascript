/**
 * 1. Function Composition
 *
 * Function composition is the process of combining two or more functions to produce a new function.
 * Composing functions together is like snapping together a series of pipes for our data to flow through.
 */

//simple compose
var compose = (f1, f2) => (value) => f2(f1(value));

let addtwo = (n) => n + 2;
let timestwo = (n) => n * 2;

let times2add2 = compose(addtwo, timestwo);
console.log(times2add2(2));

//more flexible compose
var compose =
  (...fns) =>
  (initialVal) =>
    fns.reduceRight((acc, fn) => fn(acc), initialVal);

let add6 = compose(addtwo, addtwo, addtwo);
console.log(add6(2));

// Example - Higher Order Component in React
/**
    function logProps(WrappedComponent) {
        return class extends React.Component {
            componentDidUpdate(prevProps) {
            console.log("Current props: ", this.props);
            console.log("Previous props: ", prevProps);
            }
            render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props} />;
            }
        };
    }
    let ABCComponent = () => {};
    let component = logProps(ABCComponent);
 */
