import bizFunc from './js/years.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';


  $("form#example-form").submit(function(event) {
    event.preventDefault();
    const numbers = $("#number").val();
    const text = $("#text").val();
    const exampleText = exampleTestFunction(numbers, text);
    console.log(exampleText);
    $("#output").text(exampleText);
  
    function logReset() {
    }
  });
});