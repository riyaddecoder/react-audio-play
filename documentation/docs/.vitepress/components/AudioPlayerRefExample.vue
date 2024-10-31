<template>
  <div ref="el" />
</template>

<script setup>
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { ref, onMounted, defineProps } from 'vue';
import AudioPlayerWithRef from './AudioPlayerWithRef.jsx';

const props = defineProps({
  src: {
    type: String,
    required: true
  }
});

const el = ref();

onMounted(() => {
  const root = createRoot(el.value);
  root.render(createElement(AudioPlayerWithRef, { ...props }));
});
</script>
<style>
.audio-example-with-ref button {
  padding: 1px 10px;
  background: white;
  color: black;
  border-radius: 5px;
  margin-right: 3px;
  margin-top: 5px;
  box-shadow: 1px 1px 8px 3px #ececec;
}

.dark .audio-example-with-ref button {
  box-shadow: none;
}

.audio-example-with-ref button:hover {
  background: #ddd;
}
</style>