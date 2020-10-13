/*global chrome*/
export const ChromeStorage =  {
     getAllData: () => {
        return new Promise((resolve, reject) => {
                chrome.storage.sync.get(null, (data)=>{ resolve(data)});
        });
    },

    saveData: (key, value) => {
        chrome.storage.sync.set({[`${key}`]: value}, ()=>{});
    },

    removeData: (key) => {
        chrome.storage.sync.set({key: null}, ()=>{});
    },

    /** Removes the deadline and saves the updated one */
    saveDeadline: (deadline) => {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(null, (data)=> { 
                if (data.pinned != null  && data.pinned.hasOwnProperty('id' )) {
                    ChromeStorage.removeData("pinned");
                    ChromeStorage.saveData("pinned", deadline);
                    resolve("saved");
                } else {
                    data.deadlines
                        .splice(data.deadlines.findIndex(currdeadline => currdeadline.id === deadline.id),1);
                        data.deadlines.push(deadline);
                    ChromeStorage.removeData("deadlines");
                    ChromeStorage.saveData("deadlines", data.deadlines);
                    resolve("saved");
                }
            });
        });
  
    },

    /** Gets the deadline by the id */ 
    getDeadline: (id) => {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(null, (data)=>{ 
                if (data.pinned != null  && data.pinned.hasOwnProperty('id')) {
                    resolve(data.pinned);
                } else {
                    resolve(data.deadlines.filter(currdeadline => currdeadline.id === id)[0]);
                }
            });
        });
    },

    /** Gets a tag for a specific deadline */
    getTag: (index, id) => {
        return new Promise((resolve, reject) => {
            ChromeStorage.getDeadline(id).then((deadline) => {
                if (deadline.tag) {
                    resolve(deadline.tag[index]);
                } else {
                    resolve(null);
                }
            });
        });
    },

    /** Removes a tag with the deadline.id, index of the current box and the index of the current tag */
    removeTag: (id, index, indexTag) => {
        return new Promise((resolve, reject) => {
            ChromeStorage.getDeadline(id).then((deadline) => {
                if (deadline.tag) {
                    // eslint-disable-next-line no-unused-expressions
                    deadline.tag[index].splice(indexTag, 1);
                    ChromeStorage.saveDeadline(deadline).then(result =>{ 
                        resolve(result);
                    });
                } else {
                    resolve(null);
                }
            });
        });
    }
}