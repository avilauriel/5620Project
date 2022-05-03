(function () {
// Leave as IIFE


// The Creation of the Dominic System Object Array.
// An arran with an object inbeded. Inbeded in another array and object
const dominicSystemObjectArray = [
    {
        id: '00',
        dsAbbreviation: "OO",
        firstName: 'Olive',
        lastName: 'Oyl',
        action: 'eating',
        object: 'spinach',
        story: 'Olive Oyl is flirting with Popeye while eating spinach.',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '01',
        dsAbbreviation: "OA",
        firstName: 'Neo',
        lastName: 'The One',
        action: 'stops',
        object: 'bullets',
        story: 'Neo dove into Mr. Smith after stoping the bullets. His hydrogen core exploded red in color.',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: true,
        exams: { 
            quiz: 78,
            midterm: 85, 
            final: 86
        }
    },{
        id: '02',
        dsAbbreviation: "OB",
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        action: 'swinging',
        object: 'light-sabre',
        story: 'His light-sabre pulls helium out of the sun.',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 88,
            midterm: 83, 
            final: 89
        }
    },{
        id: '03',
        dsAbbreviation: "OC",
        firstName: 'C-3PO',
        lastName: '',
        action: 'badgering',
        object: 'R2-D2',
        story: 'C-3PO is sumo wrestling R2-D2 in a trench for a lithium fix!',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 88,
            midterm: 83, 
            final: 89
        }
    },{
        id: '04',
        dsAbbreviation: "OD",
        firstName: 'Oscar',
        lastName: 'de la Joya',
        action: 'celebrates',
        object: 'win',
        story: 'Oscar de la Joya is celebrating his Olyinpic win.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '05',
        dsAbbreviation: "OE",
        firstName: 'Omar',
        lastName: 'Epps',
        action: 'diving',
        object: 'second-base',
        story: 'Omar dove was bored on second base.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '06',
        dsAbbreviation: "OS",
        firstName: 'O.J.',
        lastName: 'Simpson',
        action: 'driving',
        object: 'bronco',
        story: 'OJ Simpson and his bronco incinerate into carbon.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '07',
        dsAbbreviation: "OG",
        firstName: 'James',
        lastName: 'Bond',
        action: 'crashes',
        object: 'DB9',
        story: 'James Bond used Nitorgren in the DB9 and flew through the sky.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: true,
        exams: { 
            quiz: 89,
            midterm: 94, 
            final: 88
        }
    },{
        id: '08',
        dsAbbreviation: "OH",
        firstName: 'Oliver',
        lastName: 'Hardy',
        action: 'laughing',
        object: 'hysterically',
        story: 'Oliver Hardy is laughing hysterically on the sofa as he gasped for oxygen.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '09',
        dsAbbreviation: "ON",
        firstName: 'Olivia',
        lastName: 'Newton-John',
        action: 'flirting',
        object: 'Danny Zuko',
        story: 'In the bathroom, ONJ grabbed flourine then rinsed her face with soap.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '10',
        dsAbbreviation: "AO",
        firstName: 'Ashley',
        lastName: 'Alsen',
        action: 'falls-off',
        object: 'bed',
        story: 'Ashley is admiring her neon sign in Richmond, VA.',
        tools: [ 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '11',
        dsAbbreviation: "AA",
        firstName: 'Alonso',
        lastName: 'Avila',
        action: 'smoking',
        object: 'meats',
        story: 'Aloson Avila is adding the perfect amount of sodium to the the meat.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '12',
        dsAbbreviation: "AB",
        firstName: 'Antonio',
        lastName: 'Banderas',
        action: 'makes',
        object: 'sword',
        story: 'Antonio Banderas made a sword os magnesium so thin it looked NoRMal.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '13',
        dsAbbreviation: "AC",
        firstName: 'Al',
        lastName: 'capone',
        action: 'bribes',
        object: 'judge',
        story: 'Al Capone had the foresight to build an aluminum dam in providence, RI.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '14',
        dsAbbreviation: "AD",
        firstName: 'Albus',
        lastName: 'Dumbledore',
        action: 'points',
        object: 'wand',
        story: 'Albus Dumbledore, battleing with Voldermot, points a silicon wand through the door.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '15',
        dsAbbreviation: "AE",
        firstName: 'Amanda',
        lastName: 'Emery',
        action: 'skinny-dipping',
        object: 'jacuzzi',
        story: 'Amanda is in a jacuzzi in Kentucky.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '16',
        dsAbbreviation: "AS",
        firstName: 'Arnold',
        lastName: 'Scwarzenegger',
        action: 'shoots',
        object: 'T-1000',
        story: 'Arnolds watch is made out of sulfur; and it stinks.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '17',
        dsAbbreviation: "AG",
        firstName: 'Ariana',
        lastName: 'Grande',
        action: 'swimming',
        object: 'pool',
        story: 'Ariana Grande is swimming in her chlorine tears filled pool.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '18',
        dsAbbreviation: "AH",
        firstName: 'Anna',
        lastName: 'Hernandez',
        action: '',
        object: '',
        story: 'Anna Hernandez is something... Argon',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '19',
        dsAbbreviation: "AN",
        firstName: 'Alfred E.',
        lastName: 'Newman',
        action: 'smiling',
        object: 'teeth',
        story: 'Alfred E. Newmas twop twin-teeth are holding a postassium filled banana.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '20',
        dsAbbreviation: "BO",
        firstName: 'Bo',
        lastName: 'Jackson',
        action: 'knows',
        object: 'football',
        story: "Bo Jackson's calcium filled nose smelles like roses.",
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '21',
        dsAbbreviation: "BA",
        firstName: 'Ben',
        lastName: 'Affleck',
        action: 'pricked',
        object: 'needle',
        story: 'Ben Afflec felt the needle all the way to his Scandium.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '22',
        dsAbbreviation: "BB",
        firstName: 'Bugs',
        lastName: 'Bunny',
        action: 'leads',
        object: 'opera',
        story: 'Bugs Bunny is yanking on a titanium Onion.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '23',
        dsAbbreviation: "BC",
        firstName: 'Bill',
        lastName: 'Clinton',
        action: 'smells',
        object: 'cigar',
        story: 'After Monica, Bill smelled the cigar with Vana; Vanadium.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '24',
        dsAbbreviation: "BD",
        firstName: 'Bo',
        lastName: 'Derek',
        action: 'running',
        object: 'beach',
        story: 'Bo Derecks har-dredlocks are nade out of chromium.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '25',
        dsAbbreviation: "BE",
        firstName: 'Billy',
        lastName: 'Elliot',
        action: 'dancing',
        object: 'ballet',
        story: 'Billy Ellliot is dancing.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },

]

//////// Display the Array on HTML
function populateCompletedList(people) {
    const listNode = document.querySelector("#completedList");
    const dsOptions = people.filter(
      (option) => option.complete === true
    );
    dsOptions.forEach((option) => {
      let person = document.createElement("li");
      person.textContent = option.dsAbbreviation + "  " + option.id + " " + option.firstName + " " + option.lastName + " " + option.action + " " + option.object;
      listNode.appendChild(person);
      
    });
  }
  populateCompletedList(dominicSystemObjectArray);


  // Incomplete list needing updates by the user/student
  function populateIncompleteList(people) {
    const listNode = document.querySelector("#incompleteList");
    const dsOptions = people.filter(
      (option) => option.complete === false
    );
    dsOptions.forEach((option) => {
      let person = document.createElement("li");
      person.textContent = option.dsAbbreviation + "  " + option.id + " " + option.firstName + " " + option.lastName + " " + option.action + " " + option.object;
      listNode.appendChild(person);
      
    });
  }
  populateIncompleteList(dominicSystemObjectArray);


// Listing of the actions/verbs each person is doing
function populateVerbList(people) {
    const listNode = document.querySelector("#verbAction");
    const dsOptions = people.filter(
      (option) => option.complete === true
    );
    dsOptions.forEach((option) => {
      let person = document.createElement("li");
      person.textContent = option.id + "  " + option.dsAbbreviation + " " + option.action;
      listNode.appendChild(person);
      
    });
  }
  populateVerbList(dominicSystemObjectArray);

  // Listing of the objects/nouns each person is doing
function populateObjectList(people) {
    const listNode = document.querySelector("#nounObject");
    const dsOptions = people.filter(
      (option) => option.complete === true
    );
    dsOptions.forEach((option) => {
      let person = document.createElement("li");
      person.textContent = option.dsAbbreviation + " " + option.id + " " + option.object;
      listNode.appendChild(person);
      
    });
  }
  populateObjectList(dominicSystemObjectArray);

  // Listing the number exceptions for each person by id
  function populatExceptionsList(people) {
    const listNode = document.querySelector("#exceptions");
    const dsOptions = people.filter(
      (option) => option.exception === true
    );
    dsOptions.forEach((option) => {
      let person = document.createElement("li");
      person.textContent = option.dsAbbreviation + " " + option.id + " " + option.firstName + " " + option.lastName + " " + option.action + " " + option.object;
      listNode.appendChild(person);
    });
  }
  populatExceptionsList  (dominicSystemObjectArray);

    // Listing the stories for each person by id
    function populatStoryList(people) {
        const listNode = document.querySelector("#story");
        const dsOptions = people.filter(
          (option) => option.complete === true
        );
        dsOptions.forEach((option) => {
          let person = document.createElement("li");
          person.textContent = option.id + " " + option.dsAbbreviation + " " + option.story;
          listNode.appendChild(person);
        });
      }
      populatStoryList  (dominicSystemObjectArray);
  

          // Listing the tools for each person
    function populatToolsList(people) {
        const listNode = document.querySelector("#tools");
        const dsOptions = people.filter(
          (option) => option.complete === true
        );
        dsOptions.forEach((option) => {
          let person = document.createElement("li");
          person.textContent = option.exams;
          listNode.appendChild(person);
        });
      }
      populatToolsList  (dominicSystemObjectArray);

// Leave as IIFE
})();