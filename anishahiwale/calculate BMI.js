function bmi(weight, height) {
  let a=(weight/Math.pow(height,2))
  if (a<=18.5)
  return "Underweight";
  if (a>18.5 && a<=25.0)
  return "Normal";
  if (a>25.0 && a<=30.0)
  return "Overweight";
  else 
  return "Obese";
}