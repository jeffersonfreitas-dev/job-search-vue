<template>
  <collapsible-accordion header="Organization">
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
          <input type="checkbox" :id="organization" class="mr-3" v-model="selectedOrganizations" 
          :value="organization" @change="selectOrganization"/>
          <label :for="organization">{{ organization }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</collapsible-accordion>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useJobsStore, UNIQUE_ORGANIZATIONS } from '@/stores/jobs';
import { useUserStore, ADD_SELECTED_ORGANIZATIONS} from '@/stores/user';
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue';
  export default {
    name: "JobFiltersSidebarOrganization",
    components: {CollapsibleAccordion},
    data() {
      return {
        selectedOrganizations: [],
      }
    },
    methods: {
      ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
      selectOrganization() {
        this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      }
    },
    computed: {
      ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
    }
  }
</script>