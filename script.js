let tasks = {};
  const addTaskButton = document.getElementById('addTask');
  const addTaskDiv = document.getElementById('createTaskDiv');
  const alertDiv = document.getElementById('alertDiv');
  const taskNameInput = document.getElementById('taskName');
  const descriptionInput = document.getElementById('description');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const dateRequiredInput = document.getElementById('dateRequired');
  const timeRequiredInput = document.getElementById('timeRequired');
  const submitButton = document.getElementById('submit');
  const deleteAlertButton = document.getElementById('deleteAlert');
  const sortSelect = document.getElementById('sort');
  const container = document.getElementById('main-container');
  const alertText = document.getElementById('alertText');
  const addListDiv = document.getElementById('createListDiv');
  const addListButton = document.getElementById('addList');
  const listNameInput = document.getElementById('listName');

  addListButton.addEventListener('click', () => {
    addListDiv.classList.toggle('show');
    addList.innerText = addList.innerText === 'Add new list' ? 'Close' : 'Add new list';
  });

  deleteAlertButton.addEventListener('click', () => {
    alertDiv.classList.remove('show');
  });

  addTaskButton.addEventListener('click', () => {
    addTaskButton.innerText = addTaskButton.innerText === 'Close' ? 'Add new task' : 'Close';
    addTaskDiv.classList.toggle('show');
  });

  dateRequiredInput.addEventListener('change', e => {
    if (e.target.checked) {
      dateInput.classList.add('show');
    } else {
      dateInput.classList.remove('show');
      dateInput.value = '';
    }
  });

  timeRequiredInput.addEventListener('change', e =>
    e.target.checked ? timeInput.classList.add('show') : timeInput.classList.remove('show')
  );

  submitButton.addEventListener('click', () => {
    alertDiv.classList.remove('show');

    const name = taskNameInput.value.trim();
    const description = descriptionInput.value.trim();
    const isoDate = dateInput.value; // YYYY-MM-DD
    const isoTime = timeInput.value; // HH:MM
    const dateRequired = dateRequiredInput.checked;
    const timeRequired = timeRequiredInput.checked;

    // Validatie
    if (
      name === '' ||
      description === '' ||
      (isoDate === '' && dateRequired) ||
      (isoTime === '' && timeRequired)
    ) {
      alertText.innerText = 'Please fill in all fields';
      alertDiv.classList.add('show');
      return;
    }

    // Check expired
    if (isExpired(isoDate, isoTime) && dateRequired) {
      alertText.innerText = 'This task is expired';
      alertDiv.classList.add('show');
      return;
    }

    // Display strings
    const displayDate = isoDate ? `${isoDate.split('-')[2]}.${isoDate.split('-')[1]}.${isoDate.split('-')[0]}` : '';
    const displayTime = isoTime || '';

    // Uniek ID
    let id = Math.floor(Math.random() * 1000000);
    while (tasks[id] !== undefined) id = Math.floor(Math.random() * 1000000);

    // Opslaan
    tasks[id] = {
      name,
      description,
      date: displayDate,
      time: displayTime,
      isoDate,
      isoTime
    };

    // HTML genereren
    const html = `
      <div id="break${id}" style="height: 10px;"></div>
      <div class="newDiv" id="newDiv${id}">
        <h3 class="expired" id="expired${id}">⚠ This task is expired</h3>
        <button id="deleteButton${id}" class="deleteButton">X</button>
        <h2>${tasks[id].name}</h2>
        <h3>${tasks[id].description}</h3>
        <p>${(!dateRequired || !isoDate) ? '' : tasks[id].date}</p>
        <p>${(!timeRequired || !isoTime) ? '' : tasks[id].time}</p>
      </div>
    `;
    tasks[id].htmlString = html;

    // Toon taken
    updateTasks(html);

  });

  function updateTasks (html) {
    container.insertAdjacentHTML('beforeend', html);
    updateExpiredTasks();
    sortTasks();
  }

  // ====== Check verlopen taken ====== //
  function isExpired(date, time) {
    if (!date) return false;

    const isoCandidate = `${date}T${time || '00:00'}`;
    const inputDate = new Date(isoCandidate);

    if (Number.isNaN(inputDate.getTime())) return false;
    return inputDate.getTime() < Date.now();
  }

  function updateExpiredTasks() {
    for (const id in tasks) {
      const task = tasks[id];
      const expiredEl = document.getElementById(`expired${id}`);
      if (!expiredEl) continue;

      if (isExpired(task.isoDate, task.isoTime)) {
        expiredEl.classList.add('show');
      } else {
        expiredEl.classList.remove('show');
      }
    }
  }

  // ====== Sorteren ====== //
  sortSelect.addEventListener('change', sortTasks);

  function sortTasks() {
    let sortedTasks = Object.values(tasks);

    if (sortSelect.value === 'dateSort') {
      sortedTasks.sort((a, b) => {
        if (!a.isoDate) return 1;
        if (!b.isoDate) return -1;

        const dateA = new Date(`${a.isoDate}T${a.isoTime || '00:00'}`);
        const dateB = new Date(`${b.isoDate}T${b.isoTime || '00:00'}`);
        return dateA - dateB;
      });
    } else if (sortSelect.value === 'alphabeticalSort') {
      sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
    }
    // importanceSort → later

    container.innerHTML = '';
    container.appendChild(addTaskDiv);
    for (const task of sortedTasks) {
      container.insertAdjacentHTML('beforeend', task.htmlString);
    }
    updateExpiredTasks(); // ✅ Controleer verlopen taken na sortering
  }

  // ====== Verwijderen ====== //
  document.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('deleteButton')) {
      const idToDelete = e.target.id.replace('deleteButton', '');
      const element = document.getElementById(`newDiv${idToDelete}`);
      if (element) element.remove();

      delete tasks[idToDelete];

      const breakEl = document.getElementById(`break${idToDelete}`);
      if (breakEl) breakEl.remove();
    }
  });