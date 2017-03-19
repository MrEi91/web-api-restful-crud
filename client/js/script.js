// Get all memos
$(document).ready(function () {
  getMemos()
})

function getMemos () {
  $.ajax({
    url: 'http://localhost:3000/api/memos',
    type: 'GET',
    success: function (memos) {
      memos.memo.forEach(function (memo) {
        $('#memos').append(`<div class="row" id="listMemo-${memo.slug}">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title" id="title-${memo.slug}">${memo.title}</span>
                <p id="content-${memo.slug}">${memo.content}</p>
              </div>
              <div class="card-action">
                <a href="#modalEdit" type="button" onclick="getOneMemo('${memo.slug}')">Update</a>
                <a href="#" onclick="remove('${memo.slug}')">Delete</a>
              </div>
            </div>
          </div>
        </div>`)
      })
    },
    error: function (error) {
      console.log(error)
    }
  })
}

function getOneMemo (slug) {
  $.ajax({
    url: `http://localhost:3000/api/memo/${slug}`,
    type: 'GET',
    success: function (memo) {
      $('#editTitle').val(memo.title)
      $('#editContent').val(memo.content)
      $('#btn-edit').attr('onclick', `editMemo('${slug}')`)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function addMemo () {
  $.ajax({
    url: 'http://localhost:3000/api/memo',
    type: 'POST',
    data: {
      title: $('#title').val(),
      content: $('#content').val()
    },
    success: function (memo) {
      $('#memos').append(`<div class="row" id="listMemo-${memo.memo.slug}">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title" id="title-${memo.memo.slug}">${memo.memo.title}</span>
              <p>${memo.memo.content}</p>
            </div>
            <div class="card-action">
            <a href="#modalEdit" type="button" onclick="getOneMemo('${memo.memo.slug}')">Update</a>
            <a href="#"  onclick="remove('${memo.memo.slug}')">Delete</a>
            </div>
          </div>
        </div>
      </div>`)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function editMemo (slug) {
  $.ajax({
    url: `http://localhost:3000/api/memo/${slug}`,
    type: 'PUT',
    data: {
      title: $('#editTitle').val(),
      content: $('#editContent').val()
    },
    success: function (memo) {
      $('#memos').html('')
      getMemos()
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function remove (slug) {
  $.ajax({
    url: `http://localhost:3000/api/memo/${slug}`,
    type: 'DELETE',
    success: function () {
      getMemos()
      $('#memos').html('')
    },
    error: function (err) {
      console.log(err)
    }
  })
}
