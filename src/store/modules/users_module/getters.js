// import * as firebase from "firebase/app";
export default {
    allTeam: (state) => {
       return state.team
    },
    showMembers(state){
        let arr = []
        for (let person in state.team){
            
            arr.push({[person]: state.team[person].name})
        }
        return arr
    },
    // allProjectsTest: (state) => {
    //     let arr = []
        
    //     for (let person in state.team){
    //         if (state.team[person].hasOwnProperty('projects')){
    //             arr.push(state.team[person])
    //         }
    //     }
    //    return arr.flatMap(item => Object.entries(item.projects))
    //              .flatMap(item => item.filter((el,ind) => ind == 1))

    // },
    getProjectsBoot: state => {
        return state.projects
    },
    isLoaded: state => {
        return state.projects.length !== 0
    }
}