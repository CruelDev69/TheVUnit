const Discord = require('discord.js')
const fetch = require('node-fetch')
let TheVUnitError = require('./errors/Error.js')

/**
 * @param {Discord.Client} client
 * @param {import('../index').automemeOptions} options
 */

/**
 --- options for automeme ---
 
  channel => (Channel ID) String
  subReddits => Array (Custom SubReddit)
  interval => Number
  embedColor => HexColor
 */

async function automeme(client, options = []) {
	let ch = options.channel

	let sub = [
		'meme',
		'me_irl',
		'memes',
		'dankmeme',
		'dankmemes',
		'ComedyCemetery',
		'terriblefacebookmemes',
		'funny'
	]

	if (Array.isArray(options.subReddits)) {
		options.subReddits.forEach((subb) => {
			sub.push(subb)
		})
	} else if (!Array.isArray(options.subReddits)) {
		sub.push(options.subReddits)
	} else if (options.subReddits === undefined || !options.subReddits) {
	}

	const random = Math.floor(Math.random() * sub.length)

	let interv
	if (options.interval) {
		if (options.interval <= 300000)
			throw new TheVUnitError(
				`Interval Time should be above 300000/5 minutes.`,
				'Interval should not be less than 300000ms'
			)
		interv = options.interval
	} else {
		interv = 300000
	}

	setInterval(() => {
		const channel = client.channels.cache.get(ch)
		if (!channel)
			throw new TheVUnitError(
				"Invalid channel id has been provided or I don't have permissions to view the channel",
				'Check my permissions or try using other channel id'
			)

		fetch(`https://www.reddit.com/r/${sub[random]}/random/.json`)
			.then((res) => res.json())
			.then((response) => {
				if (!response) return
				if (!response[0].data) return

				if (response[0].data.children[0].data.over_18 === true) return

				let perma = response[0].data.children[0].data.permalink
				let url = `https://reddit.com${perma}`
				let memeImage =
					response[0].data.children[0].data.url ||
					response[0].data.children[0].data.url_overridden_by_dest
				let title = response[0].data.children[0].data.title
				let ratio = response[0].data.children[0].data.upvote_ratio

				const embed = new Discord.MessageEmbed()
					.setTitle(`${title}`)
					.setURL(`${url}`)
					.setImage(memeImage)
					.setColor(options.embedColor || '#FFFF00')
					.setFooter(`👍 Upvote Count: ${ratio} | © TheVUnit`)
				channel.send({ embeds: [embed] })
			})
	}, interv)
}

module.exports = automeme
