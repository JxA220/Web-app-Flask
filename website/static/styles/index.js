function deleteTask(taskId) {
    fetch('/delete-task', {
        method: 'POST',
        body: JSON.stringify({ taskId })
    }).then((_res) => {
        window.location.href = '/';
    });
}