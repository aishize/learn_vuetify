export default {
    
        projects: [{
            title: "writing this shit",
            person: "Aishize",
            due: new Date().toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            status: "ongoing",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, expedita?"
          },
          {
            title: "dancing on the Moon",
            person: "Rainbow Dash",
            due: 'July 01, 2020',
            status: "complete",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut adipisci porro."
          },
          {
            title: "fuck Scorpion",
            person: "SubZero",
            due: 'May 25, 1997',
            status: "overdue",
            content:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, animi?"
          },
          {
            title: "play fortnite",
            person: "Dear Wife",
            due: 'February 15, 2020',
            status: "complete",
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur."
          }]
    
}