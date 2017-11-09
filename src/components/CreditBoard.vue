<template>
    <div id="credit-board">
        <div class="credit-board-box-1"></div>
        <div class="credit-board-box-2"></div>
        <div class="credit-totol">总学分</div>
        <div id="credit-totol"> {{ creditTotal }} </div>
        <div class="credit-get">已修学分</div>
        <div id="credit-get"> {{ creditGet }} </div>
    </div>
</template>

<script>
export default {
    name: "CreditBoard",
    data: function () {
        return {
            creditTotal: 160.5,
            creditGet: 76, 
        }
    },
}
</script>

<style scoped>
#credit-board {
    position: fixed;
    top: 170px;
    right: 12%;

    width: 180px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    font-size: 1.1em;
    line-height: 35px;
    text-align: center;
    z-index: 5;

    background-color: rgba(255, 255, 255, 0.3);
}

.credit-board-box-1 {
    position: absolute;
    left: -5px;
    top: -5px;
    display: block;
    width: 10px;
    height: 35px;
    background-color: #c9d8f2;
    z-index: 6;
}

.credit-board-box-2 {
    position: absolute;
    left: -15px;
    top: -10px;
    display: block;
    width: 15px;
    height: 10px;
    background-color: rgba(75, 126, 213, 0.8);
    z-index: 6;
}

.credit-totol{
    width: 90px;
    height: 35px;
    background-color: #4b7ed5;
    color: white;
    z-index: 7;
}

.credit-get {
    width: 90px;
    height: 35px;
    color: #4b7ed5;
}

#credit-totol {
    width: 90px;
    height: 35px;
    box-sizing: border-box;
    background-color: transparent;
    color: #c9d8f2;    
    border-bottom: solid 1px #A5BEEA;
}

#credit-get {
    width: 90px;
    height: 35px;
    box-sizing: border-box;

    background-color: #c9d8f2;
    color: white;
    border-top: solid 1px #A5BEEA;
}
</style>

