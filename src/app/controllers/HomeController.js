import utils from "../utils/utils";

class homeController{
    home(req, res){
        const { deTextSource, deTextNew } = "";

        res.render('index',{
            deTextSource,
            deTextNew
        });
    }

    homeFormated(req, res){
        const deTextSource = req.body.deTextSource;
        const deTextNew = utils.formatedString(deTextSource);

        res.render('index',{
            deTextSource,
            deTextNew
        });
    }
};

export default new homeController();