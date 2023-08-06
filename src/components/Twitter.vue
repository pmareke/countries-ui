<script>
export default {
  name: "Twitter",
  props: ["hits", "seconds"],
  setup(props) {
    return { title: `Countries Quiz is awesome!\nI got ${props.hits} correct countries in ${props.seconds} seconds, can you beat me? #countries #quiz`}
  }
}
</script>

<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <ShareNetwork
            network="twitter"
            url="https://countries.pmareke.com/"
            :title="title"
            description="If you enjoy the game, please spread the word!"
            twitter-user="pmareke">
            <span>Share on Twitter</span>
        </ShareNetwork>
    </button>
</template>

