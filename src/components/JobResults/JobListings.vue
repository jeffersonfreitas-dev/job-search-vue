<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayJobs" :key="job.id" :job="job"/>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link v-if="previousPage" :to="{name: 'JobResults', query: {page: previousPage}}" role="link"
          class="mx-3 text-sm font-semibold text-brand-blue-1">
            Previous
          </router-link>

          <router-link v-if="nextPage" :to="{name: 'JobResults', query: {page: nextPage}}" role="link"
          class="mx-3 text-sm font-semibold text-brand-blue-1">
            Next
          </router-link>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue';
import { mapActions, mapState } from "pinia";
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS_BY_ORGANIZATIONS } from "@/stores/jobs";

  export default {
    name: "JobListings",
    components: {
      JobListing
    },
    computed: {
      currentPage() {
        return Number.parseInt(this.$route.query.page || "1");
      }, 
      previousPage() {
        const previousPage = this.currentPage - 1;
        const firstPage = 1;
        return previousPage >= firstPage ? previousPage : undefined;
      },
      
      ...mapState(useJobsStore, {
        FILTERED_JOBS_BY_ORGANIZATIONS,
        nextPage() {
          const nextPage = this.currentPage + 1;
          const maxPage = Math.ceil(this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10);
          return nextPage <= maxPage ? nextPage : undefined;
        },  
        displayJobs() {
          const pageNumber = this.currentPage;
          const firstJobIndex = (pageNumber - 1) * 10;
          const lastJobIndex = pageNumber * 10;
          return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(firstJobIndex, lastJobIndex);
        }
      }),
    },
    async mounted() {
      this.FETCH_JOBS();
    },
    methods: {
      ...mapActions(useJobsStore, [FETCH_JOBS])
    }
  }
</script>