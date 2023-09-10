import { config } from '../deps.ts'
const { DATA_API_KEY, APP_ID } = config();
const BASE_URI = `https://us-west-2.aws.data.mongodb-api.com/app/data-hjvqz/endpoint/data/v1`;

const DATA_SOURCE = "SoundShark";
const DATABASE = "sound_db";
const COLLECTION = "sounds";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY
  },
  body: ""
};
const addSound = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const sound = await body.value;
      const URI = `${BASE_URI}/action/insertOne`;
      const query = {
        collection: COLLECTION,
        database: DATABASE,
        dataSource: DATA_SOURCE,
        document: sound
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const { insertedId } = await dataResponse.json();
      
      response.status = 201;
      response.body = {
        success: true,
        data: sound,
        insertedId
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { addSound };
