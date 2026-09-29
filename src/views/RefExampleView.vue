<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello World!')
const filler = ref('Hope you like this example!')

function toggleMessage() {
  message.value = message.value === 'Hello World!' ? 'Goodbye World!' : 'Hello World!'
  filler.value =
    filler.value === 'Hope you like this example!'
      ? "Okay, that's it! You can go now."
      : 'Hope you like this example!'
}
</script>
<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Ref() and User Interaction</h1>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <div class="flex">
    <div class="h-[200px] w-1/3 border-1 border-mist-800 rounded-xl m-2">
      <h2 class="flex justify-center text-2xl font-bold text-emerald-500 mb-1 mt-6">
        {{ message }}
      </h2>
      <p class="flex justify-center text-md text-mist-500 my-2 mb-6">{{ filler }}</p>
      <button
        v-on:click="toggleMessage"
        class="flex text-mist-500 hover:text-mist-300 mx-auto mb-2 h-auto w-auto p-2 bg-mist-900 hover:bg-mist-800 transition-all duration-200 text-sm cursor-pointer font-stretch-condensed"
      >
        TOGGLE PHRASE
      </button>
    </div>
    <pre
      class="w-2/3 border border-mist-800 rounded-xl m-2 bg-[#060708] text-mist-500 p-2 text-sm text-wrap max-h-[300px] overflow-y-auto"
    >
<span class="keytitle">import</span> <span class="varbright">{</span> ref <span class="varbright">}</span> <span class="keytitle">from</span> <span class="vartext">'vue'</span>

<span class="keyword">const</span> <span class="variable">message</span> = <span class="keytitle">ref</span><span class="varbright">(</span>'Hello World!'<span class="varbright">)</span>
<span class="keyword">const</span> <span class="variable">filler</span> = <span class="keytitle">ref</span><span class="varbright">(</span>'Hope you like this example!'<span class="varbright">)</span>

<span class="keyword">function</span> <span class="keytitle">toggleMessage</span><span class="varbright">()</span> <span class="varbright">{</span>
  <span class="variable">message</span>.value = <span class="variable">message</span>.value === <span class="vartext">'Hello World!'</span> ? <span class="vartext">'Goodbye World!'</span> : <span class="vartext">'Hello World!'</span>
  <span class="variable">filler</span>.value =
    <span class="variable">filler</span>.value === <span class="vartext">'Hope you like this example!'</span>
      ? <span class="vartext">'Okay, that's it! You can go now.'</span>
      : <span class="vartext">'Hope you like this example!'</span>
<span class="varbright">}</span>

&lt;&#33;&#45;&#45; HTML &#45;&#45;&gt;

&lt;<span class="keyword">h2</span>&gt;<span class="varbright">&#123;&#123;</span> message <span class="varbright">&#125;&#125;</span>&lt;/<span class="keyword">h2</span>&gt;
&lt;<span class="keyword">p</span>&gt;<span class="varbright">&#123;&#123;</span> filler <span class="varbright">&#125;&#125;</span>&lt;/<span class="keyword">p</span>&gt;

&lt;<span class="keyword">button</span> <span class="keytitle">v-on</span>:<span class="keytitle">click</span>="toggleMessage"
&gt;
  TOGGLE PHRASE
&lt;/<span class="keyword">button</span>&gt;
</pre>
  </div>

  <p class="text-mist-600 font-medium text-lg">
    Vue.js allows you to store values, and access or modify them later through a
    <span class="text-emerald-600">ref()</span>, via its .value property. Here, we have the variable
    <span class="text-emerald-600">&#123;&#123; message &#125;&#125;</span> declared as a ref, with
    the initial value of "Hello World!".
  </p>
</template>

<style scoped>
.keyword {
  color: var(--color-emerald-700);
}

.keytitle {
  color: var(--color-emerald-300);
}

.variable {
  color: var(--color-slate-400);
}

.vartext {
  color: var(--color-slate-600);
}

.varbright {
  color: var(--color-mist-300);
}
</style>
