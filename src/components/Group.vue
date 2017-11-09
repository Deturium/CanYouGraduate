<template>
    <div class="container">
        <template v-for="(groups, index) of allGroups">
            <div class="group-header" :key='index'>
                <div class="group-order"> {{ index+1 }} </div>
                <div class="group-title"> {{ groupName }} </div>
            </div>
            <group-container
                :groups="groups"
                :key="index"
            ></group-container>
        </template>
    </div>
</template>

<script>
import { general_course, classified_course, professional_course } from '../assets/se'

import GroupContainer from './GroupContainer'

export default {
    name: "Group",
    data: function () {
        return {
            allGroups: [general_course, classified_course, professional_course],
            groupName: "必修课程"
        }
    },
    components: {
        GroupContainer
    }
}
</script>

<style scoped>
.container {
    width: 960px;
    margin: 0 auto;
    margin-top: 100px; 
    padding: 0 40px;
	text-align: center;
}

.group-header {
    position: relative;
    display: flex;
    margin-top: 50px;
}

.group-header::before {
    content: "";
    position: absolute;
    left: -10px;
    top: -5px;
    display: block;
    width: 10px;
    height: 40px;
    background-color: #e0e0e0;
    transform: skewY(45deg)
}

.group-order {
    position: absolute;
    left: -40px;
    top: -10px;
    width: 30px;
    height: 40px;

    font-size: 25px;
    line-height: 40px;
    
    background-color: #7fa6dd;
    color: white;
}

.group-title {
    width: 140px;
    height: 40px;

    font-size: 1.5em;
    line-height: 40px;
    letter-spacing: 0.1em;

    background-color: #7fa6dd;
    color: white;
}
</style>
