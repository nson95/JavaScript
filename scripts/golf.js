function playGame() {
        // let holesCtrl = document.getElementById("holes");
        // let sumCtrl = document.getElementById("sum")
        // let avgCtrl = document.getElementById("avg")
        // let parmsgCtrl = document.getElementById("parmsg")
        let scores = [];
        let sum = 0;
        for (idx=0; idx<18; idx++) {
            let score = getRandomNumber();
            scores.push(score);
            sum+=score;
        }
        let par = 72;
        let avg = (sum / scores.length).toFixed(2);
        console.log(scores, sum, avg);
        // holesCtrl.textContent = scores.join();
        // avgCtrl.value = avg;
        // sumCtrl.value = sum;
        $("#holes").text(scores.join());
        $("#avg").text("Avg: " +avg);
        $("#sum").text("Sum: " +sum);
        let parmsg = "";
        if (par>sum) {
            parmsg = "Congrats you got " +(par-sum) +" under par!";
        } else if (sum>par) {
            parmsg = "Aw man. Over par by " +(sum-par) +". Sucks to suck."
        }
        // parmsgCtrl.innerText =parmsg;
        $("#parmsg").text(parmsg);
    }
    function getRandomNumber() {
        return Math.ceil(Math.random() * 7);
    }
    