var tbody = document.getElementById('tbody');
let unsortedDB;
let sortedDB;


function convertToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(remainingSeconds).padStart(2, '0');
  
    return hh + ':' + mm + ':' + ss;
}

function fill(db, i, isCurrentUser) {
    // save relevant info from db
    var rank = i+1
    var name = db[i].name
    var time = convertToHHMMSS(db[i].bomb)
    // Make a new row
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    // Make three entries for the row
    let tdR = document.createElement('td')
    let tdN = document.createElement('td')
    let tdT = document.createElement('td')
    // Make text node for each entry (contains data from db)
    let rankNode = document.createTextNode(parseFloat(rank))
    let nameNode = document.createTextNode(name)
    let timeNode = document.createTextNode(time)
    // Make text nodes visible in row entries
    tdR.appendChild(rankNode)
    tdN.appendChild(nameNode)
    tdT.appendChild(timeNode)
    // Make row entries visible in the row
    tr.appendChild(tdR)
    tr.appendChild(tdN)
    tr.appendChild(tdT)
    if (isCurrentUser) {
        tr.classList.add('current-user'); // Add a class for the current user
    }
}

function filterTable() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#tbody tr');

    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

function tableFill(db) {

    // Get the user's name from localStorage
    const currentUser = localStorage.getItem('name');

    for (let i = 0; i < db.length; i++) {
        const { name } = db[i];
        const isCurrentUser = name === currentUser;

        fill(db, i, isCurrentUser);
    }

    filterTable();
}



function mergeSort(database, key) {
    if (database.length <= 1) {
        return database;
    }
  
    const mid = Math.floor(database.length / 2);
    const left = database.slice(0, mid);
    const right = database.slice(mid);
  
    return merge(mergeSort(left, key), mergeSort(right, key), key);
}
function merge(left, right, key) {
    let i = 0;
    let j = 0;
    const merged = [];
  
    while (i < left.length && j < right.length) {
        if (left[i][key] <= right[j][key]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }
  
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }
  
    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }
  
    return merged;
}

  

async function leaderboard() {
    const unsorted = await fetch('http://18.116.47.227/api/gamers/')
        .then(res => {return res.json()})
        .then(data => {unsortedDB = data})
        .catch(error => console.log('ERROR'))
    // Check to see if fetch worked
    console.log("unsorted:")
    console.log(unsortedDB)

    // sorts the db by bomb (time)
    sortedDB = mergeSort(unsortedDB, "bomb")
    // Log the sorted db
    console.log("Sorted:")
    console.log(sortedDB)
    // fill the table with sorted db info
    tableFill(sortedDB)
}