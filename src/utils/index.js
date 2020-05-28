export const throttle = (fn, ms) => {
	let canRun = true

	return function (){
		if (!canRun) return

		canRun = false

		setTimeout(() => {
			fn.apply(this, arguments)

			canRun = true
		}, ms)
	}
}
