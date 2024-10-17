<template>
  <div ref="el" />
</template>

<script setup>
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { ref, onMounted, defineProps } from "vue";
import { AudioPlayer } from "react-audio-play";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    required: true,
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
  preload: {
    type: String,
    default: "auto",
  },
  loop: {
    type: Boolean,
    default: false,
  },
  volume: {
    type: Number,
    default: 100,
  },
  hasKeyBindings: {
    type: Boolean,
    default: true,
  },
  onPlay: {
    type: Function,
    default: () => {},
  },
  onPause: {
    type: Function,
    default: () => {},
  },
  onEnd: {
    type: Function,
    default: () => {},
  },
  onError: {
    type: Function,
    default: () => {},
  },
  backgroundColor: {
    type: String,
    default: undefined,
  },
  color: {
    type: String,
    default: undefined,
  },
  sliderColor: {
    type: String,
    default: undefined,
  },
  volumePlacement: {
    type: String,
    default: "top",
  },
  width: {
    type: String,
    default: "400px",
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});

const el = ref();

onMounted(() => {
  const root = createRoot(el.value);
  root.render(createElement(AudioPlayer, { ...props }));
});
</script>

<style>
.custom-style1.rap-container {
	background-color: #000000;
	background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
	color: aliceblue;
}

.custom-style1.rap-container .rap-pp-icon path,
.custom-style1.rap-container .rap-volume-btn path {
	fill: white;
}

.custom-style1.rap-container .rap-slider .rap-progress {
	background-color: #daecff;
}

.custom-style1.rap-container .rap-volume .rap-volume-controls {
	background-color: #000000;
	background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
}

.custom-style1.rap-container .rap-slider .rap-progress .rap-pin {
	background-color: #c3d5ff;
	box-shadow: 0 0 9px 7px #269eff52;
}

.custom-style1.rap-container svg.rap-pp-icon:hover,
.custom-style1.rap-container .rap-volume-btn svg:hover {
	filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.9));
}



.custom-style2.rap-container {
	background-color: #e4e4e4;
	color: #566574;
	border-radius: 20px;
}

.custom-style2.rap-container .rap-slider .rap-progress {
	background-color: #959595;
}

.custom-style2.rap-container .rap-slider .rap-progress .rap-pin {
	background-color: #566574;
	height: 18px;
	width: 18px;
	border-radius: 10px;
}

.custom-style2.rap-container .rap-controls .rap-slider .rap-progress .rap-pin {
	top: -5px;
}

.custom-style2.rap-container .rap-controls .rap-slider {
	height: 8px;
	border-radius: 4px;
}

.custom-style2.rap-container .rap-volume .rap-volume-btn.rap-volume-open path {
	fill: #000;
}

.custom-style2.rap-container .rap-volume .rap-volume-controls {
	background-color: #e4e4e4;
}

.custom-style2.rap-container .rap-volume .rap-volume-controls .rap-slider,
.custom-style2.rap-container .rap-volume .rap-volume-controls .rap-slider .rap-progress {
	width: 8px;
}

</style>