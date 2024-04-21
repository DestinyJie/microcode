<script setup lang="ts">
import { Log, Resting, Shuffle } from '@icon-park/vue-next';
import { Background, Controls, MiniMap, Panel } from '@vue-flow/additional-components';
import { isNode, useVueFlow } from '@vue-flow/core';
import { ref } from 'vue';
import { initialElements } from './initial-elements';
const {onNodeDragStop,onConnect,addEdges,setTransform,toObject}=useVueFlow()
const elements=ref(initialElements)
onNodeDragStop((e)=>console.log("🍕drag stop",e));

onConnect((params)=>addEdges(params))
function updatePos(){
    return elements.value.forEach(element => {
        if(isNode(element)){
            element.position={
                x:Math.random()*400,
                y:Math.random()*400
            }
        }
    });
}
function logToObect(){
    return console.log("🧲 toObject",toObject());
    
}
function resetTransform(){
    return setTransform({x:0,y:0,zoom:1})
}
</script>

<template>
    <VueFlow v-model="elements" class="basic-flow" :defalut-viewport="{zoom:1.5}" :min-zoom="0.2" :max-zoom="4">
        <Background :grap="12" />
        <MiniMap />
        <Controls/>
        <Panel position="top-right" class="controls">
            <div class="control-btn" title="Rest Transform" @click="resetTransform">
            <Resting />
            </div>
            <div class="control-btn" title="Shuffle Node Positions" @click="updatePos">
            <Shuffle />
            </div>
            <div class="control-btn" title="Log `toObject`" @click="logToObect">
            <Log/>
            </div>

        </Panel>
    </VueFlow>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css');
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css');
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 20px;
}
.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--color-gray-800);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.control-btn:hover {
  background-color: var(--color-gray-300);
  transition: all 0.2s ease-in-out;
}
</style>