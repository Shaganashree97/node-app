export const dataIndex = (req, res) => {
    res.send("Get all data lists");
};

export const dataCreate = (req, res) => {
    // res.send("Create a data");
    // create the data

    console.log(req.body);

    return res.json(req.body);

    // id, name, info
};

export const dataUpdate = (req, res) => {
    res.send("Update data");
};

export const dataDelete = (req, res) => {
    res.send("Delete data");
};