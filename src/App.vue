<template>
  <div class="app-container">
    <h1>Task Manager</h1>
    <button class="add-button" @click="setAddMode">
      {{ isAddMode ? "추가 완료" : "새로운 일정 추가" }}
    </button>
    <add-task
      v-if="isAddMode"
      :addTask="addTask"
      :onTextChange="onTextChange"
      :taskName="taskName"
    ></add-task>
    <task-list :tasks="tasks" :removeTask="removeTask" />
    <div class="task-left" v-if="tasks.length > 0">
      현재 {{ tasks.length }}개의 일정이 존재합니다.
    </div>
    <div class="task-left" v-else>현재 수행할 일정이 없습니다.</div>
  </div>
</template>
    
<script>
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default {
  name: "App",
  data() {
    return {
      isAddMode: false,
      taskName: "",
    };
  },
  computed: {
    tasks() {
      return this.$store.state.taskList;
    },
  },
  methods: {
    setAddMode() {
      this.isAddMode = !this.isAddMode;
    },

    onTextChange(e) {
      this.taskName = e.target.value;
    },

    addTask() {
      this.$store.commit({
        type: "addTask",
        task: { id: this.tasks.length, text: this.taskName },
      });
      // if (this.taskName !== "") {
      //   const newTask = { id: this.tasks.length, text: this.taskName };
      //   this.tasks = [...this.tasks, newTask];
      //   this.taskName = "";
      // } else {
      //   return;
      // }
    },

    removeTask() {
      this.$store.commit({
        type: "removeTask",
        id: this.tasks.length - 1,
      });
      //this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
  components: { AddTask, TaskList },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid lightgreen;
  padding: 3rem;
  border-radius: 10%;
}

.add-button {
  transition: 0.5s ease-out;
  background-color: rgb(133, 233, 133);
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: rgb(56, 109, 56);
  color: white;
}

.task-left {
  margin-top: 1rem;
}
</style>