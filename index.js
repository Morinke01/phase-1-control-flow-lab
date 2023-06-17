let feet;
function scuberGreetingForFeet(feet){
  if(feet<=400){
    return "This one is on me!";
  }
  else if(feet>2000 && feet<=2500){
    return "I will gladly take your thirty bucks.";
  }
  else {   
     return "No can do.";
  }
}
scuberGreetingForFeet(199);

let city;
function ternaryCheckCity(city){
  return city=="NYC" ? "Ok, sounds good." : "No go.";

}
ternaryCheckCity("NYC");

let tip;
function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }

}
switchOnCharmFromTip("generous");