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
        console.log(arr)
        return arr
    },
    allProjectsTest: (state) => {
        let arr = []
        for (let person in state.team){
            if (state.team[person].hasOwnProperty('projects')){
                arr.push(state.team[person])
            }
        }
       return arr = arr.flatMap(item => Object.entries(item.projects))
                       .flatMap(item => item.filter((el,ind) => ind == 1))

    }
}