<template>
    <div>
        <div class="box-header">
            <div class="box-name">
                <span> {{ index }} </span> {{ type }}
            </div>
            <div class="box-board">
                <div class="board-item">应修</div>
                <div class="board-credit"> {{ creditTotal }} </div>
                <div class="board-item">已修</div>
                <div class="board-credit"> {{ creditGet }} </div>
            </div>
        </div>
        <div class="box-container">
            <template v-for="course of courses">
                <course-box-item :course="course" :key="course.id"></course-box-item>
            </template>    
        </div>
    </div>
</template>

<script>
import CourseBoxItem from './CourseBoxItem'

export default {
    name: "CourseBox",
    props: [
        'index', 'type', 'courses'
    ],
    data: function () {
        return {
            creditTotal: 16,
            creditGet: 0,
        }
    },
    components: {
        CourseBoxItem
    }
}
</script>

<style scoped>
.box-header {
    display: flex;
    margin: 40px 0 40px -30px;;
}

.box-name {
    position: relative;
    width: 155px;
    height: 38px;

    padding-left: 25px;
    line-height: 38px;

    font-size: 1.2em;
    letter-spacing: 0.1em;

    background-color: #cfcfcf;
    color: white;
}

.box-name > span {
    position: absolute;
    left: 0;

    box-sizing: border-box;
    width: 25px;
    height: 28px;
    margin: 5px 6px;
    line-height: 28px;
    letter-spacing: 0;
    background-color: #f4f4f4;
    color: #cfcfcf;
}

.box-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    width: 85px;
    height: 38px;
    margin-left: 30px;

    font-size: 0.8em;
}

.board-item {
    box-sizing: border-box;
    width: 50px;
    height: 18px;

    background-color: #bedbea;
    color: white;
}

.board-credit {
    box-sizing: border-box;
    width: 30px;
    line-height: 16px;

    color: #bedbea;
    border: solid 1px #bedbea;
}

.box-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>
