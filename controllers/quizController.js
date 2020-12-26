const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
var givenAns = [];
const baseDir = path.join(__dirname,'../answers/ans.json');

module.exports.quiz = async function(req,res){

    try {
        let questions = await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple');   
        let answers = questions.data.results;
        
        list = []
        answers.map((ans)=>{
            list.push(ans.correct_answer.toString());
        });
        
        fs.writeFile(baseDir,list,function(err) {
            console.log(err);
        });

        res.send(questions.data.results);

    }catch(err){
        console.log(err);
        
    }
}


module.exports.answers = async function(req,res){

    givenAns = req.body.givenAns;

    const data = fs.readFileSync(baseDir,'utf-8');
   

     arr = data.split(",")

    var count = 0;
    for(let i=0;i<arr.length;i++){
        if(givenAns[i]===arr[i]){
            count ++;
        }
    }

    return res.status(200).json({
        message:`You got ${count} answers correct`
    })

}




