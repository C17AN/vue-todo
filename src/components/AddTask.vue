<template>
  <div class="add-container">
    <input class="add-input" :value="taskName" @change="onTextChange($event)" />
    <button @click="addTask">새 일정 입력</button>
  </div>
</template>
    
<script>
export default {
  name: "add-task",
  props: {
    onTextChange: Function,
    addTask: Function,
    taskName: String,
  },
};
</script>

<style scoped>
.add-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cdcdcd;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 12px;
}

.add-input {
  margin-right: 1rem;
}
</style>