<template>
    <div id="centerText">
        <h1 id="title">Quiz</h1>
        <v-form>
            <v-card class="mx-auto" max-width="auto" outlined color="transparent">
                <div id="textcenter" v-if="this.index < count">
                    <h2>
                        {{ Questions[index]['question'] }}
                    </h2>
                    <v-card class="mx-auto" max-width="800" outlined color="transparent" style="margin-top: 40px;">
                        <v-row no glutters class="ma-4 justify-space-around">
                            <v-col v-for="(answer, key) in Questions[index]['answers']" :key="key" :answer="answer">
                                <v-card class="mx-auto " outlined color="transparent">
                                    <v-card-actions>
                                        <v-btn tile @click="UserChoice(key)" color="#F9FBE7"
                                            min-width="300" min-height="100" :class="{ disabledButton: selected }" :disabled="selected">
                                            {{ answer }}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>                    
                    <v-btn tilecolor="#FBE9E7" min-width="120" v-show="selected && index < count - 1"
                        @click="NextQuestions" right>
                        Next
                    </v-btn>

                    <v-btn tilecolor="#FBE9E7" min-width="100" v-show="selected && index == count - 1"
                        @click="showResults(start)" right>
                        Results
                    </v-btn>
                </div>
                <div v-else>                    
                    <v-card class="mx-auto" max-width="800" outlined color="transparent" style="margin-top: 50px;">
                        <v-row no glutters class="ma-4 justify-space-around">
                            <v-col>
                                <p id="correctText">
                                    Correct Answers:&nbsp;{{ Output }}
                                </p>                                
                            </v-col>
                            <v-col>
                                <p id="wrongText">
                                    Wrong Answers:&nbsp;{{ WrongOutput }}
                                </p>                            
                        </v-col>
                        </v-row>                       
                    </v-card>
                </div>
            </v-card>
        </v-form>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    name: 'Quiz',
    computed: {

        ...mapState({
            Questions: 'Questions',
        }),
        ...mapGetters({
            Output: 'output',
            WrongOutput: 'wrongOutput'
        })

    },
    data() {
        return {
            selected: false,
            index: 0,
            count: 20,
            start: 0,
        }
    },
    methods: {
        UserChoice(e) {
            let self = this;
            self.selected = true;
            self.$store.dispatch('UserChoice', e);
        },
        NextQuestions() {
            this.index++;
            this.selected = false;
        },
        showResults(start) {
            this.index++;
            this.$store.dispatch('showResults', start);
        }

    }
}
</script>
<style>
#title {
    font-style: oblique;
    font-size: 50px;
    font-family: "Avanta Garde";
}

#centerText {
    text-align: center;
    margin-top: 50px;
}

#textcenter {
    text-align: center;
    margin-top: 60px;
    font-size: 25px;
    font-family: "Courier";
    font-style: italic;
}

.disabledButton {
    background-color: #E3F2FD;
    cursor: not-allowed;
}
#wrongText{
    font-style: oblique;
    font-size: 40px; 
    font-family: "Futara";
    color:red;
    background-color: white;
}
#correctText{
    font-style: oblique;
    font-size: 40px; 
    font-family: "Futara";
    color: green;
    background-color: white;
}
</style>