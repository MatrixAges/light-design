import data,{ toggle,cube } from 'components/Icon/data'

type Icon = {
	name: string
	value: { outline: string; filled: string }
}

const normal_icons: Array<Icon> = []
const more_icons: Array<Icon> = []

for (const i in data) {
	if (!i) break

	//@ts-ignore
	if (!data[i].filled) {
		normal_icons.push({
			name: i,
			//@ts-ignore
			value: data[i]
		})
	} else {
		more_icons.push({
			name: i,
			//@ts-ignore
			value: data[i]
		})
	}
}

Page({
	data: {
		filled: false,
		normal_icons: normal_icons,
            more_icons: more_icons,
            toggle,
            cube
	},
	onChangeType () {
		this.setData({ filled: !this.data.filled })
	}
})
