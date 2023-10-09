<script setup>
import {ref} from 'vue'
const flag=ref(true)

function toggle(){
  if(flag.value==true)
  {
    flag.value=false;
  }else if(flag.value==false)
  {
    flag.value=true;
  }
}
</script>

<template>
<button @click="toggle">click this</button>
<span v-if="flag">State:True</span>
<span v-else>State:False</span>
</template>
