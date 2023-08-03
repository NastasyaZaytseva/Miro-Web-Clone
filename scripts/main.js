// Creating data
const data = {
  "Brainstorming": {
    title: "Brainstorming",
    text: "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
    image: "./images/Brainstormwithoutshadow.png"
  },
  "Diagramming": {
    title: "Diagramming",
    text: "Flowcharts, Swimlanes, Strategic Planning — tap into one of our many diagrams to visualize projects and ideas of any scope.    ",
    image: "./images/diagram.png"
  },
  "Meeting & Workshops": {
    title: "Meeting & Workshops",
    text: "Give everyone in the room — even if they're miles away — a chance to connect and interact with sticky notes, voting, live reactions, and icebreakers.    ",
    image: "./images/meetings.png"
  },
  "Scrum Events": {
    title: "Scrum Events",
    text: "Whether agile teams meet on a video call or sit in the same room, they can meet in Miro. Put ideas into action, and visualize projects and dependencies, all in one place.   ",
    image: "./images/scrum.png"
  },
  "Mapping": {
    title: "Mapping",
    text: "Plan projects, map out information architecture, or create org charts — you can plot it all in minutes on a Miro board.   ",
    image: "./images/mindmapping.png"
  },
  "Research & Design": {
    title: "Research & Design",
    text: "Foster a customer-centric mindset and build a shared team space, where everyone can capture insights, structure them with diagrams and tables, and share it all in a central spot.   ",
    image: "./images/research_and_design.png"
  },
  "Strategic Planning": {
    title: "Strategic Planning",
    text: "Define goals and initiatives, visualize priorities and outcomes, and watch those plans pay off in a big way. It's easier when you never run out of space.   ",
    image: "./images/strategic.png"
  }, 
 

};

// Function to change the content
function changeContent(e) {
  const chipName = e.target.textContent.trim();
  const chipData = data[chipName];
  
  if(chipData) {
    document.querySelector('.points__h3').textContent = chipData.title;
    document.querySelector('.points_p').textContent = chipData.text;
    document.querySelector('.points__img').src = chipData.image;
  }
}

// Adding event listeners to the chips
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', function(e) {
    document.querySelector('.chip__active').classList.remove('chip__active');
    e.target.classList.add('chip__active');
    changeContent(e);
  });
});



(function() {
  const data = {
      "UX & Design": {
        points: [
          "Build low-fi wireframes",
          "Involve stakeholders in the design process",
          "Run engaging design workshops"
        ],
        image: "./images/UXDesign.png"
      },
      "Marketing": {
        points: [
          "Brainstorm marketing strategies",
          "Map your campaign in one place",
          "Run kick-off meetings"
        ],
        image: "./images/marketing.png"
      },
      "Product Management": {
        points: [
          "Create product roadmaps",
          "Discover customer needs with journey maps",
          "Build wireframes and user flows"
        ],
        image: "./images/scrum.png"
      },
      "Engineering": {
        points: [
          "Run efficient estimation sessions",
          "Diagram complex architecture",
          "Organize hybrid scrum events"
        ],
        image: "./images/Engineering.png"
      },
      "Consultants": {
        points: [
          "Engage clients in interactive meetings",
          "Solve problems faster in one virtual hub ",
          "Leverage made-for-you facilitation features, like Miro Smart Meetings"
        ],
        image: "./images/Consultants.png"
      },
      "Agile Coaches": {
        points: [
          "Run collaborative scrum events",
          "Bring teams to one vision with PI Planning",
          "Easily integrate task tracking with Jira cards"
        ],
        image: "./images/agile.png"
      },
      "Sales": {
        points: [
          "Run engaging meetings to wow clients",
          "Map out accounts to see the big picture",
          "Plot key workflows with process diagramming"
        ],
        image: "./images/sales.png"
      },
      
    };
    
    // Function to change the content
    function changeContent(e) {
      const chipName = e.target.textContent;
      const chipData = data[chipName];
    
      if(chipData) {
        // Clear current points
        const pointsList = document.querySelector('.teams__points ul');
        while (pointsList.firstChild) {
          pointsList.firstChild.remove();
        }
    
        // Add new points
        chipData.points.forEach(point => {
          const li = document.createElement('li');
          li.innerHTML = `<img src="./images/points.svg" alt="">${point}`;
          pointsList.appendChild(li);
        });
    
        // Change the image
        document.querySelector('.teams__img').src = chipData.image;
      }
    }
    
    // Adding event listeners to the chips
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', function(e) {
        document.querySelector('.chip__active').classList.remove('chip__active');
        e.target.classList.add('chip__active');
        changeContent(e);
      });
    });
})();