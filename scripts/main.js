// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
//

const pronouns = {
    subject: ["she", "they"],
    object: ["her", "them"],
    determiner: ["her", "their"],
    possesive: ["hers", "theirs"],
    reflexive: ["herself", "themself"]
}

function randomPronouns(form) {
    let r = Math.random();
    let pns = pronouns[form];
    let num_pns = pns.length;
    return pns[Math.floor(r * num_pns)];
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function renderPronouns() {
    const elements = document.getElementsByClassName("pronoun");
    Array.prototype.forEach.call(elements, function (el) {
        let form = el.getAttribute('form');
        let case_ = el.getAttribute('case')
        let pn = randomPronouns(form);

        switch (case_) {
            case "capital":
                pn = capitalizeFirstLetter(pn);
                break;
            case "upper":
                pn = pn.toUpperCase();
                break;
            case "lower":
            default:
                break;
        }

        el.innerHTML = pn;
    });
}
