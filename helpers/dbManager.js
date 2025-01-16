// This helper script runs db functions

import mongoose from "mongoose";

export const connectDB = async (user, pass, ip, port, db) => {

    let conn_uri = "mongodb://" + user + ":" + pass + "@" + ip + ":" + port + "/" + db;
    console.log(conn_uri);

    try {
        await mongoose.connect(conn_uri);
    } catch (err) {
        console.error(err);
    }
}