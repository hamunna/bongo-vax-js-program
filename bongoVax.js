
const people = [
	{ name: 'Shakib', age: 21, temperature: 98 },
	{ name: 'Tamim', age: 27, temperature: 100 },
	{ name: 'Mushfiq', age: 22, temperature: 98 },
	{ name: 'Mashrafee', age: 30, temperature: 98 },
	{ name: 'Riad', age: 39, temperature: 98 },
	{ name: 'Mustafiz', age: 40, temperature: 101 },
	{ name: 'Taskin', age: 46, temperature: 98 },
	{ name: 'Liton', age: 50, temperature: 98 },
]

const vaxTrail = people => {

	let queues = { A: [], B: [], C: [], D: [] };

	for (let person of people) {

		if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {

			queues.A.push(person);
			queues.A.sort(function (a, b) {
				return Math.abs(a.age % 2) - Math.abs(b.age % 2);
			});

		} else if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {

			queues.B.push(person);
			queues.B.sort(function (a, b) {
				return Math.abs(a.age % 2) - Math.abs(b.age % 2);
			});

		} else if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {

			queues.C.push(person);
			queues.C.sort(function (a, b) {
				return Math.abs(a.age % 2) - Math.abs(b.age % 2);
			});

		} else {

			queues.D.push(person);
			queues.D.sort(function (a, b) {
				return Math.abs(a.age % 2) - Math.abs(b.age % 2);
			});

		}
	}

	return queues;
}

console.log(vaxTrail(people));
vaxTrail(people)