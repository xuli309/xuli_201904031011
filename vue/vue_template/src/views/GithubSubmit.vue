<template>
    <div>
        <div id="demo">
      <h1>Latest Vue.js Commits</h1>
      <template v-for="branch in branches">
        <input
          type="radio"
          :id="branch"
          :value="branch"
          name="branch"
          v-model="currentBranch"
        />
        <label :for="branch">{{ branch }}</label>
      </template>
      <p>vuejs/vue@{{ currentBranch }}</p>
      <ul>
        <li v-for="record in commits">
          <a :href="record.html_url" target="_blank" class="commit"
            >{{ record.sha.slice(0, 7) }}</a
          >
          - <span class="message">{{ record.commit.message | truncate }}</span
          ><br />
          by
          <span class="author"
            ><a :href="record.author.html_url" target="_blank"
              >{{ record.commit.author.name }}</a
            ></span
          >
          at
          <span class="date">{{ record.commit.author.date | formatDate }}</span>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
    var apiURL = "http://localhost:8080/aa.json";

    export default {
        data() {
            return {
                branches: ["master", "dev"],
                currentBranch: "master",
                commits: null
            }
        },
        created () {
            this.fetchData();
        },
        watch: {
          currentBranch: "fetchData"
        },
        filters: { 
            truncate(v) {
                var newline = v.indexOf("\n");
                return newline > 0 ? v.slice(0, newline) : v;
            },
            formatDate(v) {
                return v.replace(/T|Z/g, " ");
            }
        },
        methods: {
            fetchData() {
                var xhr = new XMLHttpRequest();
                var self = this;
                xhr.open("GET", apiURL + self.currentBranch);
                xhr.onload = function() {
                self.commits = JSON.parse(xhr.responseText);
                console.log(self.commits[0].html_url);
                };
                xhr.send();
            }
        },
    }
</script>

<style scoped>

</style>