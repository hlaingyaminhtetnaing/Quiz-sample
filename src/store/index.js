import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Questions: [
      {
        question: "How many minutes are in a full week?",
        answers: { a: '11580', b: '200', c: '10,080', d: '15000' },
        correstAnswers: 'c'

      },
      {
        question: "What company was initially known as Blue Ribbon Sports",
        answers: { a: 'Adidas', b: 'CELINE', c: 'Channel', d: 'Nikes' },
        correstAnswers: 'd'

      },
      {
        question: "What software company is headquartered in Redmond, Washington?",
        answers: { a: 'Microsoft', b: 'ORACLE', c: 'SAP', d: 'IBM' },
        correstAnswers: 'a'

      },
      {
        question: "The Parthenon Marbles are controversially located in what museum",
        answers: { a: 'The Louvre', b: 'Great War Gallery', c: 'National Sensory Centre', d: 'The British Museum' },
        correstAnswers: 'd'

      },
      {
        question: "What is Blackpink last song in 2022?",
        answers: { a: 'Pink Venom', b: 'Shut Up', c: 'Kill This Love', d: 'Stays' },
        correstAnswers: 'b'

      },
      {
        question: "What was Meta Platforms Inc formerly known as?",
        answers: { a: 'Facebook', b: 'Line', c: 'Quick', d: 'Vidmate' },
        correstAnswers: 'a'

      },
      {
        question: "Which country in the European Union has the biggest population?",
        answers: { a: 'Japan', b: 'Germany', c: 'Korean', d: 'Thailand' },
        correstAnswers: 'b'

      },
      {
        question: "The logo for luxury car maker Porsche features which animal?",
        answers: { a: 'Horse', b: 'Mouse', c: 'Chicken', d: 'Pig' },
        correstAnswers: 'a'

      },
      {
        question: "What is the main ingredient in guacamole?",
        answers: { a: 'Lemon', b: 'Apple', c: 'Avocado', d: 'Pineapple' },
        correstAnswers: 'c'

      },
      {
        question: "Suriname is located on which continent?",
        answers: { a: 'Russia', b: 'Thailand', c: 'Korean', d: 'South America' },
        correstAnswers: 'd'

      },
      {
        question: "What country is Phnom Penh the capital of?",
        answers: { a: 'Dubai', b: 'ThaiLand', c: 'Cambodia', d: 'Laos' },
        correstAnswers: 'c'

      },
      {
        question: "How many lives is a cat said to have?",
        answers: { a: 'Three', b: 'Ten', c: 'Eight', d: 'Nine' },
        correstAnswers: 'd'

      },
      {
        question: "In cockney rhyming slang, what is a ‘dog and bone’?",
        answers: { a: 'A phone', b: 'A Laptop', c: 'A Car', d: 'A Bus' },
        correstAnswers: 'a'

      },
      {
        question: "Who is Taylor Swift's We are never ever getting back together rumoured to be about?",
        answers: { a: 'Harry Style', b: 'Lucas Till', c: 'John Mayer', d: 'Jake Gyllenhaal' },
        correstAnswers: 'd'

      },
      {
        question: "Which is the highest grossing Harry Potter film?",
        answers: { a: 'Part 1', b: 'Part 2', c: 'Part 3', d: 'Part 4' },
        correstAnswers: 'b'

      },
      {
        question: "What's the biggest animal in the world?",
        answers: { a: 'Lion', b: 'Elephant', c: 'The blue whale', d: 'Ant' },
        correstAnswers: 'c'

      },
      {
        question: "What is the name of Blackpink's fan?",
        answers: { a: 'Once', b: 'Blink', c: 'Twice', d: 'Block' },
        correstAnswers: 'b'

      },
      {
        question: "How many sides does a heptadecagon have?",
        answers: { a: 'Seventeen', b: 'Ten', c: 'Ninety', d: 'Sixteen' },
        correstAnswers: 'a'

      },
      {
        question: "Which London Underground line has the most stations?",
        answers: { a: 'Horizontal Line', b: 'Verticle Line', c: 'District Line', d: 'Straight Line' },
        correstAnswers: 'c'

      },
      {
        question: "How many bones does a shark have?",
        answers: { a: 'One', b: 'Ten', c: 'Four', d: 'None ' },
        correstAnswers: 'd'

      }
    ],
    UserAnswers: [],
    answerchoice: '',
    correctAnswer: 0,
    wrongAnswers: 0,


  },
  getters: {
    output(state){
      return state.correctAnswer;
      
    },
    wrongOutput(state){
      return state.wrongAnswers;
    }
  },
  mutations: {
    USER_CHOICE(state, payload) {
      //console.log(payload);
      state.UserAnswers.push({
        answerchoice: payload,      
      });

    },
    SHOW_RESULTS(state,payload) { 
      let i=payload;     
      for(i;i<state.Questions.length;i++){
          if(state.Questions[i].correstAnswers == state.UserAnswers[i].answerchoice){
              state.correctAnswer +=1;              
            }
            else{
              state.wrongAnswers +=1;
            } 
                   
        }
    }
  },
  actions: {
    UserChoice({ commit }, payload) {
      commit('USER_CHOICE', payload);
    },
    showResults({ commit },payload) {
      commit('SHOW_RESULTS',payload);
    }
  },
  modules: {
  }
})
