import dataFileManager from "../utils/DataFileManager.mjs";

class Woofle {
    static loadDogsList() {
        try {
            return dataFileManager.loadData();
        } catch (error) {
            throw new Error('Could not load dog List');
        }
    }

    static getDogById(id) {
        try {
            return dataFileManager.getItemById(id);
        } catch (error) {
            throw new Error('Could not find dog');
        }
    }

    static addDog(dog) {
        try {
            return dataFileManager.addItem({ id: new Date().getTime(), ...dog });
        }catch(error) {
            throw new Error('Could not add dog');
        }
    }
}

export default Woofle;