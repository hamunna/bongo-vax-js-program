
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

	let vaccination = { A: [], B: [], C: [], D: [] };

	for (let person of people) {
		if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
			vaccination.A.push(person);
		} else if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {
			vaccination.B.push(person);

		} else if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {
			vaccination.C.push(person);
		} else {
			vaccination.D.push(person);
		}
	}
	return vaccination;

}

console.log(vaxTrail(people));