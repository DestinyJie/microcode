<script setup lang="ts">
import { useFieldArray, useForm } from 'vee-validate'
import type { QuoteBlockInfo } from '@/types/block'


const props=defineProps<{
    blockInfo:QuoteBlockInfo
}>()
const emit=defineEmits(['change'])
const {values,validate,defineInputBinds}=useForm()
const {fields,push}=useFieldArray('blocks')
const content =defineInputBinds('content')

</script>

<template>
  <div class="">
    {{ props.blockInfo.type }}
  </div>
  <input class="content-input" v-bind="content" @change="emit('change',$event.target.value)" />
  <input class="content-input" v-for="field in fields" :key="field.key" v-model="field.value"/>
  <button @click="push(new Date().toLocaleTimeString())">添加</button>

</template>


<style scoped>
.content-input {
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>