<!-- eslint-disable max-len -->
<template>
  <div class="home-recomendation-component">
    <div
      :className="['grid gap-3 max-w-[50rem] m-auto '
        + (isCell ? 'grid-cols-1' : 'grid-cols-2')]">
      <home-recomendation-box :obj="obj[0]" />
      <home-recomendation-box :obj="obj[1]" />
    </div>
  </div>
</template>

<script>
import HomeRecomendationBox from './HomeRecomendationBox.vue';

export default {
  name: 'HomeRecomendationComponent',
  components: {
    HomeRecomendationBox,
  },
  props: ['isCell'],
  data: () => ({
    obj: [
      {
        title: 'Google Ads',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid voluptates nesciunt? Cupiditate consequuntur in nesciunt! Nam unde, vitae vero possimus voluptatum, voluptatem officia nisi ex tempore cum, expedita quisquam!',
        name: 'Joaninha123',
        rate: '4.9',
      },
      {
        title: 'Google Ads',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid voluptates nesciunt? Cupiditate consequuntur in nesciunt! Nam unde, vitae vero possimus voluptatum, voluptatem officia nisi ex tempore cum, expedita quisquam!',
        name: 'Joãozinho',
        rate: '4.7',
      },
    ],
  }),
  beforeMount() {
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    const placeId = 'ChIJ_U31Zgz63JQR1s87zNMqqfY';

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if ('reviews' in data.result) {
          const { reviews } = data.result;

          const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);
          const bestReviews = sortedReviews.slice(0, 2);

          if (bestReviews.length > 0) {
            bestReviews.forEach((review, index) => {
              const reviewerName = review.author_name || 'Anonymous';
              const comment = review.text || 'No comment';
              const rating = review.rating || 'No rating';

              this.obj[index].name = reviewerName;
              this.obj[index].text = comment;
              this.obj[index].rate = rating;
            });
          } else {
            console.log('No reviews found.');
          }
        } else {
          console.log('No reviews found.');
        }
      })
      .catch((error) => console.error('Error:', error));
  },
};
</script>
