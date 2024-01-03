<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>   
  </div>
</template>
<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
export default {
  name:'home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
  }
}
</script>
<style scoped>

</style>