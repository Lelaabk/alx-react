import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let c = 0;

function updateCounter() {
    c++;
    $('#count').html(`${c} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));