// This is the how to get to the data that is being stored.
// Could not get the mock API to link so used the data from the
// mock API and put in the db.json and told the json server to
// watch the data. Goal is to fiqure out why I can't get the mock 
// API to link without getting a 404 error. 
// Steps to remember: npm init  then  npm install -g json-server
// then json-server --watch db.json then a url should be provided
const URL = 'http://localhost:3000/bookClubMembers';

// CRUD = Create Read Update Delete
// Week 12 Project is to create a CRUD application with either an
// API or local Array. Needs to have a form to post new entries
// needs to hava a way for users to update and delete entries
// styled with bootstrap and CSS

// Getting the information from the array to post to the table
// that holds the info for the Book Club members READ part of CRUD
$.get(URL).then(data => {
    data.map(member => {
        $('tbody').append(
            $(`
            <tr>
                <td>${member.id}</td>
                <td>${member.name}</td>
                <td>${member.book}</td>
                <td>${member.author}</td>
                <td>
                <button onclick='deleteEntry(${member.id})'>❌</button>
                `)
        )
    })
})

// Form is submitting the entered information into the table CREATE part of CRUD
$('#submit').click(function() {
    $.post(URL, {
        name: $('#readBy').val(),
        book: $('#title').val(),
        author: $('#author').val()
    })
});

// function created to delete an entry from the table DELETE part of CRUD
function deleteEntry (id) {
    $.ajax(`${URL}/${id}`, {
        type: 'DELETE'
    })
}

// function created to update an entry already in the table UPDATE part of CRUD
function updateEntry () {
    let id = $('#updateId').val()

    $.ajax(`${URL}/${id}`, {
        method: "PUT",
        data: {
            name: $('#updateReadBy').val(),
            book: $('#updateTitle').val(),
            author: $('#updateAuthor').val(),
        }
    })
}

$('#update').click(updateEntry)





