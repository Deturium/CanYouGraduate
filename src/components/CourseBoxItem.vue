<template>
    <div class="course-box-item" :style="color1" @click="take()">
        <div class="block" :style="color2"></div>
        <div class="course-id" :style="color2">
            {{ course.id }}
        </div>
        <div class="course-name" :class="{ small: isTooLong }">
            {{ course.name }}
        </div>
        <div class="course-credit">
            {{ course.credit }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CourseBoxItem",
    props: [
        'course'
    ],
    data: function() {
        return {
            taked: false,
        }
    },
    methods: {
        take: function() {
            this.taked = !this.taked
        }
    },
    computed: {
        isTooLong: function() {
            return this.course.name.length > 10
        },
        color1: function() {
            let color;
            switch (this.course.credit) {
                case "1.0":
                case "1.5":
                    color = "#53bbf4"
                    break;
                case "2.0":
                case "2.5":
                    color = "#ff926c"
                    break;
                case "3.0":
                case "3.5":
                    color = "#ef6fa0"
                    break;
                case "4.0":
                case "4.5":
                    color = "#986db2"
                    break;
                default: 
                    color = "#5fc9c6"
            }

            if (!this.taked) {
                color = "#91989f"
            }

            return {
                backgroundColor: color
            }
        },
        color2: function() {
            let color;
            switch (this.course.credit) {
                case "1.0":
                case "1.5":
                    color = "#91d9f9"
                    break;
                case "2.0":
                case "2.5":
                    color = "#ffb692"
                    break;
                case "3.0":
                case "3.5":
                    color = "#ff83c1"
                    break;
                case "4.0":
                case "4.5":
                    color = "#b28fce"
                    break;
                default: 
                    color = "#a5dee4"
            }

            if (!this.taked) {
                color = "#bababa"
            }

            return {
                backgroundColor: color
            }
        }
    }
}

</script>

<style scoped>
.course-box-item {
    position: relative;
    width: 150px;
    height: 110px;

    margin-bottom: 40px;
    margin-right: 42px;

    background-color: #53bbf4;
    color: white;
}

.block {
    position: absolute;
    top: -12.5px;
    left: -12px;
    width: 30px;
    height: 25px;
    background-color: #91d9f9;
    opacity: 0.5;
}

.course-id {
    position: absolute;
    top: -8px;
    left: 8px;
    width: 75px;
    height: 16px;
    font-size: 0.8em;
    line-height: 16px;

    background-color: #91d9f9;
    z-index: 2;
}

.course-name {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: inherit;
    height: inherit;

    box-sizing: border-box;
    padding: 10px;

    font-size: 1.4em;
    z-index: 2;
}

.small {
    font-size: 1.1em;
}

.course-credit {
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    font-size: 90px;
    letter-spacing: -5px;
    line-height: 110px;
    user-select: none;
    opacity: 0.3;
}
</style>
