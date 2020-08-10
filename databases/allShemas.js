import Realm from "realm";

export const TRIPLIST_SCHEMA = "TripList";
export const TRIP_SCHEMA = "Trip";

export const TripSchema = {
  name: TRIP_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    location: "string",
    date: "date",
    description: "string",
    time: "float",
  },
};

export const TripListSchema = {
  name: TRIPLIST_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    creationDate: "date",
    trips: { type: "list", objectType: TRIP_SCHEMA },
  },
};

const databaseOptions = {
  path: "tripList.realm",
  schema: [TripListSchema, TripSchema],
};

export const insertNewTripList = (newTripList) =>
  new Promise((resolve, reject) => {
    Realm.open(daatabaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(TRIPLIST_SCHEMA, newTripList);
          resolve(newTripList);
        });
      })
      .catch((error) => reject(error));
  });

export const updateTripList = (tripList) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let updatingTripList = realm.objectForPrimaryKey(
            TRIPLIST_SCHEMA,
            tripList.id
          );
          updatingTripList.name = tripList.name;
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const deleteTripList = (tripListId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingTripList = realm.objectForPrimaryKey(
            TRIPLIST_SCHEMA,
            tripListId
          );
          realm.delete(deletingTripList);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const deleteAllTripList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let allTripLists = realm.object(TRIPLIST_SCHEMA);
          realm.delete(allTripLists);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllTripLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allTripLists = realm.objects(TRIPLIST_SCHEMA);
        resolve(allTripLists);
      })
      .catch((error) => reject(error));
  });

export default new Realm(databaseOptions);
