<script setup lang="ts">
import { dropHandlers, smoothDnD, type ContainerOptions } from 'smooth-dnd';
import { onMounted, ref } from 'vue';

smoothDnD.dropHandler=dropHandlers.reactDropHandler().handler
interface smoothDnDWrapperProps<T extends any=any>{
  sortKey?:string
  data:T
  options:ContainerOptions
}
const props=withDefaults(defineProps<smoothDnDWrapperProps>(),{
  sortKey:'id',
  data:[]
})
const containerRef=ref()
onMounted(()=>{
  smoothDnD(containerRef.value,props.options)
})
</script>

<template>
  <div class="smooth-dnd-wrapper">
    <slot v-for="(d,i) in data" :key="d" :name="i" :data="d"></slot>
  </div>
</template>

<style scoped lang=""></style>