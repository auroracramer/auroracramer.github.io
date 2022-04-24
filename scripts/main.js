// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
//

const PRONOUNS = {
    subject: ["she", "they"],
    object: ["her", "them"],
    determiner: ["her", "their"],
    possesive: ["hers", "theirs"],
    reflexive: ["herself", "themself"]
}

const VERBS = {
    be: {
        present: {
            she: "is",
            they: "are"
        },
        past: {
            she: "was",
            they: "were"
        }
    },
    enjoy: {
        present: {
            she: "enjoys",
            they: "enjoy"
        },
        past: {
            she: "enjoyed",
            they: "enjoyed"
        }
    }
}

function randomPronouns(form) {
    let r = Math.random();
    let pns = PRONOUNS[form];
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
        let case_ = el.getAttribute('case');
        let verb = el.getAttribute('verb');
        let verbTense = el.getAttribute('verb-tense');
        let pn = randomPronouns(form);

        if (verb != null) {
            verb = VERBS[verb][verbTense][pn];
        }

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

        if (verb != null) {
            pn = pn + " " + verb;
        }

        el.innerHTML = pn;
    });
}
