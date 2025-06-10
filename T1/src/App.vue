<script setup>
import PricingCard from "./PricingCard.vue";

const plans = [
  {
    plan: "Standard",
    price: "100",
    features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
    isFeatured: false,
  },
  {
    plan: "Pro",
    price: "200",
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    plan: "Expert",
    price: "500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
    isFeatured: false,
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-2">
    <h1 class="text-2xl sm:text-3xl font-bold text-white mb-10 mt-4">
      Pricing
    </h1>
    <div
      class="w-full flex flex-col sm:flex-row justify-center items-center gap-y-8 sm:gap-y-0 sm:gap-8 max-w-5xl px-2 sm:px-0"
    >
      <PricingCard
        v-for="plan in plans"
        :key="plan.plan"
        :plan="plan.plan"
        :price="plan.price"
        :features="plan.features"
        :isFeatured="plan.isFeatured"
        class="sm:mx-0 mx-auto sm:rounded-none sm:first:rounded-l-lg sm:last:rounded-r-lg sm:shadow-none relative"
      >
        <template #default>
          <div v-for="(feature, i) in plan.features" :key="i">
            <div
              class="py-2 text-center text-base font-medium"
              :class="plan.isFeatured ? 'text-white' : 'text-gray-900'"
            >
              {{ feature }}
            </div>
            <div
              v-if="i < plan.features.length - 1"
              class="border-t border-gray-300 opacity-60 mx-2"
            ></div>
          </div>
        </template>
      </PricingCard>
    </div>
  </div>
</template>
