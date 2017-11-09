<template>
    <div class="group-container">
        <template v-for="(group, index) of groups">
            <course-box 
                :index="index+1"
                :type="group.type" 
                :courses="group.courses"
                :key="index"
            ></course-box>
        </template>
    </div>
</template>

<script>

import CourseBox from './CourseBox'

export default {
    name: "GroupContainer",
    props: [
        'groups'
    ],
    components: {
        CourseBox
    }
}
</script>


<style scoped>
.group-container {
    margin-left: 10%;
    width: 770px;
    text-align: center;
}
</style>
