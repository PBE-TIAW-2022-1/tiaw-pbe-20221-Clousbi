// Adiciona notas no local storage
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Escreva uma anotação no Bloco primeiro.")
    }

  let notes1 = localStorage.getItem("notes1");
  if (notes1 == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes1);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes1", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function para mostrar no localStorage
function showNotes() {
  let notes1 = localStorage.getItem("notes1");
  if (notes1 == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes1);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note">
            <p class="note-counter">Nota ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Deletar</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Editar</button>
        </div>
            `;
  });
  let notesElm = document.getElementById("notes1");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nenhuma anotação ainda! Adicione uma anotação no bloco acima.`;
  }
}

// Function pra deletar a nota
function deleteNote(index) {
//   console.log("Eu estou deletando", index);
    let confirmDel = confirm("Deletar essa nota?");
    if (confirmDel == true) {
        let notes1 = localStorage.getItem("notes1");
        if (notes1 == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes1);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes1", JSON.stringify(notesObj));
        showNotes();
    }
  
}

// Function pra editar a nota
function editNote(index) {
    let notes1 = localStorage.getItem("notes1");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("Please clear the form before editing a note")
    } 

    if (notes1 == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes1);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes1", JSON.stringify(notesObj));
        showNotes();
}


showNotes();
