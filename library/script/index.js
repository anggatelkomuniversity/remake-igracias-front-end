const textKosong = (value) => {
    if (value === undefined) return true;

    if (typeof (value) == 'function' || typeof (value) == 'number' || typeof (value) == 'boolean' || Object.prototype.toString.call(value) === '[object Date]')
        return false;

    if (value == null || value.length === 0) return true;

    if (typeof (value) == "object") {
        let r = true;

        for (let f in value)
            r = false;

        return r;
    }

    return false;
}

const getById = (id) => document.getElementById(id)
const getByQuery = (query) => document.querySelector(query)
const getByQueryAll = (query) => document.querySelectorAll(query)