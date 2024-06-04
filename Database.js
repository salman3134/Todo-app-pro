class Database {
  creat = (key, data) => {
    /**
     * creat data
     */
    // Retrieve existing data for the given key
    const creatdata = JSON.parse(localStorage.getItem(key));

    // Initialize an array to hold the data
    let dtt = [];

    // If there is existing data, use it
    if (creatdata) {
      dtt = creatdata;
    }

    // Add the new data to the array
    dtt.push(data);

    // Save the updated array back to localStorage
    localStorage.setItem(key, JSON.stringify(dtt));
  };
  /**
   * find data
   * @param {*} key
   * @returns
   */
  find = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  /**
   * delet data
   * @param {*} key
   * @param {*} deletdata
   */
  delet = (key, deletdata) => {
    // Get data from localStorage
    const creatdata = JSON.parse(localStorage.getItem(key));

    // Check if data exists
    if (!creatdata) {
      console.error("No data found for the provided key");
      return;
    }

    // Filter out the item to be deleted
    const updatedata = creatdata.filter((item) => item !== deletdata);

    // Save the updated data back to localStorage
    localStorage.setItem(key, JSON.stringify(updatedata));
  };
}
