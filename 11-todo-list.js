// 1. save data in array
// 2. generate html using javascript template string (new)
// 3. make it interactive


const todolist =[
    {
        name: 'defult',
        date: '',
        time: ''
    }
];

rendertodo();

function rendertodo(){
    let dotoHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        //const name = todoObject.name;
       //const date = todoObject.date;
       const {name, date, time} = todoObject; // destructuring - do same things as above two lines
        const html = `
            <div> ${name}</div>
            <div>${date}</div>
            <div>${time}</div>
             
            <button class="deletbutton" onclick="
                todolist.splice(${i}, 1);
                rendertodo();
            "> Delete </button>
            `; // generate html using javascript template string
        dotoHtml += html;
    }
    //console.log(dotoHtml);
    document.querySelector('.todolist').innerHTML = dotoHtml;
}

function addtodo(){
    const todo = document.querySelector('.todo');
   // console.log(todo);
    const name = todo.value;
    //console.log(name);

    const dateElement = document.querySelector('.date');
    const date = dateElement.value;
    console.log(date);

    const timeElement = document.querySelector('.time');
    const time = timeElement.value;

    todolist.push({
        name: name,
        date: date,
        time: time
    }
    );
    //console.log(todolist);

    todo.value = ''; // clear the input field
    rendertodo();
    
}

