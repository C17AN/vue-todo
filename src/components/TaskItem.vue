<template >
  <div class="task-item">
    <div class="task-text">{{ task.text }}</div>
    <fa icon="trash-alt" class="delete-icon" @click="removeTask(task.id)"></fa>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    removeTask: Function,
  },
};
</script>

<style scoped>
.task-item {
  height: 3rem;
  width: 300px;
  margin: 1rem 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-item > .task-text {
  margin-left: 2rem;
}

.task-item > .delete-icon {
  margin-right: 2rem;
  cursor: pointer;
}
</style>