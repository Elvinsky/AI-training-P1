<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}>();
</script>

<template>
  <div
    tabindex="0"
    :class="[
      'flex flex-col items-center p-8 rounded-lg shadow-md transition-all outline-none',
      'focus:ring-4 focus:ring-blue-400',
      'hover:shadow-2xl',
      'cursor-pointer',
      props.isFeatured
        ? 'bg-blue-800 text-white scale-105 z-10'
        : 'bg-white text-gray-900',
      'w-full sm:w-80',
    ]"
  >
    <div
      :class="[
        'text-lg font-semibold mb-2',
        props.isFeatured ? 'text-white' : 'text-gray-900',
      ]"
    >
      {{ props.plan }}
    </div>
    <div
      :class="[
        'text-4xl font-bold mb-4',
        props.isFeatured ? 'text-white' : 'text-gray-900',
      ]"
    >
      ${{ props.price }}
    </div>
    <ul class="flex-1 w-full mb-6">
      <li>
        <div
          :class="
            props.isFeatured
              ? 'border-t border-blue-300 opacity-60 mx-2'
              : 'border-t border-gray-300 opacity-60 mx-2'
          "
        ></div>
      </li>
      <li v-for="(feature, i) in props.features" :key="i">
        <div
          :class="[
            'py-2 text-center text-base font-medium',
            props.isFeatured ? 'text-white' : 'text-gray-900',
          ]"
        >
          {{ feature }}
        </div>
        <div
          v-if="i < props.features.length - 1"
          :class="
            props.isFeatured
              ? 'border-t border-blue-300 opacity-60 mx-2'
              : 'border-t border-gray-300 opacity-60 mx-2'
          "
        ></div>
      </li>
      <li>
        <div
          :class="
            props.isFeatured
              ? 'border-t border-blue-300 opacity-60 mx-2'
              : 'border-t border-gray-300 opacity-60 mx-2'
          "
        ></div>
      </li>
    </ul>
    <button
      :class="[
        'mt-auto w-full py-2 px-4 rounded font-semibold transition border border-current focus:outline-none focus:ring-2 focus:ring-blue-400',
        props.isFeatured
          ? 'bg-white text-blue-800 hover:bg-blue-700 hover:text-white border-white'
          : 'bg-transparent hover:bg-blue-600 hover:text-white',
      ]"
    >
      SUBSCRIBE
    </button>
  </div>
</template>
