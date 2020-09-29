var countries = [
    { name: 'China', population: 1369140000 },
    { name: 'India', population: 1297063039 },
    { name: 'US', population: 320646000 },
    { name: 'Indonesia', population: 13691400 },
    { name: 'Brazil', population: 204129000 },
    { name: 'Pakistan', population: 189787000 },
    { name: 'Nigeria', population: 183583000 },
    { name: 'Bangladesh', population: 158286000 },
    { name: 'Russia', population: 146267288 },
    { name: 'Japan', population: 126910000 },
    { name: 'Mexico', population: 121005815 },
    { name: 'Philippines', population: 101256700 },
    { name: 'Vietnam', population: 90730000 },
    { name: 'Ethiopia', population: 90076012 },
    { name: 'Egypt', population: 88311000 },
    { name: 'Germany', population: 80925000 }
];

// list countries by name
console.log(
    countries.map(c => c.name)
);

// sort countries by population
console.log(
    countries.sort((a, b) => b.population - a.population)
);

// sort countries by name
console.log(
    countries.sort((a, b) => a.name.localeCompare(b.name))
)