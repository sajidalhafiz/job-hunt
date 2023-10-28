// use local storage to manage cart data
const addToLocalStorage = id => {
    let jobs = getJobs();
    // add quantity
    const isApplied = jobs[id];
    if (!isApplied) {
        jobs['job-'+id] = id;
    }
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

const removeFromLocalStorage = id => {
    const jobs = getJobs();
    if (id in jobs) {
        delete jobs[id];
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }
}

const getJobs = () => {
    let jobs = {};

    //get the jobs from local storage
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }
    return jobs;
}

const deleteJobs = () => {
    localStorage.removeItem('jobs');
    window.location.reload();
}

export {
    addToLocalStorage,
    removeFromLocalStorage,
    getJobs,
    deleteJobs
}
