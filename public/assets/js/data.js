/* Sample dataset (replace/extend in production) */
window.CelebScopeData = (function() {
	const countries = [
		{ code: 'US', name: 'United States', flag: '🇺🇸' },
		{ code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
		{ code: 'IN', name: 'India', flag: '🇮🇳' },
		{ code: 'KR', name: 'South Korea', flag: '🇰🇷' },
		{ code: 'BR', name: 'Brazil', flag: '🇧🇷' },
		{ code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
		{ code: 'JP', name: 'Japan', flag: '🇯🇵' },
		{ code: 'FR', name: 'France', flag: '🇫🇷' },
	];

	let id = 1000;
	const nextId = () => ++id;

	const stories = [
		{
			id: nextId(),
			title: 'Global tour surprise collaboration stuns fans',
			snippet: 'Two chart-toppers teased an unexpected duet during the encore last night.',
			content: [
				'Crowds were left in awe as the surprise guest joined on stage to debut a new verse, sparking a frenzy across social media.',
				'Backstage clips show both artists laughing about keeping the moment secret, hinting that more is in the works.'
			],
			date: '2025-08-12',
			image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
			country: countries[0],
			tags: ['tour', 'collab', 'music'],
			celebrities: ['Ava Hart', 'Liam Stone']
		},
		{
			id: nextId(),
			title: 'Film festival red carpet look steals the show',
			snippet: 'A vintage-inspired ensemble became the night’s most discussed style moment.',
			content: [
				'Stylists revealed the piece was a custom rework with hand embroidery, paired with sustainable accessories.',
				'Fans praised the nod to classic cinema, calling it modern yet timeless.'
			],
			date: '2025-08-09',
			image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop',
			country: countries[1],
			tags: ['fashion', 'film', 'redcarpet'],
			celebrities: ['Sofia Lane']
		},
		{
			id: nextId(),
			title: 'Reality show twist has viewers debating alliances',
			snippet: 'A late-game rule change flipped the leaderboard and friendships.',
			content: [
				'Producers confirmed the twist had been planned from the start to test adaptability and strategy.',
				'Contestants reacted with a mix of shock and excitement as new teams formed overnight.'
			],
			date: '2025-08-05',
			image: 'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=1200&auto=format&fit=crop',
			country: countries[2],
			tags: ['tv', 'reality', 'twist'],
			celebrities: ['Riya Kapoor']
		},
		{
			id: nextId(),
			title: 'K-pop group teaser sparks theory storm',
			snippet: 'Symbols in a teaser image have fans decoding possible storylines.',
			content: [
				'Fans discovered hidden runes in the teaser that match lyrics from a previous era, suggesting a narrative continuation.',
				'The label responded with a wink emoji, fueling even more speculation.'
			],
			date: '2025-08-03',
			image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
			country: countries[3],
			tags: ['kpop', 'comeback', 'teaser'],
			celebrities: ['Han Jisoo', 'Min Rae']
		},
		{
			id: nextId(),
			title: 'Beach paparazzi photos trend for wholesome vibe',
			snippet: 'Candid moments of stars playing volleyball are warming timelines.',
			content: [
				'Rather than drama, fans appreciated the light-hearted clips of spontaneous gameplay and team spirit.',
				'Photographers credited the sunny weather and festive crowd for the cheerful shots.'
			],
			date: '2025-08-01',
			image: 'https://images.unsplash.com/photo-1506703244757-7f8b5a17ecfb?q=80&w=1200&auto=format&fit=crop',
			country: countries[4],
			tags: ['paparazzi', 'beach', 'trend'],
			celebrities: ['Diego Martins']
		},
		{
			id: nextId(),
			title: 'Afrobeats star teases dance challenge',
			snippet: 'A new chorus preview has creators readying choreography.',
			content: [
				'The snippet features a catchy refrain and percussive break perfect for short-form videos.',
				'Influencers hinted at a coordinated drop once the track releases.'
			],
			date: '2025-07-29',
			image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
			country: countries[5],
			tags: ['music', 'dance', 'challenge'],
			celebrities: ['Ade Oladipo']
		},
		{
			id: nextId(),
			title: 'Anime voice cast surprise cameo delights fans',
			snippet: 'A veteran voice actor made an uncredited appearance in episode 8.',
			content: [
				'Producers said the cameo was a thank-you for earlier mentorship during the project’s early drafts.',
				'Fans spotted the distinctive timbre in a background line, leading to the reveal.'
			],
			date: '2025-07-25',
			image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop',
			country: countries[6],
			tags: ['anime', 'cameo', 'voice'],
			celebrities: ['Kei Nakamura']
		},
		{
			id: nextId(),
			title: 'Fashion house muse shares behind-the-scenes snaps',
			snippet: 'A carousel of fittings and sketches shows the design journey.',
			content: [
				'The creative director thanked the atelier for late-night craftsmanship that brought the vision to life.',
				'Fans praised the transparency into fabric choices and silhouettes.'
			],
			date: '2025-07-20',
			image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
			country: countries[7],
			tags: ['fashion', 'bts', 'atelier'],
			celebrities: ['Camille Laurent']
		}
	];

	return { countries, stories };
})();

