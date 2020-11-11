import { blockRight } from 'components/Icon/data'

Page({
	data: {
		blockRight:blockRight,visible_default: false,
		list: [
			{
				rank: 100,
				title: '夜间海报',
				imgSrc:
					'https://cdn.pixabay.com/photo/2020/05/19/06/30/sun-5189430_1280.jpg',
				url: '',
				daily: true,
				durations: [
					{
						startTime: '00:00:00',
						endTime: '23:59:59'
					}
				]
			},
			{
				rank: 6,
				title: '短信活动',
				imgSrc:
					'https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_1280.jpg',
				url: '',
				daily: true,
				durations: [
					{
						startTime: '00:00:00',
						endTime: '23:59:59'
					}
				]
			},
			{
				rank: 1,
				title: '抽奖活动',
				imgSrc:
					'https://cdn.pixabay.com/photo/2014/12/17/21/35/drop-of-water-571956_1280.jpg',
				url: '',
				daily: false,
				durations: [
					{
						startTime: '2020/5/25 00:00:00',
						endTime: '2020/11/28 23:59:59'
					},
					{
						startTime: '2020/12/25 00:00:00',
						endTime: '2020/12/28 23:59:59'
					}
				]
			},
			{
				rank: 4,
				title: '买100送200',
				imgSrc:
					'https://cdn.pixabay.com/photo/2014/11/25/16/32/drop-of-water-545377_1280.jpg',
				target: 'miniProgram',
				appId: '12312312mdmsadmasqaasdasd',
				path: '/pages/goods?id=103',
				version: 'develop',
				daily: false,
				durations: [
					{
						startTime: '2020/5/25 00:00:00',
						endTime: '2020/11/28 23:59:59'
					}
				]
			}
		]
	},
	onOption (e: any) {
		const _that = this
		const { mark: { type } } = e

		if (!type) return

		_that.setData({
			[`visible_${type}`]: true
		})
	}
})
