/* The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft? */


const massOfModules: number[] = [ 142388, 128965, 137791, 93517, 98732, 83948, 64037, 124603, 61093, 132020, 99227, 73227, 75536, 53249, 149300, 75975, 146023, 117855, 105380, 127149, 146894, 73257, 69233, 67090, 87932, 107473, 127873, 132999, 139324, 92861, 83651, 91064, 137074, 94188, 96969, 96592, 116019, 52969, 125456, 97428, 112642, 99901, 89405, 91983, 56445, 64917, 72393, 127679, 122430, 142036, 87228, 118322, 51965, 67787, 130183, 124044, 101324, 107800, 85585, 67886, 140772, 138280, 73183, 116096, 79239, 105958, 92719, 70896, 115279, 51912, 74396, 75121, 131819, 67970, 96436, 107074, 135588, 97510, 57877, 114504, 50521, 100144, 67840, 51319, 73801, 128333, 123521, 105916, 92601, 146340, 135355, 51461, 95648, 92635, 126711, 75717, 136114, 106814, 89913, 119734 ];

calculateOverallFuelRequirements(massOfModules);

function calculateOverallFuelRequirements(massOfModules: number[]) {
  const fuelRequiredForModules = massOfModules.map( mass => calculateFuelRequirementPerModule(mass));
  const totalFuelRequiredForTakeoff = fuelRequiredForModules.reduce((a, b) => a + b, 0)
  console.log(totalFuelRequiredForTakeoff);
}

function calculateFuelRequirementPerModule(mass: number) {
  return Math.floor(mass / 3) - 2
};


