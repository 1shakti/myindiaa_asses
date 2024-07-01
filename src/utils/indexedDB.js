import { openDB } from 'idb';

// Example configuration
//const DB_NAME = 'my-app-db';
const DB_VERSION = 1;

const initializeDB = async (dbName, storeName) => {
  try {
    const db = await openDB(dbName, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id' });
        }
      },
    });
    return db;
  } catch (error) {
    console.error(`Error initializing ${dbName} IndexedDB:`, error);
    throw error;
  }
};

const storeData = async (dbName, storeName, data) => {
  try {
    const db = await initializeDB(dbName, storeName);
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    data.forEach(item => {
      store.put(item);
    });
    await tx.done;
    console.log(`Data stored in ${dbName} IndexedDB (${storeName} store).`);
  } catch (error) {
    console.error(`Error storing data in ${dbName} IndexedDB:`, error);
    throw error;
  }
};

const getDataFromDB = async (dbName, storeName) => {
  try {
    const db = await initializeDB(dbName, storeName);
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const data = await store.getAll();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${dbName} IndexedDB:`, error);
    throw error;
  }
};

export { initializeDB, storeData, getDataFromDB };
