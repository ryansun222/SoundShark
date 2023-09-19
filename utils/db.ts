import { MongoClient, ServerApiVersion } from "npm:mongodb";
const uri = "mongodb+srv://ryan:TY6Y4MVtOUMdu2I6@soundshark.a7fb8mn.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

// specifying api version not sure if need
// , {
//   serverApi: {
//     version: 1,
//     strict: true,
//     deprecationErrors: true,
//   }
// }

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);