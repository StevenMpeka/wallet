const Admin = () => {
    fetch(`/user/${_id}`).then(data => {
        return data.json()
    }).then(user => {
        let users = ""
        user.map(person => {
            users = `
            <div>
            <table class="card home-card-table">
            <div >
          <caption class="sub-btns">
              Registered Users
          </caption>
          
          </div>
          <tr class="table">
            <th style="padding: 10px;">NAME</th>
            <th style="padding: 10px;">EMAIL</th>
            <th style="padding: 10px;">STATUS</th>
            <th style="padding: 10px;">ACTION</th>
          </tr>
          <tr>
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.name}</td>
            <td>${person.name}</td>
          </tr>
        </table>

        <table class="card home-card-table">
            <div >
          <caption class="sub-btns">
              Upgraded Users
          </caption>
          
          </div>
          <tr class="table">
            <th style="padding: 10px;">NAME</th>
            <th style="padding: 10px;">EMAIL</th>
            <th style="padding: 10px;">STATUS</th>
            <th style="padding: 10px;">ACTION</th>
          </tr>
          <tr>
            <td>${person.name}</td>
            <td>${person.email}</td>
            <td>${person.name}</td>
            <td>${person.name}</td>
          </tr>
        </table>
            </div>
            `
        })
        document.getElementById("adminTable").innerHTML = users
    }).catch(err => {
        console.log(err)
    })
}