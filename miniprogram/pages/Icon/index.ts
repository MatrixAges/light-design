import data from '../../components/Icon/rest/data'

const normal_icons: Array<string> = []
const more_icons: Array<string> = []

for (const i in data) {
	if (!i) break

	//@ts-ignore
	if (!data[i].filled) {
		normal_icons.push(i)
	} else {
		more_icons.push(i)
	}
}

Page({
	data: {
		filled: false,
		normal_icons: normal_icons,
		more_icons: more_icons
	},
	onChangeType () {
		this.setData({ filled: !this.data.filled })
	}
})
