<template>
  <div
    class="flex items-center justify-center max-h-[100svh] bg-[#f3e6d8] overflow-y-auto md:py-18"
  >
    <main class="bg-white md:p-8 m-auto md:max-w-[720px] md:rounded-2xl">
      <figure>
        <img class="md:rounded-xl" src="../assets/images/recipe-page/image-omelette.jpeg" />
      </figure>
      <article class="p-8 md:px-0 text-[#5f574e]">
        <h1 class="text-4xl text-[#302d2c] font-youngserif leading-[1] mb-6">
          Simple Omelette Recipe
        </h1>
        <p class="font-outfit mb-6">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
          cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <section class="rounded-2xl p-6 bg-[#fff5fa] mb-8">
          <p class="text-[#7b284f] text-xl font-outfit font-semibold mb-4">Preparation time</p>
          <ul class="font-outfit leading-8 ml-4 list-disc list-outside marker:text-[#7b284f]">
            <li><b>Total</b>: Approximately 10 minutes</li>
            <li><b>Preparation</b>: 5 minutes</li>
            <li><b>Cooking</b>: 5 minutes</li>
          </ul>
        </section>
        <section>
          <h2 class="text-3xl font-youngserif text-[#854632] mb-4">Ingredients</h2>
          <ul class="font-outfit leading-8 ml-4 list-disc list-outside marker:text-[#7b284f]">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </section>
        <hr class="my-8 text-gray-200 h-2" />
        <section>
          <h2 class="text-3xl font-youngserif text-[#854632] mb-4">Instructions</h2>
          <ol
            class="font-outfit leading-8 ml-4 list-decimal list-outside marker:font-bold marker:text-[#7b284f]"
          >
            <li>
              <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs.
              Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still
              slightly runny in the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li><b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </section>
        <hr class="my-8 text-gray-200 h-2" />
        <section>
          <h2 class="text-3xl font-youngserif text-[#854632] mb-4">Nutrition</h2>
          <p class="font-outfit mb-4">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table class="w-full">
            <tbody>
              <tr
                class="not-last:border-b-2 border-gray-200 font-outfit"
                v-for="nutrition in nutritions"
                :key="nutrition.label"
              >
                <td class="py-3 pl-6">{{ nutrition.label }}</td>
                <td class="py-3 font-bold text-[#854632]">{{ nutrition.value }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
const nutritions = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
]
</script>

<style scoped></style>
