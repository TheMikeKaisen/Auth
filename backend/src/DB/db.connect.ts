import mongoose from "mongoose"



const ConnectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}`)
        console.log("Mongo DB connected to: ", connectionInstance.connection.host)

    } catch (error) {
        console.log("Error while connecting to db: ", error);
        process.exit(1);
    }
}

export default ConnectDB;