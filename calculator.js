function calculatenetsalary(basicsalary, benefits) {
  const grosssalary = basicsalary + benefits;
  const nssf = Math.min(grosssalary * 0.06, 1080);

  const nhifrates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 },
  ];

  const nhif = nhifrates.find(
    (rate) => grosssalary >= rate.min && grosssalary <= rate.max
  ).deduction;

  let taxablepay = grosssalary - nssf;
  let payee = 0;

  if (taxablepay <= 24000) {
    payee = taxablepay * 0.1;
  } else if (taxablepay <= 32333) {
    payee = 24000 * 0.1 + (taxablepay - 24000) * 0.25;
  } else {
    payee = 24000 * 0.1 + 8333 * 0.25 + (taxablepay - 32333) * 0.3;
  }

  const netsalary = grosssalary - (payee + nhif + nssf);

  return {
    grosssalary,
    nssf,
    nhif,
    payee,
    netsalary,
  };
}

console.log(calculatenetsalary(5000, 10000));
