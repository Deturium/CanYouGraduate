<template>
	<div id="app">
		<h1 class="title">can you graduate</h1>
		<credit-board />
		<group />
	</div>
</template>

<script>
import CreditBoard from './components/CreditBoard'
import Group from './components/Group'

export default {
	name: 'app',
	components: {
		CreditBoard,
		Group,
	}
}
</script>

<style scoped>
.title {
	width: 1020px;
    margin: 30px auto;
    font-family: "HFF Clip Hanger";
    font-size: 3em;
    text-transform: uppercase;
    text-align: center;

    color: #93b8e5;
}
</style>
