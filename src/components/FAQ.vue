<template>
 <div>
     <h1 class="FAQ">FAQ</h1>
     <p class="faq-p">Sure, here are short and precise answers to the 12 potentials FAQs :</p>
 </div>
 <section class="display-questions">
   <div class="questions" v-for="q in questions" :key="q.answer">
       <h3 @click="onClick()" class="question-list">{{q.question }}
      
       </h3>
      
      <div v-if="showAnswer" class="answwers">
         <p class="hidden-answer">{{ q.answer }}</p>
      </div>
   </div>
 </section>

</template>
<script>
export default {
  name : 'FAQ',
  props : {
    questions : Array
  },
  data () {
    return {
      
    }
  },
  methods : {
    onClick () {
       this.$emit('show-answer')
    
    }
  }
}
</script>

<style scoped>
.faq-p {
  text-align: center;
  padding: 10px;
  font-size: 16px;
}

  .display-questions {
    display: flex;
    flex-direction: column;
    justify-content: center;
      background: white;
      align-content: center;
      padding: 2rem; 
  }
  .questions {
     text-align: left;
     padding: 10px;
     cursor: pointer;
     border-bottom: 1px solid black;
   
  }
  .hidden-answer {
    margin-top: 4px;
  }
</style>