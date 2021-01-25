<template >
  <div class="task-container">
    <ul>
      <li :key="task" v-for="task in tasks">
        <task-item :task="task" :removeTask="removeTask" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  name: "task-list",
  props: {
    tasks: Array,
    removeTask: Function,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>