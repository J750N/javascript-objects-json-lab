(() => {
  //start
  console.info("READY");

fetch("data/staff.json")
  .then((response) => response.json())
  .then(data => {
    // Work with the parsed data
    console.dir(data)
    data.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");

    nameCell.textContent = `${item.first_name} ${item.last_name}`;
    emailCell.textContent = item.email;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    staffTable.appendChild(row);


      // ...
    });
  })
  .catch(error => {
    // Handle errors here
  });
})();
