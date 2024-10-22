import Woofle from "../models/Woofle.mjs";

class WoofleController {
    static wooflesList(req, res) {
        const wooflesList = Woofle.loadDogsList();

        res.render('woofles', {
            wooflesList,
        });
    }

    static woofleDetail(req, res) {
        const wolfeId = req.params.id;
        const woofle = Woofle.getDogById(wolfeId);

        res.render('woofleDetail', {
            woofle,
        });
    }

    static addWoofleForm(req, res) {
        res.render('woofleForm')
    }

    static createWoofle(req, res) {
        const woofleData = req.body;

        if (woofleData.features) {
            woofleData.features = woofleData.features.split(',').map(feature => feature.trim());
        }

        Woofle.addDog(woofleData);
        res.redirect('/woofles')
    }
}

export default WoofleController;